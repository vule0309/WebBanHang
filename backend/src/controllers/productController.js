import { db } from "../config/db.js";

export const getProducts = (req, res) => {
  const isFeatured = req.query.featured === "1";
  const limit = Number.parseInt(req.query.limit, 10);
  const safeLimit = Number.isNaN(limit) ? 12 : Math.min(Math.max(limit, 1), 24);

  if (isFeatured) {
    db.query(
      "SELECT * FROM products WHERE is_featured = 1 ORDER BY created_at DESC LIMIT ?",
      [safeLimit],
      (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
      }
    );
    return;
  }

  db.query("SELECT * FROM products ORDER BY created_at DESC", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};
