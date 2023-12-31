import { test } from "../../fixtures/lidl-configurator";

test("SK - QA - 1 - SEARCH-VIEW | SERP | Cookies | OneTrust | Accept all | "+
    "Verify SERP is presented when a " +
    "valid search term is used with combination of " +
    "Accept all cookies settings",
    async ({lidlStoreFront }) => {

        //STEP 2: 
        //CLick on Accept all cookies oneTrust cookie settings button
        console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
        await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn_qa();

        //STEP 3:
        // The user submits a basic search on the home page
        console.log("STEP 3: The user submits a basic search on the home page");
        await lidlStoreFront.searchBar().submitSearchQuery("*");

        //STEP 4:
        // The user verifies that SRP page properties are presented as per requirements
        console.log('*** STEP 4: The user verifies that SRP page properties are presented as per requirements');
        //4.1. Validate CATEGORY facet initial state (expanded) presented and can be collapsed  
        console.log('-> Validate category facet initial state (expanded) presented and can be collapsed.')
        await lidlStoreFront.SKsrp().validate_facet_category_state_expanded();
        await lidlStoreFront.SKsrp().validate_facet_category_canBe_Collapsed();

        //4.2. Validate PRICE facet initial state (expanded) presented and can be collapsed  
        console.log('-> Validate price facet initial state (expanded) presented and can be collapsed ');
        await lidlStoreFront.SKsrp().validate_facet_price_state_expanded();
        await lidlStoreFront.SKsrp().validate_facet_price_canBe_Collapsed();

        //4.3. Validate BRAND facet initial state (expanded) presented and can be collapsed  
        console.log('-> Validate brand facet initial state (expanded) presented and can be collapsed  ');
        await lidlStoreFront.SKsrp().validate_facet_brand_state_expanded();
        await lidlStoreFront.SKsrp().validate_facet_brand_canBe_Collapsed();

        //4.5. Validate SIZE facet initial state (expanded) presented and can be collapsed  
        console.log('-> Validate size facet initial state (expanded) presented and can be collapsed  ');
        await lidlStoreFront.SKsrp().validate_facet_size_state_expanded();
        await lidlStoreFront.SKsrp().validate_facet_size_canBe_Collapsed();

        //4.6. Validate RATINGS facet initial state (expanded) presented and can be collapsed  
        console.log('-> Validate ratings facet initial state (expanded) presented and can be collapsed  ');
        await lidlStoreFront.SKsrp().validate_facet_ratings_state_expanded();
        await lidlStoreFront.SKsrp().validate_facet_ratings_canBe_Collapsed();

        //4.7. Validate LOAD MORE GRIDS  button initial state (expanded) presented and can be clicked 
        console.log('Validate color facet initial state (expanded) presented and can be collapsed  ');
        await lidlStoreFront.SKsrp().validate_load_more_grids_btn_canBe_clicked();

        //4.7. Validate search results page sorting options are presented and can be activated 
        console.log('-> Validate color facet initial state (expanded) presented and can be collapsed  ');
        await lidlStoreFront.SKsrp().validate_load_more_grids_btn_canBe_clicked();

        await lidlStoreFront.SKsrp().takePageScreenShot('cookies/oneTrust/SK_QA_1_SERP_Cookies_OneTrust_AcceptAll_CS');

    });

