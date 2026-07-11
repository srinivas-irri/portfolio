export const scrollToSection = (id) => {

    const element = document.getElementById(id);

    if (!element) {
        console.warn(`Section '${id}' not found`);
        return;
    }

    element.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });

};