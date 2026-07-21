import { scrollToSection } from "./scrollToSection";

export const executeAction = (action) => {

    switch (action) {

        case "about":
        case "experience":
        case "skills":
        case "works":
        case "background":
        case "contact":
            scrollToSection(action);
            break;

        case "resume":
            window.open("/resume.pdf", "_blank");
            break;

        default:
            console.log("No action found:", action);
    }

};