describe("Alias section", () => {
    it("alias 1", () => {
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.title().should("eq", "DEMOQA");
        cy.wait(1000);
        
        cy.get('#firstName').should('be.visible').as('nom');
        cy.get('@nom').type('Frank');
        cy.get('#lastName').should('be.visible').as('last');
        cy.get('@last').type('Atencio Loreth');
        cy.get('#userEmail').should('be.visible').as('email');
        cy.get('@email').type('fatencio@gmail.com');
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').should('be.visible').as('genderMale');
        cy.get('@genderMale').click();
        cy.get('#userNumber').should('be.visible').as('mobile');
        cy.get('@mobile').type('3222927493');
        cy.get('#dateOfBirthInput').should('be.visible').as('birth');
        cy.get('@birth').type('16 Apr 1998{enter}');
        cy.get('#subjectsInput').should('be.visible').as('subject');
        cy.get('@subject').type('Lorem ipsum');
    });
});