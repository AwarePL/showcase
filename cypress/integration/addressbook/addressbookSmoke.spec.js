const landingPageView = require('./pageObjects/addressbook')
const landingPage = require('./selectors/addressbook')

describe('Adressbook Page Smoke Test', () => {
  beforeEach(function () {
    cy.fixture('consts').then((consts) => {
      this.consts = consts
    })

    cy.visit(Cypress.env('addressbook'))
  })

})
