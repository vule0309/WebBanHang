const API_BASE_URL = "http://localhost:3000";

const buildUrl = (path, params = {}) => {
    const query = new URLSearchParams(params);
    const queryString = query.toString();

    return `${API_BASE_URL}${path}${queryString ? `?${queryString}` : ""}`;
};

const fetchJson = async (url) => {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Khong the tai du lieu.");
    }

    return response.json();
};

const fetchProducts = async ({ featured = false, limit = 12 } = {}) => {
    const params = {};

    if (featured) {
        params.featured = "1";
    }

    if (limit) {
        params.limit = String(limit);
    }

    const url = buildUrl("/products", params);
    const data = await fetchJson(url);

    return Array.isArray(data) ? data : [];
};

window.api = {
    fetchProducts,
    API_BASE_URL
};
