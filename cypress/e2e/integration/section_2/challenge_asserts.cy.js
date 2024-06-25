///<reference types="cypress"/>

describe('challenge asserts', () => {


   it('Invoke', () => {
      //go to the url
      cy.visit('https://the-internet.herokuapp.com/login');
      cy.title().should('eq', 'The Internet');
      cy.wait(1000);

      cy.get('#username').as('username').invoke("attr", "type").should('contain','text').then((e)=>{
         cy.get('@username').type('tomsmith');
         cy.get('@username').invoke('attr', 'style', 'background:blue');
      });
      cy.get('#password').should('be.visible').type('SuperSecretPassword!');
      cy.contains('[type="submit"]', " Login").click();

      cy.get('.subheader').should('be.visible').then((e) => {
         let msg = "Welcome to the Secure Area. When you are done click logout below.";
         let res = e.text();
         cy.log(`${res}`);
         
         if(msg == res) {
            cy.log('OK')
         }else{
            cy.log('ERROR')
         }

      });

   });

});