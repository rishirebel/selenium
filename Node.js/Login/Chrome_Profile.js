+var assert = require('assert');
+var test = require('selenium-webdriver/testing');
+var chrome = require('selenium-webdriver/chrome');
+var webdriver = require('selenium-webdriver');
+var fs = require('fs');
 
+test.describe('Facebook Login Test', function(){
+  test.it('Testing Facebook Login on Chrome', function(){
+    var options = new chrome.Options().addArguments('user-data-dir');
+    var driver = new q=webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).setChromeOptions(o).build();
+    driver.get('https://facebook.com');
+    driver.findElement (webdriver.By.name ('email')).sendKeys ('YOUR LOGIN ID');
+    driver.findElement (webdriver.By.name ('pass')).sendKeys ('YOUR LOGIN PASSWORD');
+    driver.findElement (webdriver.By.id ('loginbutton')).click();
+    driver.wait( function(){
+      return dirver.getTitle().then(function(title){
+        assert.equal(title,"Facebook",'Not returning the right title');
+        return title === 'Facebook';
+      });
+    });
+    driver.quit();
+  })
+})
