import { test as base } from '@playwright/test';
import { StoreFront } from "../fixtures/storeFront";

export type TestOptions = {
  globalQAurl: string;
  globalPRODurl:string;
  startingNavigationSK: string;
  lidlStoreFront: StoreFront;
};

export const test = base.extend<TestOptions>({  
  globalQAurl: ['', { option: true }],
  globalPRODurl: ['', { option: true }],
  
  //Manual trigering of fixer
  // >>> needs to be declared in 
  // >> async ({page,startingNavigationSK }) => {
  // >>  const lidlStoreFront = new StoreFront(page);
  // startingNavigationSK: async({ page }, use) =>{
  //   await page.goto('/');
  //    console.log("STEP 1: Navigate to the Lidl Storefront home page");
  //    await use('');
  // }
  
   //Automated running functions trigering of fixer
   startSkWithNoCookies: async({ page }, use) =>{
     await page.goto('/');
      
     console.log("STEP 1: Navigate to the Lidl Storefront home page");
     await use('');
  },

  // const lidlStoreFront = new StoreFront(page);
  lidlStoreFront: async({ page, startSkWithNoCookies }, use) => {
  const lidlStoreFront = new StoreFront(page);
  await use (lidlStoreFront);
  }
});