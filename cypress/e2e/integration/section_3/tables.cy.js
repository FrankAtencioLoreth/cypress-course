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

    it('webtables elements and eq function', () => {
        cy.visit('https://tablepress.org/demo/');
        cy.wait(1000);
    
        cy.get('#tablepress-demo')
            .children('tbody')
            .children('tr').eq(0).get('td').eq(0).should("have.text", "Gloria");

    });

    it('webtables elements and filter function', () => {
        cy.visit('https://tablepress.org/demo/');
        cy.wait(1000);
    
        cy.get('#tablepress-demo')
            .children('tbody')
            .children('tr').eq(0).get('td').filter('.column-1').should('contain', 'Gloria');
    });

    it('webtables elements and find function', () => {
        cy.visit('https://tablepress.org/demo/');
        cy.wait(1000);
    
        cy.get('#tablepress-demo')
            .find('.column-1').should('contain', 'Gloria');
    });

    it('webtables elements and first function', () => {
        cy.visit('https://tablepress.org/demo/');
        cy.wait(1000);
    
        cy.get('#tablepress-demo')
            .first('.column-1').should('contain', 'Gloria');

        cy.get('#tablepress-demo')
        .last('.column-1').should('contain', 'Haley');
    });

    it('webtables elements and first function', () => {
        cy.visit('https://tablepress.org/demo/');
        cy.wait(1000);
    
        cy.get('#tablepress-demo')
            .first('.column-1').should('contain', 'Gloria');

        cy.get('#tablepress-demo')
        .last('.column-1').should('contain', 'Haley');
    });

    it('webtables elements and parent function', () => {
        cy.visit('https://tablepress.org/demo/');
        cy.wait(1000);

        cy.get('#tablepress-demo')
        .last('.column-1').should('contain', 'Haley').parent().should('have.class', 'dataTables_scrollBody')
    });


    it('challenge - get data', () => {
        cy.visit('https://tablepress.org/demo/');
        cy.wait(1000);

        const data=[];

        cy.get('td').each(($el, index, $list) => {
            data[index  ] = $el.text();
        }).then(()=>{
            for(let i=0; i<data.length; i++) {
                cy.log(data[i]);
            }
        });

    });

    it('challenge - sum data', () => {
        cy.visit('https://tablepress.org/demo/');
        cy.wait(1000);

        const data=[];
        let cantidad;

        cy.get('td').each(($el, index, $list) => {
            data[index  ] = $el.text();
        }).then(()=>{
            for(let i=0; i<data.length; i++) {
                if(Number(data[i])) {
                    cantidad+=Number(data[i]);
                }
            }
            cy.log(`Cant: ${cantidad}`);
            expect(cantidad).to.eq(NaN);
        });

    });

    it.only('challenge - especidic element', () => {
        cy.visit('https://tablepress.org/demo/');
        cy.wait(1000);

        const field = cy.get("#tablepress-demo > tbody > tr.row-4.even > td.column-1")
       
        field.each(($el, index, $list) => {
            const data = $el.text();
            
            if(data.includes("Warren")) {
                field.eq(index).next().next().then((e) => {
                    const zip = e.text();
                    cy.log(zip)
                    expect(zip).to.equal('99134');
                });
            }

        });

    });


});