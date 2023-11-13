import { defineConfig, devices } from '@playwright/test';
import type { PlaywrightTestOptions } from '@playwright/test';
require('dotenv').config();

export default defineConfig <PlaywrightTestOptions> ({
  timeout: 30000,
  globalTimeout: 50000,

  expect: {
    timeout: 7777
  },

  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    // baseURL: "www.lidl.sk",
    trace: 'on-first-retry',
    actionTimeout: 6000,
    navigationTimeout: 7777,
    // video: 'on-first-retry'
    video: 'on',
   
  },

 projects: [
    {
      name: 'chromium',
      use: {...devices['Desktop Chrome'] },
    }
    // ,

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ..devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});