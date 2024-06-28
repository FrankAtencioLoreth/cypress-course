describe("Invoke section", () => {
    it("invoke text", () => {
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.title().should("eq", "DEMOQA");
        cy.wait(1000);
        
        cy.get('h5').should('be.visible').invoke('text').as('info');

        cy.get('@info').should('contain', 'Student Registration Form');

        cy.get('#firstName').should('be.visible').as('nom');
        cy.get('#userName-label').should('be.visible').invoke('text').as('label');
        cy.get('@label').should('contain', 'Name').then( () => {
            cy.get('@nom').type('Frank')
        });

    });

    it("invoke attr", () => {
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.title().should("eq", "DEMOQA");
        cy.wait(1000);
        
        

        cy.get('h5').should('be.visible').invoke('attr', 'style', 'color: blue; font-size: 50px;');
        

    });

    it("invoke sow", () => {
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.title().should("eq", "DEMOQA");
        cy.wait(1000);
        
        

        cy.get('h5').should('be.visible').as('title').invoke('hide' );
        cy.get('@title').invoke('show', '10s');

    });

    it("invoke src", () => {
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.title().should("eq", "DEMOQA");
        cy.wait(1000);
        
        

        cy.get('#app > header > a > img').should('be.visible').as('img');
        cy.get('@img').invoke('attr','src').should('include', '/images/Toolsqa.jpg');

    });

    it.only("invoke remove", () => {
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.title().should("eq", "DEMOQA");
        cy.wait(1000);
        
        

        cy.get('#app > header > a').should('be.visible').as('url');
        cy.get('@url').invoke('removeAttr','href').click();

    });


    
});