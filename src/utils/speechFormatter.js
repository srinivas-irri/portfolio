export function formatSpeech(text) {

    return text

        // Email
        .replace(
            /([A-Za-z0-9._%+-]+)@gmail\.com/g,
            (_, email) => `${email.replace(/\./g, " dot ")} at Gmail`
        )

        // LinkedIn
        .replace(
            /https?:\/\/(www\.)?linkedin\.com\/\S*/gi,
            "my LinkedIn profile"
        )

        // GitHub
        .replace(
            /https?:\/\/(www\.)?github\.com\/\S*/gi,
            "my GitHub profile"
        )

        // Generic URLs
        .replace(/https?:\/\/\S+/gi, "my website");

}