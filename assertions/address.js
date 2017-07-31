module.exports = {
  confirm: function (homePage) {
    homePage
      .assert.visible('@govuk')
      .assert.visible('@govukLink')
      .assert.visible('@betaBanner')
      .assert.visible('@feedbackLink')
      .assert.title('Check if you can get flood warnings for your area')
      .assert.containsText('@header', 'Check if you can get flood warnings for your area')
      .assert.containsText('@headerSubText', 'We\'ll check if the address is near an area that we give warnings for.')
      .assert.containsText('@postcodeLabel', 'Postcode')
      .assert.visible('@postcodeInput')
      .assert.visible('@findaddressButton')
      .assert.containsText('@altsearchText', 'Or search by town or city')
      .assert.visible('@altsearchLink')
      .assert.visible('@privacyLink')
      .assert.visible('@cookiesLink')
      .assert.containsText('@oglStatement', 'All content is available under the Open Government Licence v3.0, except where otherwise stated')
      .assert.visible('@oglLink')
      .assert.visible('@copyright')
      .assert.visible('@copyrightLink')
  }
}
