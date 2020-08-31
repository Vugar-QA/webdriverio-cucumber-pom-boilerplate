const NativePage = require('./native.page.js');
const webdriverIOHomePageData = require('../files/testData/sampleHome.data.js');
require('dotenv').config()
var faker = require('faker');

class sampleHomePage extends NativePage {

  

  get homePageElement() {
    return this.getPage('sampleHome.locators');
  }

  openHomePage(url) {
    browser.url(url);
    $(this.homePageElement.signupLink).waitForDisplayed();
  }

  loginAsUser() {
    $(this.homePageElement.loginLink).click();
    $(this.homePageElement.loginButton).waitForDisplayed();
    browser.pause(3000);
    $(this.homePageElement.emailTextbox).setValue('vugar.omarov@gmail.com');
    $(this.homePageElement.passwordTextbox).setValue('qwerty');
    $(this.homePageElement.loginButton).click();
    // $(this.homePageElement.successMessage).waitForDisplayed();

  }

  loginAsAdmin() {
    $(this.homePageElement.loginLink).click();
    $(this.homePageElement.loginButton).waitForDisplayed();
    browser.pause(3000);
    $(this.homePageElement.emailTextbox).setValue('y.ten93@gmail.com');
    $(this.homePageElement.passwordTextbox).setValue('qwerty');
    $(this.homePageElement.loginButton).click();
    // $(this.homePageElement.successMessage).waitForDisplayed();

  }
  
  register() {
    var randomEmail = faker.internet.email();
    var randomPassword = faker.internet.password();
    var randomUsername = faker.internet.userName();
    $(this.homePageElement.signupLink).click();
    $(this.homePageElement.registerButton).waitForDisplayed();
    browser.pause(3000);
    $(this.homePageElement.usernameTextbox).setValue(randomUsername);
    $(this.homePageElement.emailTextbox).setValue(randomEmail);
    $(this.homePageElement.passwordTextbox).setValue(randomPassword);
    $(this.homePageElement.confirmpasswordTextbox).setValue(randomPassword);
    $(this.homePageElement.registerButton).click();
    $(this.homePageElement.successMessage).waitForDisplayed();
    console.log('generated email - ' + randomEmail);
    console.log('generated password - ' + randomPassword);
    console.log('generated username - ' + randomUsername);
    
  }
  addPost() {
    browser.pause(3000);
    $(this.homePageElement.addPostLink).click();
    $(this.homePageElement.addArticleLink).waitForDisplayed();
    $(this.homePageElement.addArticleLink).click();
    $(this.homePageElement.titleTextbox).waitForDisplayed();
    $(this.homePageElement.titleTextbox).setValue('test');
    $(this.homePageElement.slugTextbox).setValue('test');
    $(this.homePageElement.summaryTextbox).setValue('test');
    $(this.homePageElement.titleTextbox).setValue('test');
    $(this.homePageElement.keywordsTextbox).setValue('test');
    browser.pause(3000);
    $(this.homePageElement.categoryDropdown).click();
    browser.pause(3000);
    $(this.homePageElement.categoryDropdownOption).click();
    browser.pause(3000);
    $(this.homePageElement.subCategoryDropdown).click();
    browser.pause(3000);
    $(this.homePageElement.subCategoryDropdownOption).click();
    let frame = $('#body_ifr')
    browser.switchToFrame(frame);
    browser.pause(3000);
    $(this.homePageElement.contentTextarea).setValue('test');
    browser.switchToParentFrame();
    browser.pause(3000);
    $(this.homePageElement.viewSiteButton).scrollIntoView();
    browser.pause(3000);
    $(this.homePageElement.publishButton).click();

  }
verifyNewUser() {
  $(this.homePageElement.usersLinkToggle).click();
  $(this.homePageElement.allUserslink).waitForDisplayed();
  $(this.homePageElement.allUserslink).click();
  $(this.homePageElement.firstUserCheckbox).waitForDisplayed();
  $(this.homePageElement.firstUserCheckbox).click();
  $(this.homePageElement.bulkActionsSelectDropdown).click();
  $(this.homePageElement.confirmUserEmailOption).click();
  $(this.homePageElement.applyButton).click();
  

}




}

module.exports = sampleHomePage;
