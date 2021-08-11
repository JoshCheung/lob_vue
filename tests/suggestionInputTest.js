var assert = require('chai').assert;


const {Builder, By, Key, util, until} = require("selenium-webdriver");

async function suggestiveInputTest() {
    var input = "Adriana";
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://joshcheung.github.io/lob_vue/");
    // wait for addresses to load
    new Promise(resolve => setTimeout(function() {
        driver.findElement(By.className("to text-input-styling")).findElement(By.id("to")).sendKeys(input);
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

suggestiveInputTest();

