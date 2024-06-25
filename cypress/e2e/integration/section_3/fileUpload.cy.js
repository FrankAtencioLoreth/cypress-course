///<reference types="cypress"/>

describe('Files', () => {


    it('Upload file', () => {
       //go to the url
       cy.visit('https://the-internet.herokuapp.com/upload');
       cy.title().should('eq', 'The Internet');
       cy.wait(1000);
 
       cy.get('#file-upload').selectFile("cypress/fixtures/example.json")
    });


 
 });