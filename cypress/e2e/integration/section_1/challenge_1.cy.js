describe("1st challenge", () => {

    /*
    * Test start
    */
   
    it("Register an user", () => {
        //go to the url
        cy.visit("https://demoqa.com/webtables");
        cy.title().should("eq", "DEMOQA");
        cy.wait(1000);

        //click on the add new record button
        cy.get('#addNewRecordButton').should("be.visible").should("be.enabled").click();

        //fill the form
        cy.get('#firstName').should("be.visible").should("be.enabled").type("Frank");
        cy.get('#lastName').should("be.visible").should("be.enabled").type("Atencio Loreth");
        cy.get('#userEmail').should("be.visible").should("be.enabled").type("frank.atencio.loreth@gmail.com");
        cy.get('#age').should("be.visible").should("be.enabled").type("26");
        cy.get('#salary').should("be.visible").should("be.enabled").type("2700000");
        cy.get('#department').should("be.visible").should("be.enabled").type("Tecnologie and Information");

        //click on the submit button
        cy.get('#submit').should("be.visible").should("be.enabled").click({force: true});
        cy.wait(4000);

        //search registered users
        cy.get("#searchBox")
            .should("be.visible")
            .should("be.enabled")
            .type("Frank");

        //assert
        cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(1)').should("have.text", "Frank");

    });

    it("Edit an user", () => {
        //go to the url
        cy.visit("https://demoqa.com/webtables");
        cy.title().should("eq", "DEMOQA");
        cy.wait(1000);

        //click on the edit button
        cy.get('#edit-record-1').should("be.visible").click();

        //fill the form
        cy.get('#firstName').should("be.visible").should("be.enabled").clear().type("Mario");
        cy.get('#lastName').should("be.visible").should("be.enabled").clear().type("Segoviano");
        cy.get('#userEmail').should("be.visible").should("be.enabled").clear().type("mario.segoviano@gmail.com");
        cy.get('#age').should("be.visible").should("be.enabled").clear().type("40");
        cy.get('#salary').should("be.visible").should("be.enabled").clear().type("3000000");
        cy.get('#department').should("be.visible").should("be.enabled").clear().type("Psychology");

        //click on the submit button
        cy.get('#submit').should("be.visible").should("be.enabled").click({force: true});
        cy.wait(4000);

        //search registered users
        cy.get("#searchBox")
            .should("be.visible")
            .should("be.enabled")
            .type("Mario");

        //assert
        cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(1)').contains("Mario");

    });

    it("Delete an user", () => {
        //go to the url
        cy.visit("https://demoqa.com/webtables");
        cy.title().should("eq", "DEMOQA");
        cy.wait(1000);

        //click on the edit button
        cy.get('#delete-record-1').should("be.visible").click();

        //search delete user
        cy.get("#searchBox")
            .should("be.visible")
            .should("be.enabled")
            .type("Cierra");

        //assert
        cy.get('.rt-noData').should("have.text", "No rows found");

    });

});