import { test } from "../../fixtures/lidl-configurator";


    test("SK - 1 -QA - SEARCH-VIEW | SERP | Facet | Price |" +
        "Verify Price facet can be collapsed and expanded" ,
        async ({lidlStoreFront }) => {

        //STEP 2: 
        //CLick on Accept all cookies oneTrust cookie settings button
        console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
        await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn_qa();
 
        //STEP 3:
        // The user submits a basic search on the home page
        console.log("*** STEP 3: The user submits a basic search on the home page");
        await lidlStoreFront.searchBar().submitSearchQuery("*");
        
        //STEP 4
        // The user verifies the inital price facet props 
        console.log('*** STEP 4 : The user verifies the inital price facet props are as per requirments')
        await lidlStoreFront.SKfacetPrice().validate_facet_price_default_props();    

        //STEP 5
        // The user collapses the price facet by a single click on price facet header button
        console.log('*** STEP 5 : The user collapses the price facet by a single click on price facet header button')
        await lidlStoreFront.SKfacetPrice().price_country_spec_label_btn().click();
           
        //STEP 6
        // The user verifies the inital price facet props 
        console.log('*** STEP 6 : The user verifies the price facet props are  collapsed as per requirments')
        await lidlStoreFront.SKfacetPrice().validate_price_facet_collapsed();    

        //STEP 7
        // The user collapses the price facet by a single click on price facet header button
        console.log('*** STEP 7 : The user expands the price facet by a single click on price facet header button')
        await lidlStoreFront.SKfacetPrice().price_country_spec_label_btn().click();
          
        //STEP 8
        // The user verifies the inital price facet props 
        console.log('*** STEP 8 : The user verifies the inital price facet props are as per requirments')
        await lidlStoreFront.SKfacetPrice().validate_facet_price_default_props();    

        console.log('here')
    });

 
// test("SK - 3 -QA - SEARCH-VIEW | SERP | Facet | Category |" +
//     " SINGLE increment | TOP > DOWN "+
//     "Verify user can successfully navigate " +
//     "from 1st category level " +
//     "to 2nd category level",
//     async ({lidlStoreFront }) => {

// //STEP 2: 
// //CLick on Accept all cookies oneTrust cookie settings button
//         console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
//         await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn();

// //STEP  0:
// // The user submits a basic search on the home page
//         console.log("STEP 3: The user submits a basic search on the home page");
//         await lidlStoreFront.SKfacetPrice().debugTestCase3();
//     });

// test("SK - 4 -QA - SEARCH-VIEW | SERP | Facet | Category |" +
//     " SINGLE increment | TOP > DOWN "+
//     "Verify user can successfully navigate " +
//     "from 1st category level " +
//     "to 2nd category level",
//     async ({lidlStoreFront }) => {

// //STEP 2: 
// //CLick on Accept all cookies oneTrust cookie settings button
//         console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
//         await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn();

// //STEP  0:
// // The user submits a basic search on the home page
//         console.log("STEP 3: The user submits a basic search on the home page");
//         await lidlStoreFront.SKfacetPrice().debugTestCase4();
//     });

// test("SK - 5 -QA - SEARCH-VIEW | SERP | Facet | Category |" +
//     " SINGLE increment | TOP > DOWN "+
//     "Verify user can successfully navigate " +
//     "from 1st category level " +
//     "to 2nd category level",
//     async ({lidlStoreFront }) => {

// //STEP 2: 
// //CLick on Accept all cookies oneTrust cookie settings button
//         console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
//         await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn();

// //STEP  0:
// // The user submits a basic search on the home page
//         console.log("STEP 3: The user submits a basic search on the home page");
//         await lidlStoreFront.SKfacetPrice().debugTestCase5();
//     });

// test("SK - 6 -QA - SEARCH-VIEW | SERP | Facet | Category |" +
//     " SINGLE increment | TOP > DOWN "+
//     "Verify user can successfully navigate " +
//     "from 1st category level " +
//     "to 2nd category level",
//     async ({lidlStoreFront }) => {

// //STEP 2: 
// //CLick on Accept all cookies oneTrust cookie settings button
//         console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
//         await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn();

// //STEP  0:
// // The user submits a basic search on the home page
//         console.log("STEP 3: The user submits a basic search on the home page");
//         await lidlStoreFront.SKfacetPrice().debugTestCase6();
//     });

// test("SK - 7 -QA - SEARCH-VIEW | SERP | Facet | Category |" +
//     " SINGLE increment | TOP > DOWN "+
//     "Verify user can successfully navigate " +
//     "from 1st category level " +
//     "to 2nd category level",
//     async ({lidlStoreFront }) => {

// //STEP 2: 
// //CLick on Accept all cookies oneTrust cookie settings button
//         console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
//         await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn();

// //STEP  0:
// // The user submits a basic search on the home page
//         console.log("STEP 3: The user submits a basic search on the home page");
//         await lidlStoreFront.SKfacetPrice().debugTestCase7();
//     });

// test("SK - 8 -QA - SEARCH-VIEW | SERP | Facet | Category |" +
//     " SINGLE increment | TOP > DOWN "+
//     "Verify user can successfully navigate " +
//     "from 1st category level " +
//     "to 2nd category level",
//     async ({lidlStoreFront }) => {

// //STEP 2: 
// //CLick on Accept all cookies oneTrust cookie settings button
//         console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
//         await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn();

// //STEP  0:
// // The user submits a basic search on the home page
//         console.log("STEP 3: The user submits a basic search on the home page");
//         await lidlStoreFront.SKfacetPrice().debugTestCase8();
//     });

// test("SK - 9 -QA - SEARCH-VIEW | SERP | Facet | Category |" +
//     " SINGLE increment | TOP > DOWN "+
//     "Verify user can successfully navigate " +
//     "from 1st category level " +
//     "to 2nd category level",
//     async ({lidlStoreFront }) => {

// //STEP 2: 
// //CLick on Accept all cookies oneTrust cookie settings button
//         console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
//         await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn();

// //STEP  0:
// // The user submits a basic search on the home page
//         console.log("STEP 3: The user submits a basic search on the home page");
//         await lidlStoreFront.SKfacetPrice().debugTestCase9();
//     });

// test("SK - 10 -QA - SEARCH-VIEW | SERP | Facet | Category |" +
//     " SINGLE increment | TOP > DOWN "+
//     "Verify user can successfully navigate " +
//     "from 1st category level " +
//     "to 2nd category level",
//     async ({lidlStoreFront }) => {

// //STEP 2: 
// //CLick on Accept all cookies oneTrust cookie settings button
//         console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
//         await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn();

// //STEP  0:
// // The user submits a basic search on the home page
//         console.log("STEP 3: The user submits a basic search on the home page");
//         await lidlStoreFront.SKfacetPrice().debugTestCase10();
//     });