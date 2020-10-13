const landingPage = require('../selectors/landingPageSelectors')

function removeWhiteCharaters(element) {
  let t = element.text().replace(/\s+/g, ' ')

  return t
}

export const checkSectionTitle = (sectionSelector, sectionHeroH1) => {
  cy.log(`get h1, expect to contains ${sectionHeroH1}.`)
  cy.get(sectionSelector)
    .children()
    .should('contain.text', sectionHeroH1)
}

export const checkSectionSubtitle = (sectionSelector, sectionHeroP) => {
  cy.log(`get subtitle, expect to contain ${sectionHeroP}`)
  cy.get(sectionSelector).then(($p) => {
    expect(removeWhiteCharaters($p)).to.contain(sectionHeroP)
  })

}

export const checkSectionStartWebsiteButton = (sectionSelector, startPageButton) => {
  cy.log(
    `get button, expect it to be visible and has text ${startPageButton}`
  )
  cy.get(sectionSelector)
    .find(landingPage.startPageButton)
    .should('be.visible')
    .and('contain.text', startPageButton)
}

export const checkSectionImages = (sectionSelector, sectionHeroMobileAlt, sectionHeroTabletAlt, sectionHeroDesktopAlt) => {
  cy.log('get images for designated section, expect them to be visible')
  cy.get(sectionSelector)
    .find(landingPage.lpcPictures)
    .each((el) => {
      cy.get(el).should('be.visible')
    })
  cy.get(sectionSelector)
    .find(landingPage.lpcMobileFriendlyImg)
    .should('contain.attr', 'alt', sectionHeroMobileAlt)
  cy.get(sectionSelector)
    .find(landingPage.lpcTabletFriendlyImg)
    .should('contain.attr', 'alt', sectionHeroTabletAlt)
  cy.get(sectionSelector)
    .find(landingPage.lpcEasyToCreateImg)
    .should('contain.attr', 'alt', sectionHeroDesktopAlt)
}

export const checkH2 = (sectionSelector, consts) => {
  cy.log('get h2 for designed section, expect them to be visible and contain text')
  cy.get(sectionSelector)
    .find('h2')
    .children()
    .each(($el) => {
      cy.get($el)
        .then(() => {
          expect($el).to.exist
          expect(removeWhiteCharaters($el)).to.be.oneOf(consts)
        })
    })
}

export const checkSectionFooter = (sectionSelector, heroSectionFooterText) => {
  cy.log('get h6 and image of dedicated section, expect them to be visible')
  cy.get(sectionSelector)
  .find('h6')
  .should(($el) => {
    expect($el).to.exist
    expect(removeWhiteCharaters($el)).to.contain(heroSectionFooterText)
  })
  
  cy.get(landingPage.sectionHeroFooterImg)
  .should('be.visible')
}