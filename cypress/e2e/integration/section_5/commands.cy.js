///<reference types='Cypress' />

const xpath = require('cypress-xpath');

const username = 'Admin';
const password = 'admin123';

beforeEach(()=> {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.title().should('eq', 'OrangeHRM');
    cy.wait(1000);

});

describe('custom command', () => {

    it('Login orangeHRM', () => {
        cy.login(username, password);
        cy.logout();
    });

});