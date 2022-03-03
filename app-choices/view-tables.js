const db = require("../db/connection");

function viewTables(data) {
  if (data.chooseAction === "View all departments") {
    const sql = `SELECT * FROM departments`;

    db.query(sql, (err, rows) => {
      // console.log(rows)
      if (err) {
        response = {
          message: "There was a server error, 500",
        };
      }
      response = {
        Title: "Departments Table",
        data: rows,
      };
      console.table(response.data || response.message);
    });
  } else if (data.chooseAction === "View all roles") {
    const sql = `SELECT * FROM roles`;

    db.query(sql, (err, rows) => {
      // console.log(rows)
      if (err) {
        return json({
          message: "There was a server error, 500",
        });
      }
      response = {
        Title: "Roles Table",
        data: rows,
      };
      console.table(response.data);
    });
  } else if (data.chooseAction === "View all employees") {
    const sql = `SELECT employees.*, roles.salary
                FROM employees
                LEFT JOIN roles on employees.role_name = roles.name`;

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
      console.table(response.data);
    });
  }
}

module.exports = viewTables;
