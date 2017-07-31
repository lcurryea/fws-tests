module.exports = {
  url: function () {
    return this.api.launchUrl + '/address'
  },
  elements: {
    'main': '#content',
    'govuk': '#logo',
    'govukLink': 'a[href="https://www.gov.uk"]',
    'betaBanner': '.phase-banner-beta',
    'feedbackLink': 'a[href="http://www.smartsurvey.co.uk/s/FloodWarningService"]',
    'backButton': '.link-back',
    'header': 'h1',
    'headerSubtext': '#content > p:nth-child(4)',
    'postcode': '#content > p:nth-child(5) > b:nth-child(1)',
    'changeaddressLink': 'a[href="/app/olr/changeaddress?method=changeAddress"]',
    'listofaddresses': '.olr',
    'cantfindaddressLink': 'a[href="/app/olr/postcodeMbr?method=searchByPostcodeMbr&postcode="]',
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
    setPostcode: function (value) {
      return this.setValue('@postcodeInput', value)
    },
    selectFindAddress: function () {
      return this.waitForElementVisible('@findaddressButton', 1000)
      .click('@findaddressButton')
    },
    searchTownCity: function () {
      return this.waitForElementVisible('@altsearchLink', 1000)
      .click('@altsearchLink')
    }
  }]
}
