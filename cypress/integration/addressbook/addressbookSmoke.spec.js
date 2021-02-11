const addressbookView = require('./pageObjects/addressbook')
const addressbook = require('./selectors/addressbook')

describe('Adressbook Page Smoke Test', () => {
  beforeEach(function () {
    cy.fixture('consts').then((consts) => {
      this.adressbookData = consts.static.addressbook
      cy.manualLoginAddressbook()
    })
  })

  it('Go to addresses tab and promp validation', function () {
    addressbookView.goToTab(addressbook.tab.addresses, this.adressbookData.tabText[1])
    addressbookView.createEntryWithData(false)
  })
  it('Go to addresses tab and create new entry.', function () {
    addressbookView.goToTab(addressbook.tab.addresses, this.adressbookData.tabText[1])
    addressbookView.createEntryWithData(true)
  })
  it('Go to addresses tab and remove an address', function () {
    addressbookView.goToTab(addressbook.tab.addresses, this.adressbookData.tabText[1])
    addressbookView.createEntryWithData(true)
    addressbookView.removeAnAddress()
  })
  it('Check signing out', function () {
    addressbookView.goToTab(addressbook.tab.signOut, this.adressbookData.tabText[2])
    addressbookView.checkSignOut()
  })
})
