const featuredGrid = document.querySelector("[data-featured-grid]");
const featuredStatus = document.querySelector("[data-featured-status]");

const loadFeaturedProducts = async () => {
    if (featuredStatus) {
        featuredStatus.textContent = "Dang tai san pham noi bat...";
    }

    try {
        const products = await window.api.fetchProducts({ featured: true, limit: 4 });
        window.ui.renderProductCards({
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
