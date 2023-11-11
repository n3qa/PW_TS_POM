import {expect} from "@playwright/test";
import {test} from "../fixtures/lidl";

test.beforeEach(async ({page}, testInfo) => {
    console.log(`Running ${testInfo.title}`);
    
    //STEP 1 Navigate to the Lidl one trust cookies page
     console.log("STEP 1: Navigate to the Lidl one trust cookies page");
    await page.goto('https://www.lidl.sk/');
});

test.only("SK - 1 - SEARCH-VIEW | SERP | Cookies | OneTrust| " +
               "Verify SERP is presented when a valid search term is used " +
               "with combination of " +
               "accept all cookies settings", async ({
      page,
      lidlCookiesPage,
      lidlSearchBarPage,
      lidlSearchResultsPage,
      SKsearchResultsPage

      }) => {

     //STEP 2:
     //CLick on Accept Allcookies oneTrust cookie settings button
     console.log("CLick on Accept Allcookies oneTrust cookie settings button");
     await lidlCookiesPage.SK_clickOn_AcceptAllCS_btn();
    
     //STEP 3: The user submits a basic search on the home page
     console.log("STEP 3: The user submits a basic search on the home page");
     await lidlSearchBarPage.submitSearchQuery('ad');
     
     //Step 4: The user verivies that SRP page properties are presented as per requirments
     await SKsearchResultsPage.validateSearchResultsPageIsCorrect();

});

test("SK - 2 - SEARCH-VIEW | SERP | Cookies | OneTrust| " +
    "Verify SERP is presented when a valid search term is used " +
    "with combination of accept all cookies settings", async ({
          page,
          lidlCookiesPage,
          lidlSearchBarPage,
          lidlSearchResultsPage

      }) => {

     console.log("TEST CASE NAME: ");
     console.log("SK - 2 - SEARCH-VIEW | SERP | Cookies | OneTrust| " +
     "Verify SERP is presented when a valid search term is used " +
     "with combination of accept all cookies settings");

    
    await lidlCookiesPage.SK_clickOn_AcceptAllCS_btn();
    await lidlSearchBarPage.submitSearchQuery('ad');
});

test("SK - 3 - SEARCH-VIEW | SERP | Cookies | OneTrust| " +
    "Verify SERP is presented when a valid search term is used " +
    "with combination of accept all cookies settings", async ({
          page,
          lidlCookiesPage,
          lidlSearchBarPage,
          lidlSearchResultsPage

      }) => {

    await lidlCookiesPage.SK_clickOn_AcceptAllCS_btn();
    await lidlSearchBarPage.submitSearchQuery('ad');
});


test("SK - 4 - SEARCH-VIEW | SERP | Cookies | OneTrust| " +
    "Verify SERP is presented when a valid search term is used " +
    "with combination of accept all cookies settings", async ({
          page,
          lidlCookiesPage,
          lidlSearchBarPage,
          lidlSearchResultsPage

      }) => {


    await lidlCookiesPage.SK_clickOn_AcceptAllCS_btn();
    await lidlSearchBarPage.submitSearchQuery('ad');
});


test("SK - 5 - SEARCH-VIEW | SERP | Cookies | OneTrust| " +
    "Verify SERP is presented when a valid search term is used " +
    "with combination of accept all cookies settings", async ({
      page,
      lidlCookiesPage,
      lidlSearchBarPage,
      lidlSearchResultsPage

  }) => {

    await lidlCookiesPage.SK_clickOn_AcceptAllCS_btn();
    await lidlSearchBarPage.submitSearchQuery('ad');
});


test("SK - 6 - SEARCH-VIEW | SERP | Cookies | OneTrust| " +
    "Verify SERP is presented when a valid search term is used " +
    "with combination of accept all cookies settings", async ({
      page,
      lidlCookiesPage,
      lidlSearchBarPage,
      lidlSearchResultsPage

  }) => {

    await lidlCookiesPage.SK_clickOn_AcceptAllCS_btn();
    await lidlSearchBarPage.submitSearchQuery('ad');
});

