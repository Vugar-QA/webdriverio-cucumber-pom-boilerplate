class homeLocators {
  constructor() {
    this.signupLink = '#signupLink';
    this.usernameTextbox = '#username';
    this.emailTextbox = '#email';
    this.passwordTextbox = '#password';
    this.confirmpasswordTextbox = '#cPassword';
    this.registerButton = '#registerButton';
    this.successMessage = '#successMessage'
    this.loginLink = '#loginLink';
    this.loginButton = '#loginButton';
    this.addPostLink = '#addPostLink';
    this.addArticleLink = '#addPost';
    this.titleTextbox = '#title';
    this.slugTextbox = '#slug';
    this.summaryTextbox = '#summary';
    this.keywordsTextbox = '#keywords';
    this.categoryDropdown = '/html/body/div[1]/div[3]/form/div/div[1]/div/div[2]/div[5]/div';
    this.categoryDropdownOption = '/html/body/div[1]/div[3]/form/div/div[1]/div/div[2]/div[5]/div/ul/li[2]'
    this.subCategoryDropdown = '/html/body/div[1]/div[3]/form/div/div[1]/div/div[2]/div[6]/div';
    this.subCategoryDropdownOption = '/html/body/div[1]/div[3]/form/div/div[1]/div/div[2]/div[6]/div/ul/li[2]'
    this.contentTextarea = '#tinymce';
    this.publishButton = '#publishButton';
    this.viewSiteButton = '#viewSiteButton';
    this.usersLinkToggle = '//span[text()="Users"]';
    this.allUserslink = '//span[text() = "All Users"]';
    this.firstUserCheckbox = '(//input[@name="ids"])[1]';
    this.bulkActionsSelectDropdown = '/html/body/div/div[3]/div[2]/div[1]/div/div';
    this.confirmUserEmailOption = '//li[@data-value = "confirm-user-email"]';
    this.applyButton = '#applyChanges';
    


    




  }
}

module.exports = homeLocators;
