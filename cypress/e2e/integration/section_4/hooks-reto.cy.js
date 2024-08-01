///<reference types='Cypress' />

const xpath = require('cypress-xpath');

const time = 2000;

beforeEach(() => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.title().should('eq', 'OrangeHRM');
    cy.wait(time);

});

afterEach(() => {

    cy.wait(time);
    cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[3]/ul/li').click();
    cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[3]/ul/li/ul/li[4]/a').click();

});

describe('scenario name', () => {

    it('Login', () => {
        const username = 'Admin';
        const password = 'admin123';

        cy.get('input[name="username"]').type(username);
        cy.get('input[name="password"]').type(password);
        cy.get('button[type="submit"').click();
    });

});