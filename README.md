# logispin_assesment_solutions

This repository will contain the solution of logispin assessment

Before trying to run the test cases you need to setup your envirment first
Steps to do so:
-------Note: you must be running as administrator since packages will be installed globably--------
1)Install nodejs latest version
2)Go to the root folder of the project
3)Run npm install -g
4)Go to the root of the project and run: npm init wdio .

# ---> Comment out the headless cinfiguration to run tests against google chrome healdess option

browserName: 'chrome',
'goog:chromeOptions': {
args: [
'--no-sandbox',
'--disable-dev-shm-usage',
'--disable-infobars',
//'--headless',
'--disable-gpu',
'--window-size=1440,735'
],
}

# run all the tests

npx wdio run ./wdio.conf.js

# run a specific test suite

npx wdio wdio.conf.js --mochaOpts.grep "Validate Split Configuration"

## define suites in your config file and run just the test files defined by in a suite:

npx wdio run ./wdio.conf.ts --suite mainPage

## run a specific Envirment (prod| stage | qa)

ENV="stage" npx wdio run ./wdio.conf.js --mochaOpts.grep "Validate Split Configuration"
