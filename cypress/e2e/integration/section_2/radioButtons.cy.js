///<reference types="cypress"/>
///<reference types="cypress-xpath"/>

import 'cypress-xpath';
import 'cypress-plugin-tab';

describe("Introduction to radiobuttons", () =>  {
    
    const force = {force: true};

    it("radiobuttons", () => {
        //go to the url
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.title().should("eq", "DEMOQA");
        cy.wait(1000);

        cy.xpath("//input[@id='gender-radio-1']")
        .check(force)
        .should("be.checked")
        .should("have.value", "Male");
    });

    it.only("radiobuttons by clicking", () => {
        //go to the url
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.title().should("eq", "DEMOQA");
        cy.wait(1000);

        cy.xpath("//input[@id='gender-radio-1']")
        .click(force)
        .should("be.checked")
        .should("have.value", "Male");
    });
});