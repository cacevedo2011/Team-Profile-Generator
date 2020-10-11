const fs = require('fs');
const render = require('./src/html-template');

// const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

const inquirer = require("inquirer");
const teamMembers = [];
const idArray = [];

// array of questions for user
const Menu = () => {

    const generateQuestions = () => {
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
        const manager = new Manager (answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice);
        teamMembers.push(manager);
        idArray.push(answers.managerId);
        createTeam();
        });
    };

    const newLocal = "memberChoice";
    const createTeam = () => {

        inquirer.prompt ([{
            type: "list",
            name: newLocal,
            message: "Would you like to add any additional team members?",
            choices: ["Engineer", "Intern", "No further members to add"]
        }
        ]).then(userChoice => {
            switch (userChoice = newLocal) {
                case "Engineer":
                    engineerQuestions();
                    break;
                case "Intern":
                    internQuestions();
                    break;
                default:
                    console.log(buildTeam);
                    buildTeam();
            }          
        });
    };

    const internQuestions = () => {
        return inquirer.prompt([

            {type: "input",
                name: "internName",
                message: "What is the intern's name?",
            },

            {type: "input",
                name: "internId",
                message: "What is the intern's ID?",
            },

            {type: "input",
                name: "internEmail",
                message: "What is the intern's email address?",
            },

            {type: "input",
            name: "internSchool",
            message: "What is the intern's school name?",
        },


        ]).then(answers => {
            const intern = new Intern (answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            teamMembers.push(intern);
            idArray.push(answers.internId);
            createTeam();
            });
    };
    
    const engineerQuestions = () => {
        return inquirer.prompt([
    
                {type: "input",
                    name: "name",
                    message: "What is the team manager's name?",
                },
    
                {type: "input",
                    name: "ID",
                    message: "What is the manager's ID?",
                },
    
                {type: "input",
                    name: "email",
                    message: "What is the manager's email address?",
                },
    
                {type: "input",
                name: "number",
                message: "What is the manager's phone number?",
            },
    
    
        ]).then(answers => {
            const engineer = new Engineer (answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice);
            teamMembers.push(manager);
            idArray.push(answers.managerId);
            createTeam();
            });
    };



    function buildTeam() {
        if (!fs.existsSync(DIST_DIR)) {
            fs.mkdirSync(DIST_DIR)
        }
        fs.writeFileSync(outputPath, render(teamMember), "Checkout your team!");
    }
    generateQuestions();
};

Menu();