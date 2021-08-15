var assert = require('chai').assert;


const {Builder, By, until} = require("selenium-webdriver");

async function suggestiveInputTest() {
    var input = "nicholas";
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://joshcheung.github.io/lob_vue/");
    // await driver.get("http://localhost:8080/lob_vue/");
    // wait for addresses to load
    new Promise(() => setTimeout(function() {
        driver.findElement(By.id("to")).sendKeys(input);
    }, 2000));

    let addressList = await driver.wait(until.elementLocated(By.id("dropdown")),3000);
    
    addressList.findElement(By.className("address")).click();
    
    let address = await driver.wait(until.elementLocated(By.className("address selected")), 3000);

    var selectedAddress = await address.findElement(By.className("text-boxes")).getText();
    await address.findElement(By.className("button")).findElement(By.id("cancel")).click();

    setTimeout(function () {
        driver.quit()
    }, 2000);
    console.log(selectedAddress.toLowerCase().includes(input.toLowerCase()));
    console.log("input: \n" + input.toLowerCase());
    console.log("selected: \n" + selectedAddress.toLowerCase());
    assert.equal(true, selectedAddress.toLowerCase().includes(input.toLowerCase()));
}


async function testSendingPostCard() {
    var inputTo = "Milo";
    var inputFrom = "Enoki";
    let driver = await new Builder().forBrowser("chrome").build();
    // await driver.get("https://joshcheung.github.io/lob_vue/");
    await driver.get("http://localhost:8080/lob_vue/");
    // wait for addresses to load
    new Promise(() => setTimeout(function() {
        driver.findElement(By.id("to")).sendKeys(inputTo);
    }, 2000));

    let addressList = await driver.wait(until.elementLocated(By.id("dropdown")),3000);
    
    addressList.findElement(By.className("address")).click();
    
    let address = await driver.wait(until.elementLocated(By.className("address selected")), 3000);

    new Promise(() => setTimeout(function() {
        driver.findElement(By.id("from")).sendKeys(inputFrom);
    }, 2000));

    addressList = await driver.wait(until.elementLocated(By.id("dropdown")),3000);
    
    addressList.findElement(By.className("address")).click();
    
    address = await driver.wait(until.elementLocated(By.className("address selected")), 3000);

    // var selectedAddress = await address.findElement(By.className("text-boxes")).getText();
    // await address.findElement(By.className("button")).findElement(By.id("cancel")).click();
    driver.findElement(By.id("sendPostCard")).click();
    var success = await driver.wait(until.elementLocated(By.id("success-alert")), 3000);
    resultText = await success.getText();

    assert.equal("Postcard was successfully created!", resultText);

    setTimeout(function () {
        driver.quit()
    }, 5000);
   


}

// suggestiveInputTest();
testSendingPostCard();