test("SK - 7 - SEARCH-VIEW | SERP | Cookies | OneTrust| " +
    "Verify SERP is presented when a valid search term is used " +
    "with combination of accept all cookies settings", async ({
      page,
      lidlCookiesPage,
      lidlSearchBarPage,
      lidlSearchResultsPage

  }) => {

    await lidlCookiesPage.SK_clickOn_AcceptAllCS_btn();
    await lidlSearchBarPage.submitSearchQuery('ad');
});


test("SK - 8 - SEARCH-VIEW | SERP | Cookies | OneTrust| " +
    "Verify SERP is presented when a valid search term is used " +
    "with combination of accept all cookies settings", async ({
      page,
      lidlCookiesPage,
      lidlSearchBarPage,
      lidlSearchResultsPage

  }) => {


    await lidlCookiesPage.SK_clickOn_AcceptAllCS_btn();
    await lidlSearchBarPage.submitSearchQuery('ad');
});


test("SK - 9 - SEARCH-VIEW | SERP | Cookies | OneTrust| " +
    "Verify SERP is presented when a valid search term is used " +
    "with combination of accept all cookies settings", async ({
      page,
      lidlCookiesPage,
      lidlSearchBarPage,
      lidlSearchResultsPage

  }) => {

    await lidlCookiesPage.SK_clickOn_AcceptAllCS_btn();
    await lidlSearchBarPage.submitSearchQuery('ad');
});

test("SK - 10 - SEARCH-VIEW | SERP | Cookies | OneTrust| " +
    "Verify SERP is presented when a valid search term is used " +
    "with combination of accept all cookies settings", async ({
      page,
      lidlCookiesPage,
      lidlSearchBarPage,
      lidlSearchResultsPage

  }) => {


    await lidlCookiesPage.SK_clickOn_AcceptAllCS_btn();
    await lidlSearchBarPage.submitSearchQuery('ad');
});

test("SK - 11 - SEARCH-VIEW | SERP | Cookies | OneTrust| " +
               "Verify SERP is presented when a valid search term is used " +
               "with combination of accept all cookies settings", async ({
      page,
      lidlCookiesPage,
      lidlSearchBarPage,
      lidlSearchResultsPage

      }) => {

    await lidlCookiesPage.SK_clickOn_AcceptAllCS_btn();
    await lidlSearchBarPage.submitSearchQuery('ad');
});

test("SK - 12 - SEARCH-VIEW | SERP | Cookies | OneTrust| " +
    "Verify SERP is presented when a valid search term is used " +
    "with combination of accept all cookies settings", async ({
          page,
          lidlCookiesPage,
          lidlSearchBarPage,
          lidlSearchResultsPage

      }) => {


    await lidlCookiesPage.SK_clickOn_AcceptAllCS_btn();
    await lidlSearchBarPage.submitSearchQuery('ad');
});

test("SK - 13 - SEARCH-VIEW | SERP | Cookies | OneTrust| " +
    "Verify SERP is presented when a valid search term is used " +
    "with combination of accept all cookies settings", async ({
          page,
          lidlCookiesPage,
          lidlSearchBarPage,
          lidlSearchResultsPage

      }) => {

    await lidlCookiesPage.SK_clickOn_AcceptAllCS_btn();
    await lidlSearchBarPage.submitSearchQuery('ad');
});


test("SK - 14 - SEARCH-VIEW | SERP | Cookies | OneTrust| " +
    "Verify SERP is presented when a valid search term is used " +
    "with combination of accept all cookies settings", async ({
          page,
          lidlCookiesPage,
          lidlSearchBarPage,
          lidlSearchResultsPage

      }) => {

    await lidlCookiesPage.SK_clickOn_AcceptAllCS_btn();
    await lidlSearchBarPage.submitSearchQuery('ad');
});


