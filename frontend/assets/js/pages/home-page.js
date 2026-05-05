import { fetchProducts } from "../api.js";
import { renderProductCards } from "../ui.js";

const featuredGrid = document.querySelector("[data-featured-grid]");
const featuredStatus = document.querySelector("[data-featured-status]");

const loadFeaturedProducts = async () => {
    if (featuredStatus) {
        featuredStatus.textContent = "Dang tai san pham noi bat...";
    }

    try {
        const products = await fetchProducts({ featured: true, limit: 4 });
        renderProductCards({
            products,
            container: featuredGrid,
            showBadge: true
        });

        if (featuredStatus) {
            featuredStatus.textContent = "";
        }
    } catch (error) {
        if (featuredStatus) {
            featuredStatus.textContent = "Khong the tai san pham noi bat.";
        }

        console.error(error);
    }
};

loadFeaturedProducts();
