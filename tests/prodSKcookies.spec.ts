import { test } from "../fixtures/lidl-configurator";

 
test("A2 - SK - 1 - SEARCH-VIEW | SERP | Cookies | OneTrust| Accept all | " +
               "Verify SERP is presented when a valid search term is used " +
               "with combination of " +
               "accept all cookies settings", 
               async ({lidlStoreFront }) => {
                

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
     console.log('STEP 4: The user verifies that SRP page properties are presented as per requirements');

     await lidlStoreFront.SKsrp().takePageScreenShot('cookies/oneTrust/TC_1/SK_SERP_Cookies_OneTrust_AcceptAll_CS');
     //await page.screenshot({path: 'screenshots/cookies/oneTrust/SK_SERP_Cookies_OneTrust_AcceptAll_CS'})
     //Step


     // await SKsearchResultsPage.validateSearchResultsPageIsCorrect();

});


test("A2 - SK - 2 - SEARCH-VIEW | SERP | Cookies | OneTrust| Accept all | " +
               "Verify SERP is presented when a valid search term is used " +
               "with combination of " +
               "accept all cookies settings", async ({lidlStoreFront }) => {
     
 

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
     console.log("STEP 4: The user verifies that SRP page properties are presented as per requirements");

     await lidlStoreFront.
             SKsrp().
            takePageScreenShot('cookies/oneTrust/TC_1/SK_SERP_Cookies_OneTrust_AcceptAll_CS'); 

});


test("A2 - SK - 3 - SEARCH-VIEW | SERP | Cookies | OneTrust| Accept all | " +
               "Verify SERP is presented when a valid search term is used " +
               "with combination of " +
               "accept all cookies settings", async ({lidlStoreFront }) => {
     
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
    

     await lidlStoreFront.SKsrp().takePageScreenShot('cookies/oneTrust/TC_1/SK_SERP_Cookies_OneTrust_AcceptAll_CS');
     //await page.screenshot({path: 'screenshots/cookies/oneTrust/SK_SERP_Cookies_OneTrust_AcceptAll_CS'})
     //Step


     // await SKsearchResultsPage.validateSearchResultsPageIsCorrect();

});


 