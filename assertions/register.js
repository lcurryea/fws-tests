module.exports = {
  confirm: function (homePage) {
    homePage
      .assert.visible('@govuk')
      .assert.visible('@govukLink')
      .assert.visible('@betaBanner')
      .assert.visible('@feedbackLink')
      .assert.title('Are the flood warnings for a home or business?')
      .assert.containsText('@header', 'Are the flood warnings for a home or business?')
      .assert.visible('@homeButton')
      .assert.containsText('@homeButton', 'Home')
      .assert.visible('@businessButton')
      .assert.containsText('@businessButton', 'Business')
      .assert.visible('@continueButton')
      .assert.visible('@privacyLink')
      .assert.visible('@cookiesLink')
      .assert.containsText('@oglStatement', 'All content is available under the Open Government Licence v3.0, except where otherwise stated')
      .assert.visible('@oglLink')
      .assert.visible('@copyright')
      .assert.visible('@copyrightLink')
  }
}
