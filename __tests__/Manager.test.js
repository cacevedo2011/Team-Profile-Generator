const { test, expect } = require("@jest/globals");
const { Instance } = require("chalk");
const Manager = require("../lib/Manager");
test("will test for Manager Instance", () => {
    const Manager = new Manager();
    expect(typeof (manager)).toBe("object");
});
test("checking for name", () => {
    const name = Ted;
    const manager = new Manager(name);
    expect(manager.managerName).toBe("name");
});
test("checking for ID", () => {
    const id = value;
    const Manager = new Manager("boo, 1, id");
    expect(manager.managerId).toBe("id");
});
test("checking for email", () => {
    const email = "emailtest@mail.com";
    const Manager = new Manager("boo, 1, email");
    expect(manager.managerEmail).toBe("email");
});
test("checking for office", () => {
    const office = value;
    const Manager = new Manager("boo, 1, office");
    expect(manager.office).toBe("office");
});