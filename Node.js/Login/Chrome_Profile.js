/* Code By Rishikesh Chandra 
**For Automated testing on Chrome Profile
**Test cases are written in NodeJs, MochaJs and Selenium WebdriverJs
*- This test contains 
 -1 Login into Facebook page on Chrome Browser with User Profile */
//Here we are using assertions for for making simple, inside test comparisons
var assert = require('assert');
var test = require('selenium-webdriver/testing');
//We are using Chrome here so as to use Chrome options
var chrome = require('selenium-webdriver/chrome');
var webdriver = require('selenium-webdriver');
var fs = require('fs');

test.describe('Facebook Login Test', function(){
  test.it('Testing Facebook Login on Chrome', function(){
    //Here "user-data-dir" will get the Local Profile from your system
    var options = new chrome.Options().addArguments('user-data-dir');
    var driver = new q=webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).setChromeOptions(o).build();
    driver.get('https://facebook.com');
    driver.findElement (webdriver.By.name ('email')).sendKeys ('YOUR LOGIN ID');
    driver.findElement (webdriver.By.name ('pass')).sendKeys ('YOUR LOGIN PASSWORD');
    driver.findElement (webdriver.By.id ('loginbutton')).click();
    driver.wait( function(){
      return dirver.getTitle().then(function(title){
        //here assetrtion is called for making comparison tests
        assert.equal(title,"Facebook",'Not returning the right title');
        return title === 'Facebook';
      });
    });
    //This stops the webdriver operation and also quits the browser window
    driver.quit();
  })
})
