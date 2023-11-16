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

     await lidlStoreFront.SKsrp().validate_initial_searchResultsPage_is_correct();

      await lidlStoreFront.SKsrp().takePageScreenShot('cookies/oneTrust/SK_PROD_1_SERP_Cookies_OneTrust_AcceptAll_CS');
});

test.only("SK - PROD - 2 - SEARCH-VIEW | SERP | Cookies | OneTrust | Reject all | "+
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
         //4.1. Validate category facet initial state (expanded) presented and can be collapsed  
         console.log('Validate category facet initial state (expanded) presented and can be collapsed.')
         await lidlStoreFront.SKsrp().validate_facet_category_state_expanded();
         await lidlStoreFront.SKsrp().validate_facet_category_canBe_Collapsed();

         //4.2. Validate price facet initial state (expanded) presented and can be collapsed  
         console.log('Validate price facet initial state (expanded) presented and can be collapsed ');
         await lidlStoreFront.SKsrp().validate_facet_price_state_expanded();
         await lidlStoreFront.SKsrp().validate_facet_price_canBe_Collapsed();
        
         //4.3. Validate brand facet initial state (expanded) presented and can be collapsed  
         console.log('Validate brand facet initial state (expanded) presented and can be collapsed  ');
         await lidlStoreFront.SKsrp().validate_facet_brand_state_expanded();
         await lidlStoreFront.SKsrp().validate_facet_brand_canBe_Collapsed();
         
          //4.4. Validate color facet initial state (expanded) presented and can be collapsed  
          console.log('Validate color facet initial state (expanded) presented and can be collapsed  ');
          await lidlStoreFront.SKsrp().validate_facet_color_state_expanded();
          await lidlStoreFront.SKsrp().validate_facet_color_canBe_Collapsed();
         
          //4.5. Validate size facet initial state (expanded) presented and can be collapsed  
          console.log('Validate color facet initial state (expanded) presented and can be collapsed  ');
          await lidlStoreFront.SKsrp().validate_facet_brand_state_expanded();
          await lidlStoreFront.SKsrp().validate_facet_brand_canBe_Collapsed();
          
          //4.6. Validate ratings facet initial state (expanded) presented and can be collapsed  
          console.log('Validate color facet initial state (expanded) presented and can be collapsed  ');
          await lidlStoreFront.SKsrp().validate_facet_brand_state_expanded();
          await lidlStoreFront.SKsrp().validate_facet_brand_canBe_Collapsed();
          
          //4.7. Validate load more grids button initial state (expanded) presented and can be clicked 
          console.log('Validate color facet initial state (expanded) presented and can be collapsed  ');
          await lidlStoreFront.SKsrp().validate_load_more_grids_btn_state_expanded();
          await lidlStoreFront.SKsrp().validate_load_more_grids_btn_canBe_clicked();
          
      //     //4.8. Validate size facet initial state (expanded) presented and can be collapsed  
      //     console.log('Validate color facet initial state (expanded) presented and can be collapsed  ');
      //     await lidlStoreFront.SKsrp().validate_facet_brand_state_expanded();
      //     await lidlStoreFront.SKsrp().validate_facet_brand_canBe_Collapsed();

         await lidlStoreFront.SKsrp().takePageScreenShot('cookies/oneTrust/SK_PROD_2_SERP_Cookies_OneTrust_AcceptAll_CS');
   
      });

    test("SK - PROD - 3 - SEARCH-VIEW | SERP | Cookies | OneTrust | Preferences | "+
    "Verify SERP is presented when a " +
    "valid search term is used with combination of " +
    "Preferences cookies settings",
    async ({lidlStoreFront }) => {

         //STEP 2:
         // CLick on oneTrust advance cookies settings button
         console.log("STEP 2: CLick on oneTrust advance cookies settings button");
         await lidlStoreFront.SKCookies().clickOn_AdvancedCS_btn();

        //STEP 3:
         // CLick on Accept all cookies oneTrust cookie settings button
         console.log("STEP 3: CLick on oneTrust preferences cookies settings button");
         await lidlStoreFront.SKCookies().clickOn_Preferences_btn();

         //STEP 4:
         // Submit selected advanced cookie settings by click on submit addvance cookie settings btn
         console.log("STEP 4: CLick on oneTrust preferences cookies settings button");
         await lidlStoreFront.SKCookies().clickOn_SubmitAdvanceCS_btn();

         //STEP 5:
         //The user submits a basic search on the home page
         console.log("STEP 5: The user submits a basic search on the home page");
         await lidlStoreFront.searchBar().submitSearchQuery("*");

         //STEP 6:
         // The user verifies that SRP page properties are presented as per requirements
         console.log('STEP 6: The user verifies that SRP page properties are presented as per requirements');
         //4.1. Validate the title of the lidl store front page
         await lidlStoreFront.SKsrp().validate_SK_SearchResultsPageHTMTitle();

         await lidlStoreFront.SKsrp().validate_initial_searchResultsPage_is_correct();

          await lidlStoreFront.SKsrp().takePageScreenShot('cookies/oneTrust/SK_PROD_2_SERP_Cookies_OneTrust_AcceptAll_CS');
    });