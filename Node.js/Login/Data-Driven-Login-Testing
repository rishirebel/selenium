var assert = require('assert');
var fs = require('fs');
var test = require('selenium-webdriver/testing');
var webdriver = require('selenium-webdriver');
//Here we are using Knex.js and MySQL
//You can install knex from https://www.npmjs.com/package/knex or simple type command "npm install knex" in your npm terminal/cmd
//You can install MySQL from https://www.npmjs.com/package/mysql or simply type command "npm install mysql" in your npm terminal/cmd
var knex = require('knex')({
  client: 'mysql',
  connection: {
  //For making the connection in your local matchine on default connection port of MySQL
    host:'localhost',
    user:'root',
    password:'',
    //For selecting the database
    database:'my_db'
  }
});

test.describe('Facebook Login', function () {
	this.timeout(50000);
	test.it('User Rishikesh Chandra should login successfully on Facebook', function () {
		var driver = new webdriver.Builder ().withCapabilities (webdriver.Capabilities.chrome ()).build ();
		driver.get('http://www.facebook.com');
		//We are sending a query in knex format for sql which fetches login_id and login_pass from mysql database 
		driver.findElement (webdriver.By.name ('email')).sendKeys (knex.select('login_id').from('login').map(function(row){return row.login_id;}));
		driver.findElement (webdriver.By.name ('pass')).sendKeys (knex.select('login_pass').from('login').map(function(row){return row.login_pass;}));
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

