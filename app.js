const inquirer = require("inquirer");
const {
  addDepartmentQuestion,
  addRoleQuestion,
  addEmployeeQuestion,
  updateEmployeeQuestion,
} = require("./app-choices/choice-questions");
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
          "Update an employee role",
        ],
      },
    ])
    .then((choice) => {
      console.log(choice.chooseAction);

      switch (choice.chooseAction) {
        case "Add a department":
          return addDepartmentQuestion();
        case "Add a role":
          return addRoleQuestion();
        case "Add an employee":
          return addEmployeeQuestion();
        case "Update an employee role":
          return updateEmployeeQuestion();
        default:
          return viewTables(choice);
      }
    })
    .then(() => {
      return inquirer
        .prompt([
          {
            type: "confirm",
            name: "actionConfirm",
            message: "Would you like to continue?",
          },
        ])
        .then((confirm) => {
          if (confirm.actionConfirm) {
            initialQuestions();
            return;
          }
          console.log("Goodbye!");
          return;
        });
    });
}

initialQuestions();
