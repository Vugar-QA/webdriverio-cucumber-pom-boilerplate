const { Then, When, Given } = require('cucumber');

const homePage = require('../../pages/sampleHome.page.js');
const home = new homePage();


Given(/^I open "([^"]*)" the website$/, (url) => {
    home.openHomePage(url);
});

Given(/^I login as user with valid credentials$/, () => {
    home.loginAsUser();
});

Given(/^I login as admin with valid credentials$/, () => {
    home.loginAsAdmin();
});

When(/^I register an account$/, () => {
    home.register();
});

When(/^I add a new post$/, () => {
    home.addPost();
});

When(/^I verify a new user$/, () => {
    home.verifyNewUser();
});
