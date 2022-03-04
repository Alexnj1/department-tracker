// may not need this file at all
const inquirer = require("inquirer");
const insertDepartment = require("./add-department");
const insertEmployee = require("./add-employee");
const updateEmployee = require("./update-employee");
const insertRole = require("./add-role");

function addDepartmentQuestion() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "depName",
        message: "What is the name of the new department?",
        validate: validate,
      },
    ])
    .then((department) => {
      insertDepartment(department);
    });
}

function addRoleQuestion() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "roleName",
        message: "What is the name of the new role?",
        validate: validate,
      },
      {
        type: "input",
        name: "roleSalary",
        message:
          "What is the salary of the new role? Must be numerical with decimals, no commas ( , ).",
        validate: validate,
      },
      {
        type: "input",
        name: "roleDept",
        message:
          "What department does this role belong to? *Case sensitive, must be exact name*",
        validate: validate,
      },
    ])
    .then((role) => {
      console.log(role);
      insertRole(role);
    });
}

function addEmployeeQuestion() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "empFName",
        message: "What is the first name of the new employee?",
        validate: validate,
      },
      {
        type: "input",
        name: "empLName",
        message: "What is the last name of the new employee?",
        validate: validate,
      },
      {
        type: "input",
        name: "empJobTitle",
        message: "What is the job title for the new employee?",
        validate: validate,
      },
      {
        type: "input",
        name: "empRoleName",
        message:
          "What is the role name for the new employee? *Case sensitive, must be exact name*",
        validate: validate,
      },
      {
        type: "input",
        name: "empID",
        message: "Enter an ID for the new employee",
        validate: validate,
      },
      {
        type: "input",
        name: "empManager",
        message:
          "Who is the manager for this employee? Enter an ID. Enter own ID if employee is a manager.",
        validate: validate,
      },
    ])
    .then((employee) => {
      insertEmployee(employee);
    });
}

function updateEmployeeQuestion() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "updateId",
        message: "What is the ID of the employee you wish to update?",
        validate: validate,
      },
      {
        type: "input",
        name: "newRole",
        message:
          "What is the new role of this employee? *Case sensitive, must be exact name*",
        validate: validate,
      },
      {
        type: "input",
        name: "newPosition",
        message: "What is the new job title of this employee?",
        validate: validate,
      },
    ])
    .then((newEmp) => {
      updateEmployee(newEmp);
    });
}

function validate(input) {
  if (!input) {
    console.log("Enter a value!");
    return false;
  }
  return true;
}

module.exports = {
  addDepartmentQuestion,
  addRoleQuestion,
  addEmployeeQuestion,
  updateEmployeeQuestion,
};
