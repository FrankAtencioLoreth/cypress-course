describe("Alerts section", () => {
    it.only("alert", () => {
        cy.visit("https://demoqa.com/modal-dialogs");
        cy.title().should("eq", "DEMOQA");
        cy.wait(1000);
        
        cy.get('#showSmallModal').click({force: true});
        cy.wait(2000);
        cy.get("#closeSmallModal").click({force: true});


        /*cy.on("window:alert", (str) => {
            expect(str).to.equal("texto")
            return true;
        });*/

        cy.wait(3000);

        cy.get('#showSmallModal').click({force: true});
        cy.wait(2000);
        cy.get("body > div.fade.modal.show > div > div > div.modal-header > button").click({force: true});
    });
});