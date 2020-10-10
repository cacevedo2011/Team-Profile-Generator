const fs = require('fs');

const generatePage = require('./src/html-template.js');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

const inquirer = require("inquirer");
const teamMemebers = [];

// array of questions for user

function menu(){

    const managerQuestions = () => {
        return inquirer.prompt([

            {type: "input",
                name: "project",
                message: "What is the project's name?",
            },

            {type: "input",
                name: "managerName",
                message: "What is the team manager's name?",
            },

            {type: "input",
                name: "managerId",
                message: "What is the manager's ID?",
            },

            {type: "input",
                name: "managerEmail",
                message: "What is the manager's email address?",
            },

            {type: "input",
                name: "managerOffice",
                message: "What is the manager's office number?",
            },

    ]).then(answers => {
        const Manager = new Manager (answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice);
        teamMemebers.push(manager);
        idArray.push(answers.managerId);
        createTeam();
        });
    };

    const createTeam = () => {

        inquirer.prompt ([{
            type: "list",
            name: "memberChoice",
            message: "Would you like to add any additional team members?",
            choices: ["Engineer", "Inter", "No further members to add"]
        }
        ]).then(userchoice => {
            switch (userchoice=memberChoice) {
                case "Engineer":
                    engineerQuestions();
                    break;
                case "Intern":
                    internQuestion();
                    break;
                default:
                    buildTeam();
            }          
        });
    };



}

// const internQuestions = () => {
//     return inquirer.prompt([

//             {type: "input",
//                 name: "name",
//                 message: "What is the intern's name?",
//             },

//             {type: "input",
//                 name: "ID",
//                 message: "What is the intern's ID?",
//             },

//             {type: "input",
//                 name: "email",
//                 message: "What is the intern's email address?",
//             },

//             {type: "input",
//             name: "number",
//             message: "What is the manager's phone number?",
//         },


//     ]);
// };

// intern().then((answers) => {
//     console.log(answers);
  
//     var template = generatePage(answers);
//     writeToFile("./dist/index.html", template);
// });

// const employeeQuestions = () => {
//     return inquirer.prompt([

//             {type: "input",
//                 name: "name",
//                 message: "What is the team manager's name?",
//             },

//             {type: "input",
//                 name: "ID",
//                 message: "What is the manager's ID?",
//             },

//             {type: "input",
//                 name: "email",
//                 message: "What is the manager's email address?",
//             },

//             {type: "input",
//             name: "number",
//             message: "What is the manager's phone number?",
//         },


//     ]);
// };

// employee().then((answers) => {
//     console.log(answers);
  
//     var template = generatePage(answers);
//     writeToFile("./dist/index.html", template);
// });

// const engineerQuestions = () => {
//     return inquirer.prompt([

//             {type: "input",
//                 name: "name",
//                 message: "What is the team manager's name?",
//             },

//             {type: "input",
//                 name: "ID",
//                 message: "What is the manager's ID?",
//             },

//             {type: "input",
//                 name: "email",
//                 message: "What is the manager's email address?",
//             },

//             {type: "input",
//             name: "number",
//             message: "What is the manager's phone number?",
//         },


//     ]);
// };

// engineer().then((answers) => {
//     console.log(answers);
  
//     var template = generatePage(answers);
//     writeToFile("./dist/index.html", template);
// });


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
      if (err) {
        return console.log(err);
      }
      return console.log("Success! Look at your index.md");
    });
  }
