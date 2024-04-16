import 'cypress-plugin-tab';

describe("Function tabs ", () => {
    it.only("tabs", () => {
        cy.visit("https://demoqa.com/text-box");
        cy.title().should("eq", "DEMOQA");
        cy.wait(1000);
        cy.get("#userName").type("Frank").tab().
        type("frank.atencio.loreth@gmail.com").tab().
        type("Calle wallapop #78 - 90");
        cy.wait(1000);
    });
});