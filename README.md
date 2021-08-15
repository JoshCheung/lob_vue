# Lob take home Project #

## Getting started ##
# Goal: 
```txt
Create a postcard form that has autocomplete when searching for addresses.
Users will be able to click on an address in the search result and populate the input.
```
#### Note:
- All inputs are functional, but 'To' and 'From' autocomplete are the main functions to showcase
- The submit button is for testing the endpoints of creating the postcards, 
    - feel free to give it a try after selecting addreeses
- The side navigation is purely cosmetic

# Demo Locally: 

Change directory into the project: 
```bash
$ cd lob_vue
```
Install all the dependencies and packages
```bash
$ npm install
```
run the server, which should run on `http://localhost:8080/`
```bash
$ npm run serve
```
# Demo online: 
You can demo the take home project through this site: https://joshcheung.github.io/lob_vue/

# Resources and frameworks used:
- Vue.js
- lob-ui library 
-- https://github.com/lob/ui-components
-- https://ui-components.lob.com/

# Running unit test

```bash
    npm run test:unit
```

# Running Selenium test

Install the chromedriver from: https://chromedriver.chromium.org/
- Unzip the file and place the file into your Path: 
eg.
```bash
    $ cat /etc/paths

        /usr/local/bin
        /usr/bin
        /bin
        /usr/sbin
        /sbin

    # path: /usr/local/bin
    $ ls /usr/local/bin
        chromedriver lib          node         npm          npx          vue          webpack
```
- Once the chromedriver is in the path, ensure that package.json includes:
```bash
    "dependencies": {
        "chai": "^4.3.4",
        "selenium-webdriver": "^4.0.0-beta.4",
    }

```
- run `npm install` to ensure dependencies are installed

- Run the selenium test:

```bash
$ node tests/suggestionInputTest.js
```









