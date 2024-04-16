/// <reference types="Cypress" />

describe("Page validations", () => {

     it("validate title", () => {
        cy.visit("https://demoqa.com/text-box");
        cy.title().should("eq", "DEMOQA");
        cy.log("Test executed successfully");
    });

});