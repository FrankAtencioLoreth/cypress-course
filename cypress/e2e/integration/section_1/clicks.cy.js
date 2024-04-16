describe("Introduction to clicks", () => {

    it("Simple click", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.title().should("eq", "OrangeHRM");
        cy.wait(1000);

        cy.get("input[name='username']").should("be.visible").type("Admin");
        cy.get("input[name='password']").should("be.visible").type("admin123");

        cy.get("button[type='submit']").should("be.visible").click();

        cy.contains('Dashboard').should("be.visible");
    });

    it("Click force true", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.title().should("eq", "OrangeHRM");
        cy.wait(1000);

        cy.get("input[name='username']").should("be.visible").type("Admin");
        cy.get("input[name='password']").should("be.visible").type("admin123");

        cy.get("button[type='submit']").should("be.visible").click({force: true});//force click

        cy.contains('Dashboard').should("be.visible");
    });

    it.only("Click by coordinates [x,y]", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.title().should("eq", "OrangeHRM");
        cy.wait(1000);

        cy.get("input[name='username']").should("be.visible").type("Admin");
        cy.get("input[name='password']").should("be.visible").type("admin123");

        cy.get("button[type='submit']").should("be.visible").click(100,5);//force click

        cy.contains('Dashboard').should("be.visible");
    });

});