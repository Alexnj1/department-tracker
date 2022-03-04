const db = require("../db/connection");
const cTable = require("console.table");

function insertRole(role) {
  const sql = `INSERT INTO roles (name, department_name, salary)
                VALUES (?,?,?)`;
  const sqlView = `SELECT * FROM roles ORDER BY id`;
  const params = [role.roleName, role.roleDept, parseInt(role.roleSalary)];
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
          "There was an error when trying to view updated Roles Table, 500",
      };
      return;
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
