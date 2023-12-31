import { defineConfig, devices } from '@playwright/test';
import type { PlaywrightTestOptions } from '@playwright/test';
require('dotenv').config();

export default defineConfig <PlaywrightTestOptions> ({
  timeout: 40000,
  globalTimeout: 60000,

  expect: {
    timeout: 10000
  },
 
  testDir: './tests',
 
  reporter: [
    ['html', {outputFile: 'test-results/html/htmlReporter.html'}],
    ['json', {outputFile: 'test-results/json/jsonReporter.html'}],
    ['junit', {outputFile: 'test-results/junit/junitReporter.html'}],
    ['allure-playwright', {outputFile: 'test-results/junit/AllureReport.html'}]
  ],

  use: {
    headless: true,
    viewport: { width: 1920, height: 949 },

    baseURL: process.env.QA_SK === '1' ? 'https://qa.lidl.sk'
    : process.env.PROD ==='1' ? 'https://www.lidl.sk' 
    : 'https://qa.lidl.sk/',
    trace: 'on-first-retry',
   
    //INCREASE timeouts for headless node CI/CD pipes
   
    actionTimeout: 600000,
    navigationTimeout: 800000,
    // testIdAttribute: 'data-testselector',
    video: {
      mode: 'on-first-retry',
      size: {width: 1920, height: 949}
    }
     
   
  },

 projects: [
    {
      name: 'chrome',
      use: {...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'sk_qa_cookies',
    //   use: {...devices['Desktop Chrome'],
    //   baseURL: 'https://www.lidl.sk/'
    // },
  
     
  ],

});