const NativePage = require('./native.page.js');
const webdriverIOHomePageData = require('../files/testData/sampleHome.data.js');
require('dotenv').config()

class sampleHomePage extends NativePage {

  

  get homePageElement() {
    return this.getPage('sampleHome.locators');
  }

  openHomePage(url) {
    browser.url(url);
    $(this.homePageElement.signupLink).waitForDisplayed();
  }

  login() {
    $(this.homePageElement.loginLink).click();
    $(this.homePageElement.loginButton).waitForDisplayed();
    $(this.homePageElement.emailTextbox).setValue('test@test.com');
    $(this.homePageElement.passwordTextbox).setValue(12345);
    $(this.homePageElement.loginButton).click();
    $(this.homePageElement.successMessage).waitForDisplayed();

  }
  
  register() {
    $(this.homePageElement.signupLink).click();
    $(this.homePageElement.registerButton).waitForDisplayed();
    $(this.homePageElement.usernameTextbox).setValue('Vugar');
    $(this.homePageElement.emailTextbox).setValue('test@test.com');
    $(this.homePageElement.passwordTextbox).setValue(12345);
    $(this.homePageElement.confirmpasswordTextbox).setValue(12345);
    $(this.homePageElement.registerButton).click();
    $(this.homePageElement.successMessage).waitForDisplayed();
    
  }
}

module.exports = sampleHomePage;
