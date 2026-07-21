export const scrollToSection = (id) => {

    const scroll = () => {

        const element = document.getElementById(id);

        console.log("Scrolling to:", id, element);

        if (element) {

            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });

            return true;
        }

        return false;
    };

    // Try immediately
    if (!scroll()) {

        // Retry after React finishes rendering
        setTimeout(scroll, 150);

    }
};