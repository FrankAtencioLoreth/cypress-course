import 'cypress-xpath';
import 'cypress-iframe';

///<reference types="cypress"/>
///<reference types="cypress-xpath"/>
///<reference types="cypress-iframe"/>

describe('Introduction to asserts', () => {

    it('Contains', () => {
        //go to the url
        cy.visit('http://www.automationpractice.pl/index.php');
        cy.title().should('eq', 'My Shop');
        cy.wait(1000);

        //click on the women section
        cy.get('#block_top_menu')
            .contains('Women')
            .click();
    });

    it('Find eq', () => {
        //go to the url
        cy.visit('http://www.automationpractice.pl/index.php');
        cy.title().should('eq', 'My Shop');
        cy.wait(1000);

        //click on the women section
        cy.get('#block_top_menu')
            .contains('Women')
            .click();

        //Click first elemet
        cy.get('.product-container')
            .find('.product-image-container').wait(1000)
            .eq(0)
            .click();
    });

    it('Text 1', () => {
        //go to the url
        cy.visit('http://www.automationpractice.pl/index.php');
        cy.title().should('eq', 'My Shop');
        cy.wait(1000);

        //click on the women section
        cy.get('#block_top_menu')
            .contains('Women')
            .click();

        //Click first elemet
        cy.get('.product-container')
            .find('.product-image-container')
            .eq(2)
            .click();

        cy.wait(2000);
        
        //switch to iframe
        cy.frameLoaded('.fancybox-iframe');

        //get text  
        cy.iframe()
            .find('#product_condition')
            .find('.editable')
            .then(( element ) => {
                let value = element.text();
                if(value==='New product') {
                    cy.log(`The dress is a New product`);
                }else {
                    cy.log(`The dress is not a New product`);
                }
             });
    });

    it('Text 2', () => {
        //go to the url
        cy.visit('http://www.automationpractice.pl/index.php');
        cy.title().should('eq', 'My Shop');
        cy.wait(1000);

        //click on the women section
        cy.get('#block_top_menu')
            .contains('Women')
            .click();

        cy.wait(2000);
        
        cy.get('#center_column > ul > li:nth-child(2) > div > div.left-block > div > a.product_img_link').eq(0).click({force: true}); 

        

        cy
            .get('#our_price_display')
            .then(( element ) => {
                let value = element.text().slice(1);

                cy.log(`The price is ${value}`);

                if( value >= 27 ) {

                    cy.log(`There is no budget to buy it`);

                } else {

                    cy
                        .xpath("//select[@id='group_1']").as('select').select('L', {force: true}).trigger('change', {force: true})
                        .then(( element ) => {
                            cy.wait(2000);
                            cy.get('#add_to_cart > button').as('cart').click({force: true});
                        });

                }
             });
    });

    it('Assert contain.text', () => {
        //values
        const person = {
            name: 'Frank',
            email: 'frank.atencio.loreth@gmail.com'
        }

        //go to the url
        cy.visit('https://demoqa.com/text-box');
        cy.title().should('eq', 'DEMOQA');
        cy.wait(1000);

        //locate the form
        cy
            .get('#userForm')
            .as('form')
            .then(( element ) => {

                cy
                    .get('#userName')
                    .should('be.visible')
                    .type(person.name);

                
                cy
                    .get('#userEmail')
                    .should('be.visible')
                    .type(person.email);

                cy
                    .get('#submit')
                    .should('be.visible')
                    .click({force: true});

                cy
                    .get('#name')
                    .should('be.visible')
                    .should('have.text', 'Name:'+person.name);

                cy
                    .get('#email')
                    .should('be.visible')
                    .should('contain.text', person.email);

            });

    });

    it('Assert contain.text + then', () => {

        //values
        const person = {
            name: 'Frank',
            email: 'frank.atencio.loreth@gmail.com'
        }

        //go to the url
        cy.visit('https://demoqa.com/text-box');
        cy.title().should('eq', 'DEMOQA');
        cy.wait(1000);

        //locate the form
        cy
            .get('#userForm')
            .as('form')
            .then(( element ) => {

                cy
                    .get('#userName')
                    .should('be.visible')
                    .type(person.name)
                    .should('have.value', person.name)
                    .then(() =>{

                        cy
                            .get('#userEmail')
                            .should('be.visible')
                            .type(person.email);

                        cy
                            .get('#submit')
                            .should('be.visible')
                            .click();

                    });

            });

    });

    it('Assert have class', () => {

        //values
        const person = {
            name: 'Frank',
            email: 'frank.atencio.loreth@gmail.com'
        }

        //go to the url
        cy.visit('https://demoqa.com/text-box');
        cy.title().should('eq', 'DEMOQA');
        cy.wait(1000);

        //locate the form
        cy
            .get('#userForm')
            .as('form')
            .then(( element ) => {

                cy
                    .get('#userName')
                    .as('username')
                    .should('be.visible')
                    .should(
                        'have.class', 
                        'mr-sm-2'
                    )
                    .then( () => {
                        
                        cy
                            .get('#userName')
                            .type(person.name);


                    });

            });

    });

    it('Assert have class and function and', () => {

        //values
        const person = {
            name: 'Frank',
            email: 'frank.atencio.loreth@gmail.com'
        }

        //go to the url
        cy.visit('https://demoqa.com/text-box');
        cy.title().should('eq', 'DEMOQA');
        cy.wait(1000);

        //locate the form
        cy
            .get('#userForm')
            .as('form')
            .then(( element ) => {

                cy
                    .get('#userName')
                    .as('username')
                    .should('be.visible')
                    .and(
                        'have.class', 
                        'mr-sm-2'
                    )
                    .then( () => {
                        
                        cy
                            .get('#userName')
                            .type(person.name);


                    });

            });

    });

    it('Assert have not class', () => {

        //values
        const person = {
            name: 'Frank',
            email: 'frank.atencio.loreth@gmail.com'
        }

        //go to the url
        cy.visit('https://demoqa.com/text-box');
        cy.title().should('eq', 'DEMOQA');
        cy.wait(1000);

        //locate the form
        cy
            .get('#userForm')
            .as('form')
            .then(( element ) => {

                cy
                    .get('#userName')
                    .as('username')
                    .should('be.visible')
                    .and(
                        'not.have.class', 
                        'mr-sm-2XXXX'
                    )
                    .then( () => {
                        
                        cy
                            .get('#userName')
                            .type(person.name);


                    });

            });

    });

    it.only('Assert contains', () => {

        //go to the url
        cy.visit('https://demoqa.com/modal-dialogs');
        cy.title().should('eq', 'DEMOQA');
        cy.wait(1000);

      
        cy
            .get('#showSmallModal')
            .should('be.visible')
            .click();

        cy
            .get('#closeSmallModal')
            .should('be.visible')
            .click();

        //contains from start
        cy.
            contains("[type=button]", "Small modal")
            .should('be.visible')
            .click();

    });

});