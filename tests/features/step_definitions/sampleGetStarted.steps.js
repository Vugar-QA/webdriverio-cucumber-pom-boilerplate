const { Then, When, Given } = require('cucumber');

const homePage = require('../../pages/sampleHome.page.js');
const home = new homePage();


Given(/^I open "([^"]*)" the website$/, (url) => {
    home.openHomePage(url);
});

Given(/^I login with valid credentials$/, () => {
    home.login();
});

When(/^I register an account$/, () => {
    home.register();
});