test("SK - QA - 2 - SEARCH-VIEW | SERP | Cookies | OneTrust | Reject all | "+
    "Verify SERP is presented when a " +
    "valid search term is used with combination of " +
    "Rejection all cookies settings",
    async ({lidlStoreFront }) => {

        //STEP 2:
        // CLick on Accept all cookies oneTrust cookie settings button
        console.log("*** STEP 2: CLick on oneTrust reject all cookies settings button");
        await lidlStoreFront.SKCookies().clickOn_RejectAllCS_btn();

        //STEP 3:
        // The user submits a basic search on the home page
        console.log("*** STEP 3: The user submits a basic search on the home page");
        await lidlStoreFront.searchBar().submitSearchQuery("*");

         //STEP 4:
        // The user verifies that SRP page properties are presented as per requirements
        console.log('*** STEP 4: The user verifies that SRP page properties are presented as per requirements');
        //4.1. Validate CATEGORY facet initial state (expanded) presented and can be collapsed  
        console.log('-> Validate category facet initial state (expanded) presented and can be collapsed.')
        await lidlStoreFront.SKsrp().validate_facet_category_state_expanded();
        await lidlStoreFront.SKsrp().validate_facet_category_canBe_Collapsed();

        //4.2. Validate PRICE facet initial state (expanded) presented and can be collapsed  
        console.log('-> Validate price facet initial state (expanded) presented and can be collapsed ');
        await lidlStoreFront.SKsrp().validate_facet_price_state_expanded();
        await lidlStoreFront.SKsrp().validate_facet_price_canBe_Collapsed();

        //4.3. Validate BRAND facet initial state (expanded) presented and can be collapsed  
        console.log('-> Validate brand facet initial state (expanded) presented and can be collapsed  ');
        await lidlStoreFront.SKsrp().validate_facet_brand_state_expanded();
        await lidlStoreFront.SKsrp().validate_facet_brand_canBe_Collapsed();

        //4.5. Validate SIZE facet initial state (expanded) presented and can be collapsed  
        console.log('-> Validate size facet initial state (expanded) presented and can be collapsed  ');
        await lidlStoreFront.SKsrp().validate_facet_size_state_expanded();
        await lidlStoreFront.SKsrp().validate_facet_size_canBe_Collapsed();

        //4.6. Validate RATINGS facet initial state (expanded) presented and can be collapsed  
        console.log('-> Validate ratings facet initial state (expanded) presented and can be collapsed  ');
        await lidlStoreFront.SKsrp().validate_facet_ratings_state_expanded();
        await lidlStoreFront.SKsrp().validate_facet_ratings_canBe_Collapsed();

        //4.7. Validate LOAD MORE GRIDS  button initial state (expanded) presented and can be clicked 
        console.log('Validate color facet initial state (expanded) presented and can be collapsed  ');
        await lidlStoreFront.SKsrp().validate_load_more_grids_btn_canBe_clicked();

        //4.7. Validate search results page sorting options are presented and can be activated 
        console.log('-> Validate color facet initial state (expanded) presented and can be collapsed  ');
        await lidlStoreFront.SKsrp().validate_load_more_grids_btn_canBe_clicked();

        await lidlStoreFront.SKsrp().takePageScreenShot('cookies/oneTrust/SK_QA_2_SERP_Cookies_OneTrust_RejectAll_CS');

    });

test.skip("SK - QA - 3 - SEARCH-VIEW | SERP | Cookies | OneTrust | Preferences | "+
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
        console.log('*** STEP 4: The user verifies that SRP page properties are presented as per requirements');
        //6.1. Validate category facet initial state (expanded) presented and can be collapsed  
        console.log('-> Validate category facet initial state (expanded) presented and can be collapsed.')
        await lidlStoreFront.SKsrp().validate_facet_category_state_expanded();
        await lidlStoreFront.SKsrp().validate_facet_category_canBe_Collapsed();

        //6.2. Validate price facet initial state (expanded) presented and can be collapsed  
        console.log('-> Validate price facet initial state (expanded) presented and can be collapsed ');
        await lidlStoreFront.SKsrp().validate_facet_price_state_expanded();
        await lidlStoreFront.SKsrp().validate_facet_price_canBe_Collapsed();

        //6.3. Validate brand facet initial state (expanded) presented and can be collapsed  
        console.log('-> Validate brand facet initial state (expanded) presented and can be collapsed  ');
        await lidlStoreFront.SKsrp().validate_facet_brand_state_expanded();
        await lidlStoreFront.SKsrp().validate_facet_brand_canBe_Collapsed();

        //6.4. Validate size facet initial state (expanded) presented and can be collapsed  
        console.log('-> Validate size facet initial state (expanded) presented and can be collapsed  ');
        await lidlStoreFront.SKsrp().validate_facet_size_state_expanded();
        await lidlStoreFront.SKsrp().validate_facet_size_canBe_Collapsed();

        //6.5. Validate ratings facet initial state (expanded) presented and can be collapsed  
        console.log('-> Validate ratings facet initial state (expanded) presented and can be collapsed  ');
        await lidlStoreFront.SKsrp().validate_facet_ratings_state_expanded();
        await lidlStoreFront.SKsrp().validate_facet_ratings_canBe_Collapsed();

        //6.6. Validate load more grids button initial state (expanded) presented and can be clicked 
        console.log('Validate color facet initial state (expanded) presented and can be collapsed  ');
        await lidlStoreFront.SKsrp().validate_load_more_grids_btn_canBe_clicked();

        await lidlStoreFront.SKsrp().takePageScreenShot('cookies/oneTrust/SK_QA_3_SERP_Cookies_OneTrust_Preferences_CS');

    });

