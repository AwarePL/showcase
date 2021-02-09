const landingPageView = require('./pageObjects/landingPage')
const landingPage = require('./selectors/landingPage')

describe('Landing Page Smoke Test', () => {
  beforeEach(function () {
    cy.fixture('consts').then((consts) => {
      this.consts = consts
    })
    cy.visit(Cypress.env('worldpress'))
  })

  it('Check first section content, expect section title, subtitle, start page button', function () {
    landingPageView.checkSectionTitle(
      landingPage.sectionHero,
      this.consts.static.landingPage.sections.hero.h1[0]
    )
    landingPageView.checkSectionTitle(
      landingPage.sectionHero,
      this.consts.static.landingPage.sections.hero.h1[1]
    )
    landingPageView.checkSectionSubtitle(
      landingPage.sectionHero,
      this.consts.static.landingPage.sections.hero.p
    )
    landingPageView.checkSectionStartWebsiteButton(
      landingPage.sectionHero,
      this.consts.static.landingPage.sections.hero.startPageButton
    )
    landingPageView.checkSectionImages(
      landingPage.sectionHero,
      this.consts.static.landingPage.sections.hero.mobileAlt,
      this.consts.static.landingPage.sections.hero.tabletAlt,
      this.consts.static.landingPage.sections.hero.desktopAlt
    )
    landingPageView.checkH2(
      landingPage.sectionHero,
      this.consts.static.landingPage.sections.hero.h2
    )
    landingPageView.checkSectionFooter(
      landingPage.sectionHero,
      this.consts.static.landingPage.sections.hero.footerText
    )
  })
})
