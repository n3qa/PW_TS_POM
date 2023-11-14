import { defineConfig, devices } from '@playwright/test';
import type { PlaywrightTestOptions } from '@playwright/test';
require('dotenv').config();

export default defineConfig <PlaywrightTestOptions> ({
  timeout: 40000,
  globalTimeout: 60000,

  expect: {
    timeout: 7777
  },
 
  

  // testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    headless: false,
    viewport: { width: 1920, height: 949 },

    baseURL: process.env.QA_SK === '1' ? 'https://qa.lidl.sk'
    : process.env.PROD ==='1' ? 'https://www.lidl.sk' 
    : 'https://www.lidl.sk',
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
      use: {...devices['Desktop Chrome'] },
    },
    {
      name: 'qa',
      use: {...devices['Desktop Chrome'],
      baseURL: 'https://qa.lidl.sk/'
    },
    }
     
  ],

   
});