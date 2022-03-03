const db = require("../db/connection");

function insertEmployee(employee) {
  const sql = `INSERT INTO employees (id, first_name, last_name, job_title, role_name, manager_id)
                VALUES (?,?,?,?,?,?)`;
  const sqlView = `SELECT employees.*, roles.salary
                    FROM employees
                    LEFT JOIN roles on employees.role_name = roles.name`;
  const params = [
    employee.empID,
    employee.empFName,
    employee.empLName,
    employee.empJobTitle,
    employee.empRoleName,
    employee.empManager,
  ];
  console.log(params);

  db.query(sql, params, (err, result) => {
    if (err) throw err // change them all to this
    //   response = {
    //     message: "There was a server error, 500",
    //   };
    // }
    // console.table("Updated Departments" + response.data || response.message);
    console.log({
      message: "Success",
    });
  });

  db.query(sqlView, (err, rows) => {
    if (err) {
      response = {
        message: "There was a server error, 500",
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
