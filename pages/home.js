module.exports = {
  url: function () {
    return this.api.launchUrl + '/home'
  },
  elements: {
    'main': '#content',
    'govuk': '#logo',
    'govukLink': 'a[href="https://www.gov.uk"]',
    'betaBanner': '.phase-banner-beta',
    'feedbackLink': 'a[href="http://www.smartsurvey.co.uk/s/FloodWarningService"]',
    'header': 'h1',
    'signupText': 'h2',
    'signupLink': '.column-two-thirds > p:nth-child(3) > a:nth-child(1)',
    'updateText': 'h2.heading-medium:nth-child(4)',
    'updateLink': '.column-two-thirds > p:nth-child(5) > a:nth-child(1)',
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
    signUp: function (value) {
      return this.waitForElementVisible('@signupLink', 1000)
      .click('@signupLink')
    },
    signIn: function () {
      return this.waitForElementVisible('@updateLink', 1000)
      .click('@signinLink')
    }
  }]
}
