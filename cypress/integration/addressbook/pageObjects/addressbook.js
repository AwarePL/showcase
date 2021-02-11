const faker = require('faker/locale/zh_TW')
const addressbook = require('../selectors/addressbook')

export const goToTab = (selector, tabText) => {
  cy.log(`Go to ${tabText} tab`)
  cy.get('#navbar')
    .find(selector)
    .should('have.text', tabText)
    .click()
}

function fakeData() {
  let addressData =
  {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    line1: faker.address.streetAddress(),
    line2: faker.address.secondaryAddress(),
    city: faker.address.city(),
    zipCode: faker.address.zipCode(),
    birthday: '1977-12-11',
    color: faker.internet.color(),
    age: faker.random.number(),
    web: faker.internet.url(),
    picture: faker.internet.avatar(),
    phone: faker.phone.phoneNumber(),
    note: faker.lorem.sentence()
  }
  return addressData
}

function fillNewAddressForm() {
  const data = fakeData()
  cy.get(addressbook.address.firstName)
  .type(data.firstName)
  cy.get(addressbook.address.lastName)
    .type(data.lastName)
  cy.get(addressbook.address.line1)
    .type(data.line1)
  cy.get(addressbook.address.line2)
    .type(data.line2)
  cy.get(addressbook.address.city)
    .type(data.city)
  cy.get(addressbook.address.state)
    .select('Hawaii')
  cy.get(addressbook.address.zipCode)
    .type(data.zipCode)
  cy.get(addressbook.address.country.us)
    .click()
  cy.get(addressbook.address.birthday)
    .type(data.birthday)
  cy.get(addressbook.address.color)
    .invoke('attr', 'value', data.color)
  cy.get(addressbook.address.age)
    .type(data.age)
  cy.get(addressbook.address.web)
    .type(data.web)
  cy.get(addressbook.address.phone)
    .type(data.phone)
  cy.get(addressbook.address.interests.reading)
    .click()
  cy.get(addressbook.address.note)
    .type(data.note)
    return data
}

export const createEntryWithData = (logic) => {
  cy.intercept('GET', '**addresses/new').as('getNewAdressForm')
  cy.get(addressbook.newAddressBtn)
    .click()
  cy.wait('@getNewAdressForm')
  .then(() => {
    if(logic === true){
      fillNewAddressForm()
      cy.get(addressbook.createAddressBtn)
      .click()
      .then(() => {
        cy.get(addressbook.createdAddress.container)
          .find(addressbook.createdAddress.firstName)
          .should('be.visible')
        cy.get(addressbook.createdAddress.list)
        .click()
      })
    } else {
      cy.get(addressbook.createAddressBtn)
      .click()
      cy.get(addressbook.address.validation)
      .should('be.visible')
    }
  })
}

export const removeAnAddress = () => {
  cy.get('tbody > tr')
    .then((initCount) => {
      cy.get('a[data-test*="destroy"]')
      .first()
      .click()
      .then(() => {
        cy.get('tbody > tr')
        .then((newCount) => {
          expect(newCount).to.have.lengthOf(initCount.length - 1)
        })
      })
    })
}

export const checkSignOut = () => {
  cy.get(addressbook.currentUser)
  .should('not.exist')
  cy.get(addressbook.signedOut)
  .should('be.visible')
}