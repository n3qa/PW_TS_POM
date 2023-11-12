import {test, expect} from "@playwright/test";
import { StoreFront } from "../fixtures/storeFront";

test.beforeEach(async ({page}, testInfo) => {
    console.log(`Running ${testInfo.title}`);
    
    //STEP 1 Navigate to the Lidl one trust cookies page
     console.log("STEP 1: Navigate to the Lidl one trust cookies page");
    await page.goto('https://www.lidl.sk/');
});

test.only("SK - 1 - SEARCH-VIEW | SERP | Cookies | OneTrust| Accept all | " +
               "Verify SERP is presented when a valid search term is used " +
               "with combination of " +
               "accept all cookies settings", async ({
      page
       

      }) => {
     
          const lidlStoreFront = new StoreFront(page);

     //STEP 2:
     // CLick on Accept all cookies oneTrust cookie settings button
     console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
     await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn();

     //STEP 3:
     // The user submits a basic search on the home page
     console.log("STEP 3: The user submits a basic search on the home page");
     await lidlStoreFront.searchBar().submitSearchQuery("*");

     //STEP 4:
     // The user verifies that SRP page properties are presented as per requirements
     console.log("STEP 4: The user verifies that SRP page properties are presented as per requirements")
    

     await lidlStoreFront.SKsrp().takePageScreenShot('cookies/oneTrust/SK_SERP_Cookies_OneTrust_AcceptAll_CS');
     //await page.screenshot({path: 'screenshots/cookies/oneTrust/SK_SERP_Cookies_OneTrust_AcceptAll_CS'})
     //Step


     // await SKsearchResultsPage.validateSearchResultsPageIsCorrect();

});


test("SK - 2 - SEARCH-VIEW | SERP | Cookies | OneTrust| " +
               "Verify SERP is presented when a valid search term is used " +
               "with combination of " +
               "accept all cookies settings", async ({
      page
       

      }) => {
     
          const lidlStoreFront = new StoreFront(page);

     //STEP 2:
     //CLick on Accept Allcookies oneTrust cookie settings button
     console.log("CLick on Accept Allcookies oneTrust cookie settings button");
     await lidlStoreFront.SKCookies().clickOn_Marketing_btn();

     //STEP 3: The user submits a basic search on the home page
     console.log("STEP 3: The user submits a basic search on the home page");
     await lidlStoreFront.searchBar().submitSearchQuery("*");

     // await lidlCookiesPage.SK_clickOn_AcceptAllCS_btn();
    
     // //STEP 3: The user submits a basic search on the home page
     // console.log("STEP 3: The user submits a basic search on the home page");
     // await lidlSearchBarPage.submitSearchQuery('ad');

     // //Step 4: The user verivies that SRP page properties are presented as per requirments
     // await SKsearchResultsPage.validateSearchResultsPageIsCorrect();

});
