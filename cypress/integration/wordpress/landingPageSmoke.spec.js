const landingPageView = require('./pageObjects/landingPage')
const landingPage = require('./selectors/landingPage')

describe('Landing Page Smoke Test', () => {
  beforeEach(function () {
    cy.fixture('consts').then((consts) => {
      this.landingPageData = consts.static.landingPage
    })
    cy.visit(Cypress.env('worldpress'))
  })

  it('Check first section content, expect section title, subtitle, start page button', function () {
    landingPageView.checkSectionTitle(
      landingPage.sectionHero,
      this.landingPageData.sections.hero.h1[0]
    )
    landingPageView.checkSectionTitle(
      landingPage.sectionHero,
      this.landingPageData.sections.hero.h1[1]
    )
    landingPageView.checkSectionSubtitle(
      landingPage.sectionHero,
      this.landingPageData.sections.hero.p
    )
    landingPageView.checkSectionStartWebsiteButton(
      landingPage.sectionHero,
      this.landingPageData.sections.hero.startPageButton
    )
    landingPageView.checkSectionImages(
      landingPage.sectionHero,
      this.landingPageData.sections.hero.mobileAlt,
      this.landingPageData.sections.hero.tabletAlt,
      this.landingPageData.sections.hero.desktopAlt
    )
    landingPageView.checkH2(
      landingPage.sectionHero,
      this.landingPageData.sections.hero.h2
    )
    landingPageView.checkSectionFooter(
      landingPage.sectionHero,
      this.landingPageData.sections.hero.footerText
    )
  })
})
