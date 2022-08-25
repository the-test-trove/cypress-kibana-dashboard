// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add("Login",(username, password) =>
{
    cy.get('[data-test="username"]').type(username)
    cy.get('[data-test="password"]').type(password,{log:false})
    cy.get('[data-test="login-button"]').as("btnLogin").click()   
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()    
})

Cypress.Commands.add('isInViewPort', element => {
    cy.get(element).then($el => {
  
      const bottom = Cypress.$(cy.state("window")).height();
      const rect = $el[0].getBoundingClientRect();
  
      expect(rect.top).to.be.least(0)
      expect(rect.bottom).to.be.greaterThan(0);
      expect(rect.top).to.be.lessThan(bottom);
      expect(rect.bottom).to.be.lessThan(bottom);
  
  
    })
  })


  Cypress.Commands.add('sendresult',(result)=> {

    cy.request(
        {
            method: "POST",
            url : "http://localhost:9200/dashboard-demos/tconf",
            failOnStatusCode: false,
            // auth:
            //     {
            //         username :"elastic",
            //         password: "z__2Y*cyD*zoShVDUAIW"
            //     },
            headers:
            {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: result

        })

})