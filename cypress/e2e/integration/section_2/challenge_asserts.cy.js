///<reference types="cypress"/>

describe('challenge asserts', () => {


   it('contains', () => {
      //go to the url
      cy.visit('http://www.automationpractice.pl/index.php');
      cy.title().should('eq', 'My Shop');
      cy.wait(1000);
   });

});