# logispin_assesment_solutions

This repository will contain the solution of logispin assessment

Before trying to run the test cases you need to setup your envirment first
Steps to do so:

***Note: you must be running as administrator since packages will be installed globably

1)Install nodejs latest version

2)Go to the root folder of the project

3)Run "npm install"

4)Run "npm run wdio" to run all the tests


## run all the tests

npx wdio run ./wdio.conf.js

## run a specific test suite

npx wdio wdio.conf.js --mochaOpts.grep "Validate Split Configuration"

## define suites in your config file and run just the test files defined by in a suite:

npx wdio run ./wdio.conf.js --suite mainPage

## run a specific Envirment (prod| stage | qa)

ENV="stage" npx wdio run ./wdio.conf.js --mochaOpts.grep "Validate Split Configuration"
