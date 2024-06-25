describe('Dates', () => {

    it('Datepicker 1', () => {
        cy.visit('https://demoqa.com/date-picker');
        cy.wait(1000);
    
        cy.get('#datePickerMonthYearInput').should('be.visible').clear().type("04/16/1998{enter}");
        cy.wait(2000);

    });

    it('Datepicker 2', () => {
        cy.visit('https://demoqa.com/date-picker');
        cy.wait(1000);
    
        cy.get('#dateAndTimePickerInput').should('be.visible').clear().type("April 16, 1998 11:54 AM{enter}");
        cy.wait(4000)

    });

});