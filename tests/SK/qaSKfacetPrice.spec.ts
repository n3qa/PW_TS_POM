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
        console.log('*** STEP 4 : The user verifies the inital price facet props')
        // 4.1. 
        const initialPriceFromValue = await lidlStoreFront.SKfacetPrice().get_price_from_value();
        console.log("CONFIRM: The initial price from value is:  "+initialPriceFromValue);
        const initialPriceTillValue = await lidlStoreFront.SKfacetPrice().get_price_till_value();
        console.log("CONFIRM: The initial price till value is:  "+initialPriceTillValue);
        

        await lidlStoreFront.SKfacetPrice().validate_facet_price_default_props();
        await lidlStoreFront.SKfacetPrice().validate_price_from_input_field('1');

        await lidlStoreFront.SKfacetPrice().set_price_from_value('44');
        await lidlStoreFront.SKfacetPrice().set_price_till_value('44');

        const updatedPriceFrom = await lidlStoreFront.SKfacetPrice().get_price_from_value();
        console.log('THe updated price from value is : '+updatedPriceFrom)
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