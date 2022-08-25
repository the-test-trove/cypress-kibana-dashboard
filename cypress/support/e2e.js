// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
/// <reference types="Cypress" />
// require('cypress-xpath');
// Alternatively you can use CommonJS syntax:
// require('./commands')
import '@shelex/cypress-allure-plugin';

if (Cypress.config('hideXHR')) {
    const app = window.top;
  
    if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
      const style = app.document.createElement('style');
      style.innerHTML =
        '.command-name-request, .command-name-xhr, .command-name-uncaught-exception { display: none }';
      style.setAttribute('data-hide-command-log-request', '');
      app.document.head.appendChild(style);
    }
}


afterEach(function() {
  cy.clearCookies();
  Cypress.session.clearAllSavedSessions();
  cy.allure().subSuite('Demo'+Cypress.browser.displayName)
 cy.allure().story(Cypress.browser.displayName +'Story')
  cy.allure().epic(Cypress.browser.displayName)
  cy.allure().tag(Cypress.browser.displayName)
  cy.task('log',Cypress.browser.displayName)
  let today  = new Date();
  today.toLocaleDateString("en-IN")
  let result = new Object();
  result.testName= this.currentTest.title 
  result.suiteName= this.currentTest.parent.title
  result.testStatus= this.currentTest.state
  result.testexecutionTime =this.currentTest.duration
  result.browser= Cypress.browser.displayName
   result.timeStamp =  today
   if(this.currentTest.state =="failed")
   {
    cy.log(this.currentTest.err)
    result.error = this.currentTest.err
   }
  let resultJson= JSON.stringify(result);
  cy.sendresult(resultJson).then((res) => {
    cy.log("The Status Code received" + res.status);
  });

  cy.log("The resultJson" + resultJson)

});

beforeEach(function(){
  cy.viewport(1920, 1080)
})