describe('Critical tests suite', function () {
  it('first', function () {
    cy.api({
      url: 'https://app.asana.com/api/1.0/users/me',
      headers: { Authorization: `Bearer ${Cypress.env('secret').pat}` },
      method: 'get'
    }).should('be.ok')
  })
})
