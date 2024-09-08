///<reference types='Cypress' />

const xpath = require('cypress-xpath');
beforeEach(()=> {

    cy.visit('https://demoqa.com/text-box');
    cy.title().should('eq', 'DEMOQA');
    cy.wait(1000);

});

describe('Fixture', () => {

    before( () => {
        cy.fixture(`data.json`).then( ( data ) => {
            globalThis.data = data;
        });
    });

    it.only('Load data from fixture', () => {
        cy.get('#userName').should('be.visible').type(data.fullName);
        cy.get('#userEmail').should('be.visible').type(data.email);
        cy.get('#currentAddress').should('be.visible').type(data.address);
        cy.get('#permanentAddress').should('be.visible').type(data.permanentAdress);
    }); 

});