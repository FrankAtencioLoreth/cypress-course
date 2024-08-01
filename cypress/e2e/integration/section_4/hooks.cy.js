///<reference types='Cypress' />
const xpath = require('cypress-xpath');

describe('Hooks section', () => {

    before(() => {
        cy.log('Inicia antes que todo. Solo una sola vez');
    });

    beforeEach(() => {
        cy.log('Se repite antes de cada uno de los tests');
    });

    afterEach(() => {
        cy.log('Se repite despues de cada uno de los tests');
    });

    after(() => {
        cy.log('########## Se inicia al final de todo ########## ');
        cy.visit('https://www.google.com');
    });

    it('Test uno', () => {
        cy.log('Se inicia el test uno');
    });

    it('Test dos', () => {
        cy.log('Se inicia el test dos');
    });

});