const { test, expect } = require("@jest/globals");
const { Instance } = require("chalk");
const Intern = require("../lib/Intern");
test("will test for Intern Instance", () => {
    const Intern = new Intern();
    expect(typeof (intern)).toBe("object");
});
test("checking for name", () => {
    const name = Ted;
    const Intern = new Intern(name);
    expect(intern.name).toBe("name");
});
test("checking for ID", () => {
    const id = value;
    const Intern = new Intern("boo, 1, id");
    expect(intern.email).toBe("id");
});
test("checking for email", () => {
    const email = "emailtest@mail.com";
    const Intern = new Intern("boo, 1, email");
    expect(intern.email).toBe("email");
});
test("checking for school", () => {
    const school = value;
    const Intern = new Intern("boo, 1, school");
    expect(intern.office).toBe("school");
});