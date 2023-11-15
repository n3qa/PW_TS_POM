import { test } from "../fixtures/lidl-configurator";

test("SK - PROD - 1 - SEARCH-VIEW | SERP | Cookies | OneTrust | Accept all | "+
"Verify SERP is presented when a " +
"valid search term is used with combination of " +
"Accept all cookies settings",
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
     //4.1. Validate the title of the lidl store front page
     await lidlStoreFront.SKsrp().validate_SK_SearchResultsPageHTMTitle();

     await lidlStoreFront.SKsrp().validateSearchResultsPageIsCorrect();

      await lidlStoreFront.SKsrp().takePageScreenShot('cookies/oneTrust/SK_PROD_2_SERP_Cookies_OneTrust_AcceptAll_CS');
});

test("SK - PROD - 2 - SEARCH-VIEW | SERP | Cookies | OneTrust | Reject all | "+
    "Verify SERP is presented when a " +
    "valid search term is used with combination of " +
    "Rejection all cookies settings",
    async ({lidlStoreFront }) => {

         //STEP 2:
         // CLick on Accept all cookies oneTrust cookie settings button
         console.log("STEP 2: CLick on oneTrust reject all cookies settings button");
         await lidlStoreFront.SKCookies().clickOn_RejectAllCS_btn();

         //STEP 3:
         // The user submits a basic search on the home page
         console.log("STEP 3: The user submits a basic search on the home page");
         await lidlStoreFront.searchBar().submitSearchQuery("*");

         //STEP 4:
         // The user verifies that SRP page properties are presented as per requirements
         console.log('STEP 4: The user verifies that SRP page properties are presented as per requirements');
         //4.1. Validate the title of the lidl store front page
         await lidlStoreFront.SKsrp().validate_SK_SearchResultsPageHTMTitle();

         await lidlStoreFront.SKsrp().validateSearchResultsPageIsCorrect();

          await lidlStoreFront.SKsrp().takePageScreenShot('cookies/oneTrust/SK_PROD_2_SERP_Cookies_OneTrust_AcceptAll_CS');
    });
