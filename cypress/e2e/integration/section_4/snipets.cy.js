describe('Snipets section', () => {

    it('Snipets 1', () => {

        cy.visit("https://demoqa.com/text-box");
        cy.title().should("eq", "DEMOQA");
        cy.wait(1000);

        cy.get('#userName').should('be.visible');
        cy.get('#userEmail').should('be.visible');
        cy.get('#currentAddress').should('be.visible');
        cy.get('#permanentAddress').should('be.visible');

        cy.get('agrs').should('be.visible').type('text');

        cy.get('args').should('be.visible').as('alias');
        cy.get('@alias');

    });

});