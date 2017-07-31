module.exports = {
  url: function () {
    return this.api.launchUrl + '/register'
  },
  elements: {
    'main': '#content',
    'govuk': '#logo',
    'govukLink': 'a[href="https://www.gov.uk"]',
    'betaBanner': '.phase-banner-beta',
    'feedbackLink': 'a[href="http://www.smartsurvey.co.uk/s/FloodWarningService"]',
    'backButton': '.link-back',
    'header': 'h1',
    'homeButton': 'label.block-label:nth-child(1)',
    'businessButton': 'label.block-label:nth-child(2)',
    'continueButton': '.button',
    'privacyLink': 'a[href="https://www.gov.uk/help/privacy-policy"]',
    'cookiesLink': 'a[href="https://www.gov.uk/help/cookies"]',
    'oglStatement': '.open-government-licence > p:nth-child(2)',
    'oglLink': 'a[href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/',
    'copyright': '.copyright > a:nth-child(1)',
    'copyrightLink': 'a[href="http://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/copyright-and-re-use/crown-copyright/"]'
  },
  commands: [{
    load: function () {
      return this.navigate()
    },
    back: function (value) {
      return this.waitForElementVisible('@backButton', 1000)
      .click('@backButton')
    },
    selectHome: function () {
      return this.waitForElementVisible('@homeButton', 1000)
      .click('@homeButton')
    },
    selectBusiness: function () {
      return this.waitForElementVisible('@businessButton', 1000)
      .click('@businessButton')
    },
    selectContinue: function () {
      return this.waitForElementVisible('@continueButton', 1000)
      .click('@continueButton')
    }
  }]
}
