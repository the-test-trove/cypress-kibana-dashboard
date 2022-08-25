import LoginPage from '../helper/pageobject/loginPage'
describe('Login Test', () => {

    it('Verify User should be able to login with valid credentials ' + Cypress.browser.displayName, () => {
        cy.visit(Cypress.config().baseUrl);
        LoginPage.setUserName("standard_user").setPassWord("secret_sauce").clickLoginButton() 
        expect('false').to.true
    })


    it('Verify User should be able to login with invalid  credentials ' + Cypress.browser.displayName, () => {
        cy.visit(Cypress.config().baseUrl);
        LoginPage.setUserName("standard_user").setPassWord("secret_sauce").clickLoginButton() 
        expect(true,true)
    })

    it.skip('Verify User should be able to login with valid credentials skiped ' + Cypress.browser.displayName, () => {
        cy.visit(Cypress.config().baseUrl);
        LoginPage.setUserName("standard_user").setPassWord("secret_sauce").clickLoginButton() 
   
    })
});