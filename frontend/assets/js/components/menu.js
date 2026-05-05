import { qs, qsa } from "../utils/dom.js";

export const initMenu = () => {
    const menuToggle = qs("[data-menu-toggle]");
    const navigation = qs("#site-nav");
    const navOverlay = qs("[data-nav-overlay]");

    if (!menuToggle || !navigation) {
        return;
    }

    const setMenuState = (isOpen) => {
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.classList.toggle("is-open", isOpen);
        navigation.classList.toggle("open", isOpen);
        document.body.classList.toggle("nav-open", isOpen);
    };

    menuToggle.addEventListener("click", () => {
        const isOpen = navigation.classList.contains("open");
        setMenuState(!isOpen);
    });

    if (navOverlay) {
        navOverlay.addEventListener("click", () => setMenuState(false));
    }

    qsa("a", navigation).forEach((link) => {
        link.addEventListener("click", () => setMenuState(false));
    });

    window.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            setMenuState(false);
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            setMenuState(false);
        }
    });
};
