const Employee = require("./Employee.js");

class Manager extends Employee {
    constructor(managerName, managerId, managerEmail, managerOffice) {
       super(managerName, managerId, managerEmail)
       this.managerOffice = managerOffice
    }
    getTitle() {
        return "Manager";
    }
    getOfficeNumber() {
        return this.managerOffice;
    }
}
module.exports = Manager;