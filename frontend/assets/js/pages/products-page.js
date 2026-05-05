import { fetchProducts } from "../api.js";
import { renderProductCards } from "../ui.js";

const productGrid = document.querySelector("[data-product-grid]");
const productStatus = document.querySelector("[data-product-status]");

const loadProducts = async () => {
    if (productStatus) {
        productStatus.textContent = "Dang tai san pham...";
    }

    try {
        const products = await fetchProducts({ limit: 12 });
        renderProductCards({
            products,
            container: productGrid
        });

        if (productStatus) {
            productStatus.textContent = "";
        }
    } catch (error) {
        if (productStatus) {
            productStatus.textContent = "Khong the tai san pham. Vui long thu lai.";
        }

        console.error(error);
    }
};

loadProducts();
