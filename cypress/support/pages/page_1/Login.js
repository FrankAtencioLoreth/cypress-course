const xpath = require('cypress-xpath');

class LoginPage {

    get = {

        userInput: () => cy.get('[name="username"]').eq(0).should('be.visible'),
        passInput: () => cy.get('[name="password"]').eq(0).should('be.visible'),
        loginButton: () => cy.get('[type="submit"]').eq(0).should('be.visible'),
        dashboardBar: () => cy.get('.oxd-topbar-header-breadcrumb > .oxd-text'),
        loginError: () => cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/div/div[1]/div[1]/p')
    }

    visitLogin() {

        beforeEach(()=>{

            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
            cy.title().should('eq', 'OrangeHRM');
            cy.wait(1000);

        });

    }

    doLogin(user, password) {

        this.get.userInput().type(user);
        this.get.passInput().type(password);
        this.get.loginButton().click({force: true});

    }

    loginAssertTrue() {

        this.get.dashboardBar().contains('Dashboard');

    }

    loginAssertFalse() {

        this.get.loginError().contains('Invalid credentials');

    }


}

export const login = new LoginPage();