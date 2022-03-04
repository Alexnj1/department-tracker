const db = require("../db/connection");
const cTable = require("console.table");

function insertEmployee(employee) {
  const sql = `INSERT INTO employees (id, first_name, last_name, job_title, role_name, manager_id)
                VALUES (?,?,?,?,?,?)`;
  const sqlView = `SELECT employees.*, roles.salary
                    FROM employees
                    LEFT JOIN roles on employees.role_name = roles.name ORDER BY id`;
  const params = [
    parseInt(employee.empID),
    employee.empFName,
    employee.empLName,
    employee.empJobTitle,
    employee.empRoleName,
    parseInt(employee.empManager),
  ];
  console.log(params);

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
          "There was an error when trying to view updated Employees Table, 500",
      };
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
}

module.exports = insertEmployee;
