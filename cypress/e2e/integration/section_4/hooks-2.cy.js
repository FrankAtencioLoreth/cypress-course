///<reference types='Cypress' />
const xpath = require('cypress-xpath');

beforeEach(() => {
    cy.visit('https://demoqa.com/checkbox');
    cy.title().should('eq', 'DEMOQA');
    cy.wait(2000);
    cy.get('.rct-option-expand-all').should('be.visible').click({force: true});

});

describe('Hooks section 2', () => {

    it('Test uno -  Check all', () => {
        cy.xpath('//*[@id="tree-node"]/ol/li/span/label/span[1]').click();
    });

    it('Test dos - Uncheck all', () => {
        cy.xpath('//*[@id="tree-node"]/ol/li/span/label/span[1]').click();
    });



});