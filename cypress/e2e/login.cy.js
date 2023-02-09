/// <reference types="Cypress" />

const locators = require("../fixtures/locators.json");

describe("login tests", () => {
    before("visit app and click on login link", () => {
        cy.visit("/");
        cy.get(locators.navbar.loginButton).click();
        cy.url().should("contain", "/login")
    })

  it("login without email address", () => {
    cy.visit("/");
    cy.get(locators.navbar.loginButton).click();
    cy.get(locators.commonFormElements.emailInput).type("iverson1990");
    cy.get(locators.commonFormElements.submitButton).click();
    cy.url().should("include", "/login");
  });

  it("login without password", () => {
    cy.visit("/");
    cy.get(locators.navbar.loginButton).click();
    cy.get(locators.commonFormElements.emailInput).type("srdjan.dragicevic@ymail.com");
    cy.get(locators.commonFormElements.submitButton).click();
    cy.url().should("include", "/login");
  });

  it("login with valid credentials", () => {
    cy.visit("/");
    cy.get(".nav-link").eq(1).click();
    cy.get(locators.navbar.emailInput).type("srdjan.dragicevic@ymail.com");
    cy.get(locators.commonFormElements.passwordInput).type("iverson1990");
    cy.get(locators.commonFormElements.submitButton).click();
    cy.url().should("not.include", "/login");
  });
})