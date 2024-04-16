import 'cypress-xpath';

describe("Introduction to Selectors", () => {

    it("Selector by id ", () => {
        //go to the url
        cy.visit("https://demoqa.com/text-box");
        cy.title().should("eq", "DEMOQA");
        cy.wait(1000);

        //fill the form
        cy.get("#userName").should("be.visible").type("Frank");
    });

    it("Selector by atributes ", () => {
        //go to the url
        cy.visit("https://demoqa.com/text-box");
        cy.title().should("eq", "DEMOQA");
        cy.wait(1000);

        //fill the form
        cy.get("[placeholder='Full Name']").should("be.visible").type("Frank");
    });


    //Require intall plugin
    
    it("Selector by xpath ", () => {
        //go to the url
        cy.visit("https://demoqa.com/text-box");
        cy.title().should("eq", "DEMOQA");
        cy.wait(1000);

        //fill the form
        cy.xpath("//*[@id='userName']").should("be.visible").type("Frank");
        cy.xpath("//*[contains(@placeholder, 'name@example.com')]").should("be.visible").type("test@test.com");
        cy.xpath("//*[contains(@id, 'currentAddress')]").should("be.visible").type("Calle wallapop");
    });

    it("Selector by contains ", () => {
        //go to the url
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.title().should("eq", "DEMOQA");
        cy.wait(1000);

        //fill the form
        cy.get(".custom-control-label").contains("Female").click();
        cy.get(".custom-control-label").contains("Other").click();
    });

    it("Selector by copy selector ", () => {
        //go to the url
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.title().should("eq", "DEMOQA");
        cy.wait(1000);

        //fill the form
        cy.get("#userNumber").type("3222927493");
    
    });

    it("Selector by id and css ", () => {
        //go to the url
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.title().should("eq", "DEMOQA");
        cy.wait(1000);

        //selector by ID
        cy.get("#firstName").should("be.visible").type("Frank");
        
    });

});