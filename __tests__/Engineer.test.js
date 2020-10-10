const { test, expect } = require("@jest/globals");
const { Instance } = require("chalk");
const Manager = require("../lib/Manager");
test("will test for employee Instance", () => {
    const manager = new Manager();
    expect(typeof (manager)).toBe("object");
});
test("checking for name", () => {
    const name = Ted;
    const manager = new Manager(name);
    expect(employee.name).toBe("name");
});
test("checking for ID", () => {
    const id = value;
    const manager = new Manager("boo, 1, id");
    expectmanager.email).toBe("id");
});
test("checking for email", () => {
    const email = emailtest@mail.com;
    const manager = new Manager("boo, 1, email");
    expect(manager.email).toBe("email");
});
test("checking for office", () => {
    const office = value;
    const manager = new Manager("boo, 1, office");
    expect(manager.office).toBe("office");
});