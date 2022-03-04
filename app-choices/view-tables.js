const db = require("../db/connection");
const cTable = require("console.table");

function viewTables(data) {
  if (data.chooseAction === "View all departments") {
    const sql = `SELECT * FROM departments ORDER BY id`;

    db.query(sql, (err, rows) => {
      if (err) {
        console.log({
          status: "There was a server error. (500)",
        });
        return;
      }
      response = {
        Title: "Departments Table",
        data: rows,
      };
      console.log("\n\n DEPARTMENTS \n");
      console.table(response.data || response.message);
    });
  } else if (data.chooseAction === "View all roles") {
    const sql = `SELECT * FROM roles ORDER BY id`;

    db.query(sql, (err, rows) => {
      if (err) {
        return json({
          message: "There was a server error, 500",
        });
      }
      response = {
        Title: "Roles Table",
        data: rows,
      };
      console.log("\n ROLES \n");
      console.table(response.data);
    });
  } else if (data.chooseAction === "View all employees") {
    const sql = `SELECT employees.*, roles.salary
                FROM employees
                LEFT JOIN roles on employees.role_name = roles.name ORDER BY id`;

    db.query(sql, (err, rows) => {
      // console.log(rows)
      if (err) {
        return json({
          message: "There was a server error, 500",
        });
      }
      response = {
        Title: "Employees Table",
        data: rows,
      };
      console.log("\n\n EMPLOYEES \n");
      console.table(response.data);
    });
  }
}

module.exports = viewTables;
