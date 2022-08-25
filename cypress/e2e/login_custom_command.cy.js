/// <reference types="Cypress" />

import users from '/cypress/fixtures/users.json'
describe('Login Page Tests Custom Command '+ Cypress.browser.displayName, () => {


    /** 
     * Test that uses fixure file and create dynamic tests using custom cypress command
     * **/
    Object.keys(users).forEach(key => {
    it('User Login attempt '+ key + Cypress.browser.displayName, () => {
        cy.visit(Cypress.config().baseUrl);
        cy.Login(key,users[key]);
    })
});
});