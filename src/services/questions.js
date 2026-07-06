function isProjectQuestion(question) {
  const q = question.toLowerCase();

  const keywords = [
    "project",
    "projects",
    "portfolio",
    "work",
    "client",
    "demo",
    "live",
    "website",
    "application",
    "app",
    "show me",
    "built",
    "developed"
  ];

  return keywords.some(keyword => q.includes(keyword));
}

export {isProjectQuestion};