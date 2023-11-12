import { PlaywrightTestOptions, test as base } from '@playwright/test'


/*
import { defineConfig } from '@playwright/test';
export default defineConfig({
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
  },
});

*/
export type LidlConfigurator = {
    globalQAurlSK: string
    globalPRODurlSK: string
} 

export const test = base.extend<PlaywrightTestOptions> ({
    // Set up global var for country: 
   
    // SK    => 'https://qa.lidl.sk/', 'https://www.lidl.sk/'
    globalQAur: ['',{option: true}],
    globalPRODur: ['',{option: true}],
 

})