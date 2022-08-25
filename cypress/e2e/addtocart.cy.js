/// <reference types="Cypress" />

import LoginPage from '../helper/pageobject/loginPage'
import ProductPage from "../helper/pageobject/productPage"

describe('Add to Cart Test '+ Cypress.browser.displayName, () => {
    
    it('Verify User should be able to login with valid credentials and add items to the cart ' + Cypress.browser.displayName, () => {
        cy.visit(Cypress.config().baseUrl);
        LoginPage.setUserName("standard_user").setPassWord("secret_sauce").clickLoginButton() 
        ProductPage.getPageTitle().then(title => cy.log(title.text()))
        ProductPage.getAllProducts().then(item => {
            cy.log(item.length)
        })
        ProductPage.addItemToCart().click()

    });

    it('Verify User not should be able add items to the cart without succesful login'+ Cypress.browser.displayName, () => {
      
        cy.visit(Cypress.config().baseUrl);
        LoginPage.setUserName("standard_user").setPassWord("secret_sauce").clickLoginButton() 
        ProductPage.getPageTitle().then(title => 
            {
                cy.log(title.text())
                expect(title.text()).eq("Products")
            })
        ProductPage.getAllProducts().then(item => cy.log(item.text()))
        ProductPage.addItemToCart().click()

    });
});