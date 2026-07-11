import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function detectIntent(text) {

    const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash"
    });

    const prompt = `
You are an AI portfolio assistant.

Classify the user's request into ONLY ONE of these values:

hero
about
experience
projects
skills
background
contact

If none matches, return:

unknown

Examples:

"Show me your projects"
projects

"I want to see your work"
projects

"Tell me about yourself"
about

"What technologies do you know?"
skills

"How can I reach you?"
contact

"Can I hire you?"
contact

"My name is John"
unknown

User:
"${text}"

Return only one word.
`;

    const result = await model.generateContent(prompt);

    return result.response.text().trim().toLowerCase();
}