describe("introduction to Asserts ", () => {
    it.only("asserts 1", () => {
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.title().should("eq", "DEMOQA");
        cy.wait(1000);
        cy.get("#firstName").should("be.visible").type("Frank");//element is visible
        cy.get("#lastName").should("be.visible").type("Atencio Loreth");//element is visible
        cy.get("#userEmail").should("be.visible").should("be.enabled").type("test@test.com");//element is visible
    });
});