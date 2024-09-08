///<reference types='Cypress' />
const { login } = require('../../../support/pages/page_1/Login');
const xpath = require('cypress-xpath');

describe('Page Object Model', () => {

    login.visitLogin();

    it('Login successful', () => {
       login.doLogin('Admin','admin123');
       login.loginAssertTrue();
       cy.screenshot('Login successful');
    });

    it('Login unsuccessful', () => {
        login.doLogin('Admi','admin123');
        login.loginAssertFalse();
       cy.screenshot('Login unsuccessful');
     });

});