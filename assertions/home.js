module.exports = {
  confirm: function (homePage) {
    homePage
      .assert.visible('@govuk')
      .assert.visible('@govukLink')
      .assert.visible('@betaBanner')
      .assert.visible('@feedbackLink')
      .assert.title('Sign up for flood warnings - GOV.UK')
      .assert.containsText('@header', 'Sign up for flood warnings')
      .assert.containsText('@signupText', 'Get flood warnings')
      .assert.containsText('@signupLink', 'Sign up for flood warnings')
      .assert.containsText('@updateText', 'Update your details or cancel warnings')
      .assert.containsText('@updateLink', 'Sign in to your flood warnings account')
      .assert.visible('@privacyLink')
      .assert.visible('@cookiesLink')
      .assert.containsText('@oglStatement', 'All content is available under the Open Government Licence v3.0, except where otherwise stated')
      .assert.visible('@oglLink')
      .assert.visible('@copyright')
      .assert.visible('@copyrightLink')
  }
}
