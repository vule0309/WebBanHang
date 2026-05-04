const featuredGrid = document.querySelector("[data-featured-grid]");
const featuredStatus = document.querySelector("[data-featured-status]");

const apiBaseUrl = "http://localhost:3000";

const formatPrice = (value) => {
    if (typeof value !== "number") {
        return value;
    }

    return value.toLocaleString("vi-VN") + "đ";
};

const resolveImageUrl = (value) => {
    if (!value) {
        return `${apiBaseUrl}/images/placeholder.jpg`;
    }

    if (value.startsWith("http://") || value.startsWith("https://")) {
        return value;
    }

    if (value.startsWith("/")) {
        return `${apiBaseUrl}${value}`;
    }

    return `${apiBaseUrl}/${value}`;
};

const renderFeaturedProducts = (products) => {
    if (!featuredGrid) {
        return;
    }

    if (!products.length) {
        featuredGrid.innerHTML = "<p>Hien chua co san pham noi bat.</p>";
        return;
    }

    featuredGrid.innerHTML = products
        .map((product) => {
            const imageUrl = resolveImageUrl(product.image_url);

            return `
                <div class="product-card">
                    <div class="product-badge featured">Noi bat</div>
                    <div class="product-image">
                        <img src="${imageUrl}" alt="${product.name}">
                    </div>
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p class="product-price">${formatPrice(product.price)}</p>
                        <a href="#" class="btn-secondary">Xem Chi Tiet</a>
                    </div>
                </div>
            `;
        })
        .join("");
};

const loadFeaturedProducts = async () => {
    if (featuredStatus) {
        featuredStatus.textContent = "Dang tai san pham noi bat...";
    }

    try {
        const response = await fetch(`${apiBaseUrl}/products?featured=1&limit=4`);
        const data = await response.json();

        renderFeaturedProducts(Array.isArray(data) ? data : []);

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
