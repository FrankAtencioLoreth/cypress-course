describe("Type functions", () => {

    it("Type enter", () => {
        cy.visit("https://google.com");
        cy.title().should("eq", "Google");
        cy.wait(1000);
        cy.get("#APjFqb").type("cypress io {enter}");
        cy.wait(1000);
        cy.get("#rso > div.hlcw0c > div > div > div > div > div > div > div > div.yuRUbf > div > span > a > h3").click();
    });

    it("Type pageUp", () => {
        cy.visit("https://demoqa.com/text-box");
        cy.title().should("eq", "DEMOQA");
        cy.wait(1000);
        cy.get("#userName").type("{pageUp}");
        cy.wait(1000);
    });

    it("Type pageDown", () => {
        cy.visit("https://demoqa.com/text-box");
        cy.title().should("eq", "DEMOQA");
        cy.wait(1000);
        cy.get("#userName").type("{pageDown}");
        cy.wait(1000);
    });

    //it.only (only execute this test case)
    it.only("Type pageDown", () => {
        cy.visit("https://demoqa.com/text-box");
        cy.title().should("eq", "DEMOQA");
        cy.wait(1000);
        cy.get("#userName").type("{pageDown}");
        cy.wait(1000);
    });

});