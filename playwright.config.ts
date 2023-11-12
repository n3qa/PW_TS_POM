import { defineConfig, devices } from '@playwright/test';
import type { PlaywrightTestOptions } from '@playwright/test';

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
    baseURL: "www.lidl.sk",
    trace: 'on-first-retry',
    actionTimeout: 6000,
    navigationTimeout: 7777,
    // video: 'on-first-retry'
    video: 'on',
   
  },

  projects: [
    // QA SK
    {
      name: 'qa_SK_sk',
      use: { ...devices['Desktop Chrome'],
      baseURL: 'https://qa.lidl.sk/'
      }, 
    },
   
    // PROD SK 
    {
      name: 'prod_SK_sk',
      use: { ...devices['Desktop Chrome'],
      baseURL: 'https://www.lidl.sk/'
      }, 
    },

    //Broser used for the TAF
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ],
});
