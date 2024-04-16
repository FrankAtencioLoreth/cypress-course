///<reference types="cypress"/>
///<reference types="cypress-xpath"/>

import 'cypress-xpath';
import 'cypress-plugin-tab';

describe("Introduction to chekbox", () => {

    const force = {force: true};

    it("checkbox", () => {

        //go to the url
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.title().should("eq", "DEMOQA");
        cy.wait(1000);

        //click on the checkbox
        cy.get('#hobbies-checkbox-1')
            .check(force)
            .should("be.checked")
            .should("have.value", "1")
            .uncheck(force)
            .should("not.be.checked");


    });

    it("checkbox by xpath", () => {

        //go to the url
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.title().should("eq", "DEMOQA");
        cy.wait(1000);

        //click on the checkbox
        cy.xpath("//input[@id='hobbies-checkbox-1' and @type='checkbox']")
            .check(force)
            .should("be.checked")
            .should("have.value", "1")
            .uncheck(force)
            .should("not.be.checked");


    });

    it.only("checkbox using click and xpath", () => {

        //go to the url
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.title().should("eq", "DEMOQA");
        cy.wait(1000);

        //click on the checkbox
        cy.xpath("//input[@id='hobbies-checkbox-1' and @type='checkbox']")
            .click(force)
            .should("be.checked")
            .should("have.value", "1")
            .click(force)
            .should("not.be.checked");


    });
});