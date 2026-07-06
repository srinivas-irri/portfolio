export function formatResponse(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .replace(/`/g, "")
    .replace(/#{1,6}\s/g, "")
    .replace(/>\s/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}