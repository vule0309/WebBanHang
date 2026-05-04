const express = require("express");
const path = require("path");
const { connectDatabase } = require("./src/config/db");
const productRoutes = require("./src/routes/products");

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