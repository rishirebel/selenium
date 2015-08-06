//This is simple test case in Node js using Selenium Webdriver Js for Login Page test
//We are using assertions her for simply making a comparison test
//You can run run this test test case using mocha js or by directly using node terminal/cmd 
var assert = require('assert');
var fs = require('fs');
var test = require('selenium-webdriver/testing');
var webdriver = require('selenium-webdriver');

test.describe('Facebook Login', function () {
//You can set your own timeout depending upon your test response time
	this.timeout(50000);
	test.it('User should login successfully on Facebook', function () {
		var driver = new webdriver.Builder ().withCapabilities (webdriver.Capabilities.chrome ()).build ();
		driver.get('http://www.facebook.com');
		driver.findElement (webdriver.By.name ('email')).sendKeys ('YOUR LOGIN ID');
		driver.findElement (webdriver.By.name ('pass')).sendKeys ('YOUR LOGIN PASSWORD');
		driver.findElement (webdriver.By.id ('loginbutton')).click();
		driver.wait ( function () {
			return driver.getTitle().then(function(title) {
				assert.equal(title,'Facebook','Not Returning the right title');
				return title == 'Facebook';
			});
		});
		driver.quit();
	});
});
