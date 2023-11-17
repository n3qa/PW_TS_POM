import { test ,request, expect } from '@playwright/test';

test("CHECKs",
          async ({ page }) => {

     //STEP 2: 
     //CLick on Accept all cookies oneTrust cookie settings button
     await page.goto('/')
    
    });

test("Cookie injected",
     async ({ page }) => {

//STEP 2: 
//CLick on Accept all cookies oneTrust cookie settings button
await page.goto('/')

});