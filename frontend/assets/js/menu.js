const menuToggle = document.querySelector("[data-menu-toggle]");
const navigation = document.getElementById("site-nav");
const navOverlay = document.querySelector("[data-nav-overlay]");

const setMenuState = (isOpen) => {
    if (!menuToggle || !navigation) {
        return;
    }

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.classList.toggle("is-open", isOpen);
    navigation.classList.toggle("open", isOpen);
    document.body.classList.toggle("nav-open", isOpen);
};

if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navigation.classList.contains("open");
        setMenuState(!isOpen);
    });

    if (navOverlay) {
        navOverlay.addEventListener("click", () => setMenuState(false));
    }

    navigation.querySelectorAll("a").forEach((link) => {
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
}
