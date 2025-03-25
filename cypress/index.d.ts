export {}

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      maybeGetToken(sessionName: string): Chainable<string>
      /** If the token exists, reuse it
       * If no token exists, gets a token
       */
      
      /** https://www.npmjs.com/package/@cypress/skip-test
       * `cy.skipOn('localhost')` */
      skipOn(
        nameOrFlag: string | boolean | (() => boolean),
        cb?: () => void
      ): Chainable<Subject>

      /** https://www.npmjs.com/package/@cypress/skip-test
       * `cy.onlyOn('localhost')` */
      onlyOn(
        nameOrFlag: string | boolean | (() => boolean),
        cb?: () => void
      ): Chainable<Subject>
    }
  }
}
