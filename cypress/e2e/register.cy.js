/// <reference types="Cypress" />

const locators = require("../fixtures/locators.json");

describe("Register test", () => {
    let userData = {
        firstName: "Srdjan",
        lastName: "Dragicevic",
        email: "srdjan.dragicevic@ymail.com",
        password: "iverson1990",
        shortPassword: "pass"

    }
    beforeEach("visit app and click on register link", () => {
        cy.visit("/");
        cy.get(locators.navbar.registerButton).click();
        cy.url().should("contain", "/register");

    })

    it("register without first name", () => {
        cy.visit("/");
        cy.get(locators.navbar.registerButton).click();
        cy.url().should("contain", "/register");
        cy.get(locators.register.lastNameInput).type(userData.lastName);
        cy.get(locators.commonFormElements.emailInput).type(userData.email);
        cy.get(locators.commonFormElements.passwordInput).type(userData.password);
        cy.get(locators.register.passwordConfirmationInput).type("iverson1990");
        cy.get(locators.register.tosCheckbox).check();
        cy.get(locators.commonFormElements.submitButton).click();
        cy.url().should("contain", "/register");
    });

    it("register without email address", () => {
        cy.visit("/");
        cy.get(locators.navbar.registerButton).click();
        cy.url().should("contain", "/register");
        cy.get(locators.register.firstNameInput).type("Test");
        cy.get(locators.register.lastNameInput).type("Test");
        cy.get(locators.commonFormElements.passwordInput).type("iverson1990");
        cy.get(locators.register.passwordConfirmationInput).type("iverson1990");
        cy.get(locators.register.tosCheckbox).check();
        cy.get(locators.commonFormElements.submitButton).click();
        cy.url().should("contain", "/register");
    });

    it("register with valid data", () => {
        cy.visit("/");
        cy.get(locators.navbar.registerButton).click();
        cy.url().should("contain", "/register");
        cy.get(locators.register.firstNameInput).type("Test");
        cy.get(locators.register.lastNameInput).type("Test");
        cy.get(locators.commonFormElements.emailInput).type("test@mail.com");
        cy.get(locators.commonFormElements.passwordInput).type("Test12345");
        cy.get(locators.register.passwordConfirmationInput).type("Test12345");
        cy.get(locators.register.tosCheckbox).check();
        cy.get(locators.commonFormElements.submitButton).click();
        cy.url().should("contain", "/register");
    });
});