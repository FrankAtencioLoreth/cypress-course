///<reference types='Cypress' />
const xpath = require('cypress-xpath');

describe('Navigation section', () => {

    it('Back and forward', () => {

        cy.visit('https://demoqa.com/');
        cy.title().should('eq', 'DEMOQA');
        cy.wait(1000);

        cy.get('#app > div > div > div.home-body > div > div:nth-child(1) > div > div.avatar.mx-auto.white > svg').should('be.visible').click({force: true});
        
        cy.go('back');
        cy.go('back');
        cy.go('forward');
    });

    it.only('Back and forward 2', () => {

        cy.visit('https://demoqa.com/');
        cy.title().should('eq', 'DEMOQA');
        cy.wait(1000);

        cy.get('#app > div > div > div.home-body > div > div:nth-child(2) > div > div.avatar.mx-auto.white > svg').should('be.visible').click({force: true});
        cy.get('#item-0').click({force: true});
        cy.wait(2000);
        cy.xpath('//*[@id="firstName"]', {timeout: 10000}).should('be.visible').type('Frank Atencio')
       

        cy.wait(2000);
        cy.reload();
        cy.wait(2000);

        cy.go('back');
    });

});