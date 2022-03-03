const db = require("../db/connection");

function insertRole(role) {
  const sql = `INSERT INTO roles (name, department_name, salary)
                VALUES (?,?,?)`;
  const sqlView = `SELECT * FROM roles`;
  const params = [role.roleName, role.roleDept, parseInt(role.roleSalary)];
  console.log(params)

  db.query(sql, params, (err, result) => {
    if (err) {
      response = {
        message: "There was a server error, 500",
      };
    }
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
      Title: "Roles Table",
      data: rows,
    };
    console.log(`
    ============================
         Updated Roles Table
    ============================`);
    console.table(response.data);
  });
}

module.exports = insertRole;
