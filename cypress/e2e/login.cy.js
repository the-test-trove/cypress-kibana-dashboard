/// <reference types="Cypress" />
import LoginPage from '../helper/pageobject/loginPage'
describe('Login Page Tests ' +  Cypress.browser.displayName, () => {
    it('Verify User should be able to login with valid credentials ' + Cypress.browser.displayName, () => {
        cy.visit(Cypress.config().baseUrl);
        LoginPage.setUserName("standard_user").setPassWord("secret_sauce").clickLoginButton() 

    })
});