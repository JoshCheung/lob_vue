const {Builder, By, Key, util, until} = require("selenium-webdriver");

async function example() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:8080");
    // wait for addresses to load
    new Promise(resolve => setTimeout(function() {
        driver.findElement(By.className("to text-input-styling")).findElement(By.id("to")).sendKeys("Adriana");
    }, 2000));

    let ele = await driver.wait(until.elementLocated(By.id('dropdown')),3000);
    
    ele.findElement(By.className("address")).click();
    

    // await driver.findElement(By.className("post-card-input-container")).findElement(By.id('dropdown')).findElement(By.className("address")).click();


    
}


example();

