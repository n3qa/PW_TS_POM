import { test } from "../../fixtures/lidl-configurator";

test("DE - PROD - 1 - SEARCH-VIEW | SERP | Cookies | OneTrust | Accept all | "+
        "Verify SERP is presented when a " +
        "valid search term is used with combination of " +
        "Accept all cookies settings",
        async ({lidlStoreFront }) => {

     //STEP 2: 
     //CLick on Accept all cookies oneTrust cookie settings button
     console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
     await lidlStoreFront.DECookies().clickOn_AcceptAllCS_btn();

     //STEP 3:
     // The user submits a basic search on the home page
     console.log("STEP 3: The user submits a basic search on the home page");
     await lidlStoreFront.searchBar().submitSearchQuery("*");

     //STEP 4:
     // The user verifies that SRP page properties are presented as per requirements
     console.log('*** STEP 4: The user verifies that SRP page properties are presented as per requirements');
     //4.1. Validate category facet initial state (expanded) presented and can be collapsed  
     console.log('-> Validate category facet initial state (expanded) presented and can be collapsed.')
     await lidlStoreFront.SKsrp().validate_facet_category_state_expanded();
     await lidlStoreFront.SKsrp().validate_facet_category_canBe_Collapsed();

     //4.2. Validate price facet initial state (expanded) presented and can be collapsed  
     console.log('-> Validate price facet initial state (expanded) presented and can be collapsed ');
     await lidlStoreFront.SKsrp().validate_facet_price_state_expanded();
     await lidlStoreFront.SKsrp().validate_facet_price_canBe_Collapsed();
     
     //4.3. Validate brand facet initial state (expanded) presented and can be collapsed  
     console.log('-> Validate brand facet initial state (expanded) presented and can be collapsed  ');
     await lidlStoreFront.SKsrp().validate_facet_brand_state_expanded();
     await lidlStoreFront.SKsrp().validate_facet_brand_canBe_Collapsed();
     
          //4.4. Validate color facet initial state (expanded) presented and can be collapsed  
          console.log('-> Validate color facet initial state (expanded) presented and can be collapsed  ');
          await lidlStoreFront.SKsrp().validate_facet_color_state_expanded();
          await lidlStoreFront.SKsrp().validate_facet_color_canBe_Collapsed();
     
          //4.5. Validate size facet initial state (expanded) presented and can be collapsed  
          console.log('-> Validate size facet initial state (expanded) presented and can be collapsed  ');
          await lidlStoreFront.SKsrp().validate_facet_size_state_expanded();
          await lidlStoreFront.SKsrp().validate_facet_size_canBe_Collapsed();
          
          //4.6. Validate ratings facet initial state (expanded) presented and can be collapsed  
          console.log('-> Validate ratings facet initial state (expanded) presented and can be collapsed  ');
          await lidlStoreFront.SKsrp().validate_facet_ratings_state_expanded();
          await lidlStoreFront.SKsrp().validate_facet_ratings_canBe_Collapsed();
          
          //4.7. Validate load more grids button initial state (expanded) presented and can be clicked 
          console.log('Validate color facet initial state (expanded) presented and can be collapsed  ');
          await lidlStoreFront.SKsrp().validate_load_more_grids_btn_canBe_clicked();

          //4.7. Validate search results page sorting options are presented and can be activated 
          console.log('-> Validate color facet initial state (expanded) presented and can be collapsed  ');
          await lidlStoreFront.SKsrp().validate_load_more_grids_btn_canBe_clicked();
     
     await lidlStoreFront.SKsrp().takePageScreenShot('cookies/oneTrust/SK_PROD_1_SERP_Cookies_OneTrust_AcceptAll_CS');

});