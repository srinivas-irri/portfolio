import { GoogleGenAI } from "@google/genai";
import portfolioData from "../data/portfolioData";
import { SYSTEM_PROMPT } from "./prompts";
import { getRelevantContext } from "./context";
import { formatResponse } from "./formatter";
import { isProjectQuestion } from "./questions";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export async function askGemini(question) {

  console.log("Question:", question);
  console.log("Is Project Question:", isProjectQuestion(question));

  // Handle project link requests without Gemini
  if (isProjectQuestion(question)) {

     if (!portfolioData.works) {
         return "No project information found.";
      }
      console.log(portfolioData.works);

    return portfolioData.works
      .map((project, index) => `
        ${index + 1}. ${project.title}

        Company:
        ${project.company}

        Technologies:
       ${project.tech?.join(", ") || "Not specified"}

        Live Demo:
        ${project.live}

        Description:
        ${project.description}
        `)
        .join("\n---------------------------------\n");
  }
  

  const context = JSON.stringify(
    getRelevantContext(question),
    null,
    2
);

    const prompt = `
  ${SYSTEM_PROMPT}

  Portfolio Information:

  ${context}

  Visitor Question:

  ${question}
  `;

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      return formatResponse(response.text);

    } 
    
    catch (error) {
    console.error("Gemini Error:", error);
    return `ERROR:
  ${error.name}

  ${error.message}

  ${error.stack}`;
  
    console.log("Projects found:", portfolioData.works.length);
    return `Error: ${error.message || "Unknown error"}`;
  }
}