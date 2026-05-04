const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

const connectDatabase = () => {
  db.connect((err) => {
    if (err) {
      console.error("Ket noi loi:", err);
      return;
    }
    console.log("Ket noi MySQL thanh cong!");
  });
};

module.exports = {
  db,
  connectDatabase
};
