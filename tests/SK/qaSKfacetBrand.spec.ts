import { test } from "../../fixtures/lidl-configurator";

        test("SK - 1 - QA - SEARCH-VIEW | SERP | Facet | Brand |" +
        " Verify Sales Facet can be collapsed and expanded",
        async ({lidlStoreFront }) => {

        //STEP 2: 
        //CLick on Accept all cookies oneTrust cookie settings button
        console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
        await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn_qa();

         //STEP 3:
          // The user submits a basic search on the home page
          console.log("*** STEP 3: The user submits a basic search on the home page");
          await lidlStoreFront.searchBar().submitSearchQuery("*");

          //STEP 4:
          // The user verifies that initial brand facet props are presented as per requirements
          console.log('*** STEP 4: The user verifies that initial brand facet props are presented as per requirements');
          //4.1. Validate category facet initial state (expanded) presented  
          console.log('-> Validate category facet initial state (expanded) presented.');
          await lidlStoreFront.SKsrp().validate_facet_brand_state_expanded();
          // 4.2. THere is no header reset option
          console.log('-> Validate there is no header reset option when the facet is not active')

          await lidlStoreFront.SKfacetCategory().validate_no_header_reset_option_is_shown();      
          //4.3. There is no bubble reset option
          console.log("-> Validate there is no bubble reset option when the facet is not active")
          await lidlStoreFront.SKfacetCategory().validate_no_bubble_reset_option_for_moda_is_shown();
          //4.4. There is no navigation reset button ( delete all bubbles)
          console.log("-> Validate  that there is no navigation reset all button ( delete all bubbles)")
          await lidlStoreFront.SKfacetCategory().validate_no_navigation_reset_all_bubbles_button_is_shown();

        //STEP 3:
        //Verify Initial brand facet props 



        //STEP  0:
        // The user submits a basic search on the home page
        console.log("STEP 3: The user submits a basic search on the home page");
        await lidlStoreFront.SKfacetBrand().debugTestCase1();
    });

test("SK - 2 -QA - SEARCH-VIEW | SERP | Facet | Category |" +
    " SINGLE increment | TOP > DOWN "+
    "Verify user can successfully navigate " +
    "from 1st category level " +
    "to 2nd category level",
    async ({lidlStoreFront }) => {

//STEP 2: 
//CLick on Accept all cookies oneTrust cookie settings button
        console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
        await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn();

//STEP  0:
// The user submits a basic search on the home page
        console.log("STEP 3: The user submits a basic search on the home page");
        await lidlStoreFront.SKfacetBrand().debugTestCase2();
    });

test("SK - 3 -QA - SEARCH-VIEW | SERP | Facet | Category |" +
    " SINGLE increment | TOP > DOWN "+
    "Verify user can successfully navigate " +
    "from 1st category level " +
    "to 2nd category level",
    async ({lidlStoreFront }) => {

//STEP 2: 
//CLick on Accept all cookies oneTrust cookie settings button
        console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
        await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn();

//STEP  0:
// The user submits a basic search on the home page
        console.log("STEP 3: The user submits a basic search on the home page");
        await lidlStoreFront.SKfacetBrand().debugTestCase3();
    });

test("SK - 4 -QA - SEARCH-VIEW | SERP | Facet | Category |" +
    " SINGLE increment | TOP > DOWN "+
    "Verify user can successfully navigate " +
    "from 1st category level " +
    "to 2nd category level",
    async ({lidlStoreFront }) => {

//STEP 2: 
//CLick on Accept all cookies oneTrust cookie settings button
        console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
        await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn();

//STEP  0:
// The user submits a basic search on the home page
        console.log("STEP 3: The user submits a basic search on the home page");
        await lidlStoreFront.SKfacetBrand().debugTestCase4();
    });

test("SK - 5 -QA - SEARCH-VIEW | SERP | Facet | Category |" +
    " SINGLE increment | TOP > DOWN "+
    "Verify user can successfully navigate " +
    "from 1st category level " +
    "to 2nd category level",
    async ({lidlStoreFront }) => {

//STEP 2: 
//CLick on Accept all cookies oneTrust cookie settings button
        console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
        await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn();

//STEP  0:
// The user submits a basic search on the home page
        console.log("STEP 3: The user submits a basic search on the home page");
        await lidlStoreFront.SKfacetBrand().debugTestCase5();
    });

test("SK - 6 -QA - SEARCH-VIEW | SERP | Facet | Category |" +
    " SINGLE increment | TOP > DOWN "+
    "Verify user can successfully navigate " +
    "from 1st category level " +
    "to 2nd category level",
    async ({lidlStoreFront }) => {

//STEP 2: 
//CLick on Accept all cookies oneTrust cookie settings button
        console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
        await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn();

//STEP  0:
// The user submits a basic search on the home page
        console.log("STEP 3: The user submits a basic search on the home page");
        await lidlStoreFront.SKfacetBrand().debugTestCase6();
    });

test("SK - 7 -QA - SEARCH-VIEW | SERP | Facet | Category |" +
    " SINGLE increment | TOP > DOWN "+
    "Verify user can successfully navigate " +
    "from 1st category level " +
    "to 2nd category level",
    async ({lidlStoreFront }) => {

    //STEP 2: 
    //CLick on Accept all cookies oneTrust cookie settings button
            console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
            await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn();

    //STEP  0:
    // The user submits a basic search on the home page
            console.log("STEP 3: The user submits a basic search on the home page");
            await lidlStoreFront.SKfacetBrand().debugTestCase7();
    });

test("SK - 8 -QA - SEARCH-VIEW | SERP | Facet | Category |" +
    " SINGLE increment | TOP > DOWN "+
    "Verify user can successfully navigate " +
    "from 1st category level " +
    "to 2nd category level",
    async ({lidlStoreFront }) => {

//STEP 2: 
//CLick on Accept all cookies oneTrust cookie settings button
        console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
        await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn();

//STEP  0:
// The user submits a basic search on the home page
        console.log("STEP 3: The user submits a basic search on the home page");
        await lidlStoreFront.SKfacetBrand().debugTestCase8();
    });