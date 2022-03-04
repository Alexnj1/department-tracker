const mysql = require("mysql2");

// connect to the SQL database

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Youfoundme69!",
  database: "company",
});

module.exports = db;
