///<reference types="cypress"/>

describe('Windows references', () => {


    it('validate charset', () => {
       //go to the url
       cy.visit('https://the-internet.herokuapp.com');
       cy.title().should('eq', 'The Internet');
       cy.wait(1000);
 
       cy.document().should("have.property", "charset").and("eq", "UTF-8");
    });

    it('validate URL', () => {
        //go to the url
        let url = 'https://the-internet.herokuapp.com/login';
        cy.visit(url);
        cy.title().should('eq', 'The Internet');
        cy.wait(1000);
  
        cy.url().should("include", "login");
        cy.url().should("eq", url);
     });
 
 });