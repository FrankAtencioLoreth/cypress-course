///<reference types="cypress"/>
///<reference types="cypress-xpath"/>

import 'cypress-xpath';
import 'cypress-plugin-tab';

describe("Second challenge", () => {

    const item = {
        name: "Iphone 6s",
        company: "Apple Inc.",
        introduced: "2011-12-12",
        discontinued: "2016-01-01"
    }

    it("Test application", () => {
        cy.visit("https://computer-database.gatling.io/computers");
        cy.title().should("eq", "Computers database");
        cy.wait(1000);

        cy.xpath("//input[@id='searchbox']")
        .should("be.visible")
        .type("ACE{enter}");

        cy.xpath("//input[@type='submit']")
        .should("be.visible")
        .click();
    });

    it.only("Add a new record", () => {
        cy.visit("https://computer-database.gatling.io/computers");
        cy.title().should("eq", "Computers database");
        cy.wait(1000);

        //click on "Add a new record" button
        cy.xpath("//a[@id='add']").should("be.visible").click();

        //fill the form
        cy.xpath("//input[@id='name']")
        .should("be.visible")
        .type(item.name).tab()
        .type(item.introduced).tab()
        .type(item.discontinued);
        cy.xpath("//select[@id='company']").select("Apple Inc.").should("have.value", "1");
        cy.xpath("//input[@value='Create this computer']").click();

        //assert
        cy.xpath("//div[@class='alert-message warning']")
        .should("be.visible")
        .contains(`Done ! Computer ${item.name} has been created`);
    });

});