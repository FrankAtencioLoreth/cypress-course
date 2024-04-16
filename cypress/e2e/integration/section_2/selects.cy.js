///<reference types="cypress"/>
///<reference types="cypress-xpath"/>

import 'cypress-xpath';
import 'cypress-plugin-tab';

describe("Introduction to selects", () =>  {
    
    const force = {force: true};

    it("old selects", () => {
        //go to the url
        cy.visit("https://demoqa.com/select-menu");
        cy.title().should("eq", "DEMOQA");
        cy.wait(1000);

        cy.get('#oldSelectMenu')
            .select('Aqua')
            .should("have.value", "10");
    });

    it.only("multi selects", () => {
        //go to the url
        cy.visit("https://demoqa.com/select-menu");
        cy.title().should("eq", "DEMOQA");
        cy.wait(1000);

        cy.get('#cars').select(['Volvo', 'Saab', 'Opel', 'Audi'])
        //promises
            .then(() => {
                cy.get('#oldSelectMenu').select('Aqua');
            });
        
    });
   
    
});