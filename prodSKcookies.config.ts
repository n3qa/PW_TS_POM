import { defineConfig, devices } from '@playwright/test';
import type { PlaywrightTestOptions } from '@playwright/test';
require('dotenv').config();

export default defineConfig <PlaywrightTestOptions> ({
  timeout: 40000,
  globalTimeout: 60000,

  expect: {
    timeout: 9000
  },

  reporter: [
    ['html', {outputFile: 'test-results/html/htmlReporter.html'}],
    ['json', {outputFile: 'test-results/json/jsonReporter.html'}],
    ['junit', {outputFile: 'test-results/junit/junitReporter.html'}],
    ['allure-playwright', {outputFile: 'test-results/junit/AllureReport.html'}]
  ],

  // testDir: './tests',
  fullyParallel: true,
  // forbidOnly: !!process.env.CI,
  // retries: process.env.CI ? 2 : 1,
  // workers: process.env.CI ? 1 : undefined,

  use: {
    headless: false,
    viewport: { width: 1920, height: 949 },

    baseURL: 'https://www.lidl.sk',
    trace: 'on-first-retry',
    
    actionTimeout: 20000,
    navigationTimeout: 25000,
    
    
    video: {
      mode: 'on-first-retry',
      size: {width: 1920, height: 949}
    }
  },

 projects: [
    {
      name: 'chromium',
      testMatch: 'A2.spec.ts',
      use: {...devices['Desktop Chrome'],
      // baseURL:'https://www.lidl.sk/' ,
      },
    },
    
  ],

});