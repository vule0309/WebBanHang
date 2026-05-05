import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { connectDatabase } from "./src/config/db.js";
import productRoutes from "./src/routes/products.js";

// __dirname không tồn tại trong ESM — phải tự tạo lại
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use("/images", express.static(path.join(__dirname, "public", "images")));
app.use("/products", productRoutes);

connectDatabase();

app.listen(3000, () => {
  console.log("Server chay tai http://localhost:3000");
});