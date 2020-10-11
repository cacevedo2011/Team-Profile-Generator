const { test, expect } = require("@jest/globals");
const { Instance } = require("chalk");
const Engineer = require("../lib/Engineer");
test("will test for employee Instance", () => {
    const engineer = new Engineer();
    expect(typeof (engineer)).toBe("object");
});
test("checking for name", () => {
    const name = Ted;
    const engineer = new Engineer(name);
    expect(engineer.name).toBe("name");
});
test("checking for ID", () => {
    const id = value;
    const engineer = new Engineer("boo, 1, id");
    expect(engineer.email).toBe("id");
});
test("checking for email", () => {
    const email = emailtest@mail.com;
    const engineer = new Engineer("boo, 1, email");
    expect(engineer.email).toBe("email");
});
test("checking for github", () => {
    const github = value;
    const engineer = new Engineer("boo, 1, github");
    expect(engineer.github).toBe("github");
});