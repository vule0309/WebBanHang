const formatPrice = (value) => {
    if (typeof value !== "number") {
        return value;
    }

    return value.toLocaleString("vi-VN") + "đ";
};

const resolveImageUrl = (value) => {
    if (!value) {
        return `${window.api.API_BASE_URL}/images/placeholder.jpg`;
    }

    if (value.startsWith("http://") || value.startsWith("https://")) {
        return value;
    }

    if (value.startsWith("/")) {
        return `${window.api.API_BASE_URL}${value}`;
    }

    return `${window.api.API_BASE_URL}/${value}`;
};

const renderProductCards = ({ products, container, showBadge = false }) => {
    if (!container) {
        return;
    }

    if (!products.length) {
        container.innerHTML = "<p>Hien chua co san pham nao.</p>";
        return;
    }

    container.innerHTML = products
        .map((product) => {
            const imageUrl = resolveImageUrl(product.image_url);
            const description = product.description || "";

            return `
                <div class="product-card">
                    ${showBadge ? "<div class=\"product-badge featured\">Noi bat</div>" : ""}
                    <div class="product-image">
                        <img src="${imageUrl}" alt="${product.name}">
                    </div>
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        ${description ? `<p class=\"product-desc\">${description}</p>` : ""}
                        <p class="product-price">${formatPrice(product.price)}</p>
                        <a href="#" class="btn-secondary">Xem Chi Tiet</a>
                    </div>
                </div>
            `;
        })
        .join("");
};

window.ui = {
    renderProductCards
};
