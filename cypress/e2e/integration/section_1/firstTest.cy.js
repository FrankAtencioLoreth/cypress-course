describe("Section 1: Welcome", () => {
   
    it("Hello world!", () => {
        cy.log('Hello world!');
        cy.wait(1000);
   });

   it("Second test -> field name", () => {
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.wait(1000);
        cy.get("#firstName").type("Frank");
        cy.get("#lastName").type("Atencio Loreth");
        cy.get("#userEmail").type("frank.atencio.loreth@gmail.com");
        cy.wait(4000);
   });

});