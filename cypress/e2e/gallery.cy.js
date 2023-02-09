/// <reference types= "Cypress" />

const locators = require("../fixtures/locators.json");
describe("galery test ", () =>{
    it("visit gallery app", () =>{
        cy.visit("https://gallery-app.vivifyideas.com/");

       cy.get(".nav-link").eq(1).click();
       cy.get("#email").type("srdjan.dragicevic@ymail.com");
       cy.get("#password").type("iverson1990");
       cy.get("button").click();
       cy.get(".nav-link").should("have.length",4);
       cy.url().should("not.contain","/login");
       cy.get(".nav-link").eq(3).click();

    });

    it("register test",()=>{
        cy.visit("/");
        cy.get(locators.navbar.registerButton).click();
        cy.url().should("contain", "/register");
        cy.get(locators.register.firstNameInput).type("Test");
        cy.get(locators.register.lastNameInput).type("Test");
        cy.get(locators.commonFormeElements.emailInput).type("Test");
        cy.get(locators.commonFormeElements.passwordInput).type("Test");
        cy.get(locators.register.passwordConfirmationInput).type("Test");
        cy.get(locators.register.tosCheckbox).check();
        cy.get(locators.commonFormeElements.submitButton).click();
        cy.url().should("contain","/register");
    })
})
