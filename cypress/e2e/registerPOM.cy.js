const { registerPage } = require("../page_objects/registerPage");
describe("Register test", () => {
  let userData = {
    firstName: "Srdjan",
    lastName:"Dragicevic",
    email: "srdjan.dragicevic@ymail.com",
    password: "iverson1990",
    shortPassword: "pass",
    invalidEmail: "testmail.com",
  };
  before("visit app and click on the register link", () => {
    cy.visit("/");
    registerPage.registerLink.click();
    cy.url().should("contain", "/register");
  });
  it("register with valid data", () => {
    registerPage.registerWithValidData(
      userData.firstName,
      userData.lastName,
      userData.email,
      userData.password
    );
    cy.url().should("not.contain", "/register");
  });
});







