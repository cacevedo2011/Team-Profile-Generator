const Employee = require("./Employee.js");
class Manager extends Employee {
    constructor(name, id, email, github) {
       super(name, id, email)
       this.github = github
    }
    getTitle() {
        return "Engineer";
    }
    getGithub() {
        return this.github;
    }
}
module.exports = Engineer;