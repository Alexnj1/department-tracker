const db = require("../db/connection");
const cTable = require("console.table");

function updateEmployee(newEmp) {
  const sql = `UPDATE employees SET role_name = '${newEmp.newRole}', job_title = '${newEmp.newPosition}' WHERE id = ${newEmp.updateId};`;

  const sqlView = `SELECT employees.*, roles.salary
                    FROM employees
                    LEFT JOIN roles on employees.role_name = roles.name ORDER BY id`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log({
        status: "There was an error with your data. (404)",
      });
      return;
    }

    console.log({
      status: "Success",
    });

    db.query(sqlView, (err, rows) => {
      if (err) {
        response = {
          status:
            "There was an error when trying to view updated Employees Table, 500",
        };
        return;
      }
      response = {
        Title: "Employee Table",
        data: rows,
      };
      console.log(`
        ============================
           Updated Employee Table
        ============================`);
      console.table(response.data);
    });
  });
}

module.exports = updateEmployee;
