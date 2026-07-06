import portfolioData from "../data/portfolioData";

export function getRelevantContext(question) {
  const q = question.toLowerCase();

  // Projects
  if (
  q.includes("project") ||
  q.includes("projects") ||
  q.includes("portfolio") ||
  q.includes("live demo") ||
  q.includes("project links") ||
  q.includes("work samples")
) {
  return {
    projects: portfolioData.works
  };
}

  // Skills
  if (
    q.includes("skill") ||
    q.includes("react") ||
    q.includes("angular") ||
    q.includes("javascript") ||
    q.includes("typescript") ||
    q.includes("tailwind") ||
    q.includes("bootstrap")
  ) {
    return {
      about: portfolioData.about,
      skills: portfolioData.skills
    };
  }

  // Experience
  if (
    q.includes("experience") ||
    q.includes("career") ||
    q.includes("company")
  ) {
    return {
      experience: portfolioData.experience
    };
  }

  // Contact
  if (
    q.includes("hire") ||
    q.includes("contact") ||
    q.includes("email") ||
    q.includes("phone") ||
    q.includes("resume")
  ) {
    return {
      contact: portfolioData.contact
    };
  }

  return portfolioData;
}