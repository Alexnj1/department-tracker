const inquirer = require("inquirer");
const insertDepartment = require("./app-choices/add-department");
const viewTables = require("./app-choices/view-tables");

function initialQuestions() {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "chooseAction",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update and employee role",
        ],
      },
    ])
    .then((choice) => {
      console.log(choice.chooseAction);
      if (choice.chooseAction === "Add a department") {
        addDepartmentQuestion();
      } else if (choice.chooseAction === "Add a role") {
        addRoleQuestion();
      } else if (
        choice.chooseAction === "View all departments" ||
        "View all roles" ||
        "View all employees"
      ) {
        return viewTables(choice);
      }
    });
  // .then(() => {
  //     // initialQuestions()
  // })
}

function addDepartmentQuestion() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "depName",
        message: "What is the name of the new department?",
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
      },
      {
          type: 'input',
          name: 'roleSalary',
          message: 'What is the salary of the new role?'
      },
      {
          type: 'input',
          name: 'roleDept',
          message: 'What department does this role belong to? *Case sensitive, must be exact name*'
      }
    ])
    .then((role) => {
      insertRole(role);
    });
}

initialQuestions();
