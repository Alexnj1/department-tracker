const inquirer = require("inquirer");
const insertDepartment = require("./app-choices/add-department");
const insertEmployee = require("./app-choices/add-employee");
const insertRole = require("./app-choices/add-role");
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
        // turn into switch statements then test
        addDepartmentQuestion();
      } else if (choice.chooseAction === "Add a role") {
        addRoleQuestion();
      } else if (choice.chooseAction === "Add an employee") {
        addEmployeeQuestion()
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
        validate: validate
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
        validate: validate
      },
      {
        type: "input",
        name: "roleSalary",
        message: "What is the salary of the new role?",
        validate: validate
      },
      {
        type: "input",
        name: "roleDept",
        message:
          "What department does this role belong to? *Case sensitive, must be exact name*",
          validate: validate
      },
      
    ])
    .then((role) => {
      console.log(role);
      insertRole(role);
    });
}

function addEmployeeQuestion () {
    return inquirer.prompt([
        {
            type: 'input',
            name: "empFName",
            message: 'What is the first name of the new employee?',
            validate: validate
        },
        {
            type: "input",
            name: 'empLName',
            message: "What is the last name of the new employee?",
            validate: validate
        },
        {
            type: 'input',
            name: 'empJobTitle',
            message: 'What is the job title for the new employee?',
            validate: validate
        },
        {
            type: 'input',
            name: 'empRoleName',
            message: 'What is the role name for the new employee? *Case sensitive, must be exact name*',
            validate: validate
        },
        {
            type: 'input',
            name: 'empID',
            message: 'Enter an ID for the new employee',
            validate: validate
        },
        {
            type: 'input',
            name: 'empManager',
            message: "Who is the manager for this employee? Enter an ID!",
            validate: validate
        }
    ]).then((employee) => {
        insertEmployee(employee)
    })
}

function validate(input) {
    if (!input) {
        console.log('Enter a value!')
        return false
    }
    return true
}

initialQuestions();