test.skip("SK - QA - 4 - SEARCH-VIEW | SERP | Cookies | OneTrust | Statistics | "+
    "Verify SERP is presented when a " +
    "valid search term is used with combination of " +
    "Statistics cookies settings",
    async ({lidlStoreFront }) => {

        //STEP 2:
        // CLick on oneTrust advance cookies settings button
        console.log("STEP 2: CLick on oneTrust advance cookies settings button");
        await lidlStoreFront.SKCookies().clickOn_AdvancedCS_btn();

        //STEP 3:
        // CLick on Accept all cookies oneTrust cookie settings button
        console.log("STEP 3: CLick on oneTrust preferences cookies settings button");
        await lidlStoreFront.SKCookies().clickOn_Statistics_btn();

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
        console.log('*** STEP 4: The user verifies that SRP page properties are presented as per requirements');
        //6.1. Validate category facet initial state (expanded) presented and can be collapsed  
        console.log('-> Validate category facet initial state (expanded) presented and can be collapsed.')
        await lidlStoreFront.SKsrp().validate_facet_category_state_expanded();
        await lidlStoreFront.SKsrp().validate_facet_category_canBe_Collapsed();

        //6.2. Validate price facet initial state (expanded) presented and can be collapsed  
        console.log('-> Validate price facet initial state (expanded) presented and can be collapsed ');
        await lidlStoreFront.SKsrp().validate_facet_price_state_expanded();
        await lidlStoreFront.SKsrp().validate_facet_price_canBe_Collapsed();

        //6.3. Validate brand facet initial state (expanded) presented and can be collapsed  
        console.log('-> Validate brand facet initial state (expanded) presented and can be collapsed  ');
        await lidlStoreFront.SKsrp().validate_facet_brand_state_expanded();
        await lidlStoreFront.SKsrp().validate_facet_brand_canBe_Collapsed();

        //6.4. Validate size facet initial state (expanded) presented and can be collapsed  
        console.log('-> Validate size facet initial state (expanded) presented and can be collapsed  ');
        await lidlStoreFront.SKsrp().validate_facet_size_state_expanded();
        await lidlStoreFront.SKsrp().validate_facet_size_canBe_Collapsed();

        //6.5. Validate ratings facet initial state (expanded) presented and can be collapsed  
        console.log('-> Validate ratings facet initial state (expanded) presented and can be collapsed  ');
        await lidlStoreFront.SKsrp().validate_facet_ratings_state_expanded();
        await lidlStoreFront.SKsrp().validate_facet_ratings_canBe_Collapsed();

        //6.6. Validate load more grids button initial state (expanded) presented and can be clicked 
        console.log('Validate color facet initial state (expanded) presented and can be collapsed  ');
        await lidlStoreFront.SKsrp().validate_load_more_grids_btn_canBe_clicked();

    });

test.skip("SK - QA - 5 - SEARCH-VIEW | SERP | Cookies | OneTrust | Marketing | "+
    "Verify SERP is presented when a " +
    "valid search term is used with combination of " +
    "Statistics cookies settings",
    async ({lidlStoreFront }) => {

        //STEP 2:
        // CLick on oneTrust advance cookies settings button
        console.log("STEP 2: CLick on oneTrust advance cookies settings button");
        await lidlStoreFront.SKCookies().clickOn_AdvancedCS_btn();

        //STEP 3:
        // CLick on Accept all cookies oneTrust cookie settings button
        console.log("STEP 3: CLick on oneTrust preferences cookies settings button");
        await lidlStoreFront.SKCookies().clickOn_Marketing_btn();

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
        console.log('*** STEP 4: The user verifies that SRP page properties are presented as per requirements');
        //6.1. Validate category facet initial state (expanded) presented and can be collapsed  
        console.log('-> Validate category facet initial state (expanded) presented and can be collapsed.')
        await lidlStoreFront.SKsrp().validate_facet_category_state_expanded();
        await lidlStoreFront.SKsrp().validate_facet_category_canBe_Collapsed();

        //6.2. Validate price facet initial state (expanded) presented and can be collapsed  
        console.log('-> Validate price facet initial state (expanded) presented and can be collapsed ');
        await lidlStoreFront.SKsrp().validate_facet_price_state_expanded();
        await lidlStoreFront.SKsrp().validate_facet_price_canBe_Collapsed();

        //6.3. Validate brand facet initial state (expanded) presented and can be collapsed  
        console.log('-> Validate brand facet initial state (expanded) presented and can be collapsed  ');
        await lidlStoreFront.SKsrp().validate_facet_brand_state_expanded();
        await lidlStoreFront.SKsrp().validate_facet_brand_canBe_Collapsed();

        //6.4. Validate size facet initial state (expanded) presented and can be collapsed  
        console.log('-> Validate size facet initial state (expanded) presented and can be collapsed  ');
        await lidlStoreFront.SKsrp().validate_facet_size_state_expanded();
        await lidlStoreFront.SKsrp().validate_facet_size_canBe_Collapsed();

        //6.5. Validate ratings facet initial state (expanded) presented and can be collapsed  
        console.log('-> Validate ratings facet initial state (expanded) presented and can be collapsed  ');
        await lidlStoreFront.SKsrp().validate_facet_ratings_state_expanded();
        await lidlStoreFront.SKsrp().validate_facet_ratings_canBe_Collapsed();

        //6.6. Validate load more grids button initial state (expanded) presented and can be clicked 
        console.log('Validate color facet initial state (expanded) presented and can be collapsed  ');
        await lidlStoreFront.SKsrp().validate_load_more_grids_btn_canBe_clicked();

        await lidlStoreFront.SKsrp().takePageScreenShot('cookies/oneTrust/SK_QA_4_SERP_Cookies_OneTrust_Statistics_CS');

    });