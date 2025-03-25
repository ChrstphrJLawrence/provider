import { retryableBefore } from 'cy-retryable-before'
let token: string
describe('CRUD movie', () => {
  retryableBefore(() => {
    cy.api({
      method: 'GET',
      url: '/'
    })
      .its('body.message')
      .should('eq', 'Server is running!')
      cy.maybeGetToken('token-session').then(t => {
        token = t
      })
  })

  it('should', () => {
    cy.log(token)
    cy.wrap(token).should('be.a', 'string')
  })
})
