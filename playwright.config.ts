import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
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
    trace: 'on-first-retry',
    actionTimeout: 6000,
    navigationTimeout: 7777,
    // video: 'on-first-retry'
    video: 'retain-on-failure'
  },

  projects: [
      {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ],
});
