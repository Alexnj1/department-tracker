const db = require("../db/connection");
const inquirer = require("inquirer");

function insertDepartment(department) {
  const sql = `INSERT INTO departments (department_name)
                VALUES (?)`;
  const sqlView = `SELECT * FROM departments`;
  const params = department.depName

  db.query(sql, params, (err, result) => {
    if (err) {
      response = {
        message: "There was a server error, 500",
      };
    }
    // console.table("Updated Departments" + response.data || response.message);
    console.log({
        message: 'Success'
    });
  });

  db.query(sqlView, (err, rows) => {
    if (err) {
      response = {
        message: "There was a server error, 500",
      };
    }
    response = {
      Title: "Departments Table",
      data: rows,
    };
    console.log(`
    ============================
      Updated Departments Table
    ============================`)
    console.table(response.data);
  });
}

module.exports = insertDepartment;