test("SK - 15 - SEARCH-VIEW | SERP | Cookies | OneTrust| " +
    "Verify SERP is presented when a valid search term is used " +
    "with combination of accept all cookies settings", async ({
      page,
      lidlCookiesPage,
      lidlSearchBarPage,
      lidlSearchResultsPage

  }) => {

    await lidlCookiesPage.SK_clickOn_AcceptAllCS_btn();
    await lidlSearchBarPage.submitSearchQuery('ad');
});


test("SK - 16 - SEARCH-VIEW | SERP | Cookies | OneTrust| " +
    "Verify SERP is presented when a valid search term is used " +
    "with combination of accept all cookies settings", async ({
      page,
      lidlCookiesPage,
      lidlSearchBarPage,
      lidlSearchResultsPage

  }) => {

    await lidlCookiesPage.SK_clickOn_AcceptAllCS_btn();
    await lidlSearchBarPage.submitSearchQuery('ad');
});


test("SK - 17 - SEARCH-VIEW | SERP | Cookies | OneTrust| " +
    "Verify SERP is presented when a valid search term is used " +
    "with combination of accept all cookies settings", async ({
      page,
      lidlCookiesPage,
      lidlSearchBarPage,
      lidlSearchResultsPage

  }) => {

    await lidlCookiesPage.SK_clickOn_AcceptAllCS_btn();
    await lidlSearchBarPage.submitSearchQuery('ad');
});


test("SK - 18 - SEARCH-VIEW | SERP | Cookies | OneTrust| " +
    "Verify SERP is presented when a valid search term is used " +
    "with combination of accept all cookies settings", async ({
      page,
      lidlCookiesPage,
      lidlSearchBarPage,
      lidlSearchResultsPage

  }) => {

    await lidlCookiesPage.SK_clickOn_AcceptAllCS_btn();
    await lidlSearchBarPage.submitSearchQuery('ad');
});


test("SK - 19 - SEARCH-VIEW | SERP | Cookies | OneTrust| " +
    "Verify SERP is presented when a valid search term is used " +
    "with combination of accept all cookies settings", async ({
      page,
      lidlCookiesPage,
      lidlSearchBarPage,
      lidlSearchResultsPage

  }) => {

    await lidlCookiesPage.SK_clickOn_AcceptAllCS_btn();
    await lidlSearchBarPage.submitSearchQuery('ad');
});


test("SK - 20 - SEARCH-VIEW | SERP | Cookies | OneTrust| " +
    "Verify SERP is presented when a valid search term is used " +
    "with combination of accept all cookies settings", async ({
      page,
      lidlCookiesPage,
      lidlSearchBarPage,
      lidlSearchResultsPage

  }) => {

    await lidlCookiesPage.SK_clickOn_AcceptAllCS_btn();
    await lidlSearchBarPage.submitSearchQuery('ad');
});


test("SK - 21 - SEARCH-VIEW | SERP | Cookies | OneTrust| " +
    "Verify SERP is presented when a valid search term is used " +
    "with combination of accept all cookies settings", async ({
      page,
      lidlCookiesPage,
      lidlSearchBarPage,
      lidlSearchResultsPage

  }) => {

    await lidlCookiesPage.SK_clickOn_AcceptAllCS_btn();
    await lidlSearchBarPage.submitSearchQuery('ad');
});

test("SK - 22 - SEARCH-VIEW | SERP | Cookies | OneTrust| " +
    "Verify SERP is presented when a valid search term is used " +
    "with combination of accept all cookies settings", async ({
      page,
      lidlCookiesPage,
      lidlSearchBarPage,
      lidlSearchResultsPage

  }) => {

    await lidlCookiesPage.SK_clickOn_AcceptAllCS_btn();
    await lidlSearchBarPage.submitSearchQuery('ad');
});



