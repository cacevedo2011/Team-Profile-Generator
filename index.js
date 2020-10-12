const fs = require('fs');
const render = require('./src/html-template.js');
const path = require("path");

// const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const OUTPUT_DIR = path.resolve(__dirname, "dist")
const outputPath = path.join(OUTPUT_DIR, "project.html");

const inquirer = require("inquirer");
const teamMembers = [];
const idArray = [];

// array of questions for user
const Menu = () => {

    const generateQuestions = () => {
        return inquirer.prompt([

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
        generateTeam();
        });
    };

    const generateTeam = () =>{
        inquirer.prompt ([{
            type: "list",
            name: "memberChoice",
            message: "Would you like to add any additional team members?",
            choices: ["Engineer", "Intern", "No further members to add"]
        }
        ]).then(userchoice => {
            switch (userchoice.memberChoice) {
                case "Engineer":
                    engineerQuestions();
                    break;
                case "Intern":
                    internQuestions();
                    break;
                default:
                    buildTeam();
            }          
        });
    }

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
            message: "What is the intern's school name`?",
        },


        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            teamMembers.push(intern);
            idArray.push(answers.internId);
            generateTeam();
            });
    }
    
    const engineerQuestions = () => {
        return inquirer.prompt([
    
                {type: "input",
                    name: "engineerName",
                    message: "What is the engineer's name?",
                },
    
                {type: "input",
                    name: "engineerId",
                    message: "What is the engineer's ID?",
                },
    
                {type: "input",
                    name: "engineerEmail",
                    message: "What is the engineer's email address?",
                },
    
                {type: "input",
                name: "engineerGithub",
                message: "What is the engineer's github account?",
            },
    
    
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            engineer.title = "Engineer"
            console.table(engineer);
            teamMembers.push(engineer);
            idArray.push(answers.engineerId);
            generateTeam();
            });
    };



    function buildTeam() {
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
    }
    generateQuestions();
};

Menu();