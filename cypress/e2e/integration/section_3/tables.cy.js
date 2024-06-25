require('cypress-xpath')

describe('tables', () => {

    it('webtables elements and children function', () => {
        cy.visit('https://tablepress.org/demo/');
        cy.wait(1000);
    
        cy.get('#tablepress-demo_wrapper').children('#tablepress-demo_filter').as('input')
        .click().then(()=>{
            cy.get('@input').type('Haley');
            cy.get('table')
                .children('tbody')
                .children('tr')
                .children('td').get('.column-1').should('contain', 'Haley');
        });

    });

    it.only('webtables elements and eq function', () => {
        cy.visit('https://tablepress.org/demo/');
        cy.wait(1000);
    
        cy.get('#tablepress-demo')
            .children('tbody')
            .children('tr').eq(0).get('td').eq(0).should("have.text", "Gloria");

    });



});