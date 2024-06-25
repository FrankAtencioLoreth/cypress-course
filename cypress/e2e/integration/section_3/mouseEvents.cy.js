///<reference types="cypress"/>
import '@4tw/cypress-drag-drop';

describe('Mouse events', () => {


    it('Drag and drop', () => {
       //go to the url
       cy.visit('https://the-internet.herokuapp.com/drag_and_drop');
       cy.title().should('eq', 'The Internet');
       cy.wait(1000);
 
       cy.get('#column-b').drag('#column-a', {force: true});
    });

    it('Mouse over', () => {
        cy.visit('https://www.sony.com.au/');
        cy.title().should('eq', 'Sony Australia | Latest Technology News | Electronics | Entertainment');
        cy.wait(2000);

        cy.get('#container-b445bd6162 > div > div > div > global-header-component > div > header > div > div.GlobalHeader__Inner > div.GlobalHeaderNavi > button').click();
        cy.get('#container-b445bd6162 > div > div > div > global-header-component > div > header > div > div.GlobalHeader__Inner > div.GlobalHeaderNavi > div > div > div > div > ul > li:nth-child(2) > a')
            .trigger('mouseover')
            .invoke("removeAttr", "target")
            .click();
        cy.wait(2000);


    });


    it.only('Slider', () => {
        cy.visit('https://the-internet.herokuapp.com/horizontal_slider');
        cy.title().should('eq', 'The Internet');
        cy.wait(1000);

        cy.get('#content > div > div > input[type=range]')
            .invoke("attr", "value", "100")
            .click();
        cy.wait(2000);


     });
 
 });