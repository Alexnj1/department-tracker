const db = require("../db/connection");
const cTable = require("console.table");

function insertDepartment(department) {
  const sql = `INSERT INTO departments (department_name)
                VALUES (?)`;
  const sqlView = `SELECT * FROM departments ORDER BY id`;
  const params = department.depName;

  db.query(sql, params, (err, result) => {
    if (err) {
      console.log({
        status: "There was an error with your data. (404)",
      });
      return;
    }
    console.log({
      status: "Success",
    });
  });

  db.query(sqlView, (err, rows) => {
    if (err) {
      response = {
        status:
          "There was a server error when trying to view updated Departments Table, 500",
      };
    }
    response = {
      Title: "Departments Table",
      data: rows,
    };
    console.log(`
    ============================
      Updated Departments Table
    ============================`);
    console.table(response.data);
  });
}

module.exports = insertDepartment;
