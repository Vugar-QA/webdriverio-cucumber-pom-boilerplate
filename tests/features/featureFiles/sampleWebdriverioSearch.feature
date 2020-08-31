Feature: Validate the Search functionality of webdriverIO Site

  @Scenario
  Scenario: As a user, I should get relevant Search Results on searching for valid keywords from the webdriverIO Homepage's Search Bar

    Given I open "http://qatutorials.net:3000/" the website
    And I login as admin with valid credentials
    When I verify a new user

    