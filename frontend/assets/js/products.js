const productGrid = document.querySelector("[data-product-grid]");
const productStatus = document.querySelector("[data-product-status]");

const formatPrice = (value) => {
    if (typeof value !== "number") {
        return value;
    }

    return value.toLocaleString("vi-VN") + "đ";
};

const apiBaseUrl = "http://localhost:3000";

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

const renderProducts = (products) => {
    if (!productGrid) {
        return;
    }

    if (!products.length) {
        productGrid.innerHTML = "<p>Hien chua co san pham nao.</p>";
        return;
    }

    productGrid.innerHTML = products
        .map((product) => {
            const imageUrl = resolveImageUrl(product.image_url);
            const description = product.description || "";

            return `
                <div class="product-card">
                    <div class="product-image">
                        <img src="${imageUrl}" alt="${product.name}">
                    </div>
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p class="product-desc">${description}</p>
                        <p class="product-price">${formatPrice(product.price)}</p>
                        <a href="#" class="btn-secondary">Xem Chi Tiet</a>
                    </div>
                </div>
            `;
        })
        .join("");
};

const loadProducts = async () => {
    if (productStatus) {
        productStatus.textContent = "Dang tai san pham...";
    }

    try {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();

        renderProducts(Array.isArray(data) ? data : []);

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
