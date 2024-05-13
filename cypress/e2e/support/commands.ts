/// <reference types="cypress" />
  Cypress.Commands.add('assertUrlContains', (url) => {
    cy.url().should('include', url)
  })
  
  export { };
  declare global {
    namespace Cypress {
      interface Chainable {
        assertUrlContains(url: string): Chainable<void>;
      }
    }
  }  