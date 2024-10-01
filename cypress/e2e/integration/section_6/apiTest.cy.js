///<reference types='Cypress' />

const xpath = require('cypress-xpath');
const url = 'https://reqres.in/api/users';

describe('Api testing', () => {
    
    let data;

    it('Api - Get users', () => {
        data = cy.request(url)
        .should((response) => {
            expect(response.status).to.eq(200)
        }); 
    }); 

    it('Api - Get users - 2', () => {
        cy.request({
            method: 'GET',
            url: url,
            headers: {
                accept: 'application/json'
            }
        }).then( (response) => {
            data = null;
            data = JSON.parse(JSON.stringify(response.body));
            cy.log(data.data[0].email)
            expect(data.data[0]).has.property('email', 'george.bluth@reqres.in');
            expect(data.data[0]).has.property('first_name', 'George');
            expect(data.data[0]).has.property('last_name', 'Bluth');
            expect(response.status).to.eq(200);
        });
    }); 

    it('Api - Post user', () => {
        
        const user = {
            "email": "fatencio@gmail.com",
            "name": "Frank",
            "last_name": "Atencio Loreth",
            "job": "Automation QA"
        }

        cy.request({
            method: 'POST',
            url: url,
            body: user
        }).then( (response) => {
            data = JSON.parse(JSON.stringify(response.body));
            expect(data).has.property('email', user.email);
            expect(data).has.property('name', user.name);
            expect(data).has.property('last_name', user.last_name);
            expect(data).has.property('job', user.job);
            expect(response.status).to.eq(201);
        });
    }); 

    it('Api - PUT user', () => {
        
        const user = {
            "email": "fatencio@gmail.com",
            "name": "Frank",
            "last_name": "Atencio Loreth",
            "job": "Senior Automation QA"
        }

        cy.request({
            method: 'PUT',
            url: url+"/2",
            body: user
        }).then( (response) => {
            data = JSON.parse(JSON.stringify(response.body));
            expect(data).has.property('email', user.email);
            expect(data).has.property('name', user.name);
            expect(data).has.property('last_name', user.last_name);
            expect(data).has.property('job', user.job);
            expect(response.status).to.eq(200);
        });
    }); 

    it('Api - Delete an user', () => {
        cy.request({
            method: 'DELETE',
            url: url+"/2",
        }).then( (response) => {
            expect(response.status).to.eq(204);
        });
    }); 

});