import { test } from "../../fixtures/lidl-configurator";

test("DE - 1 -PROD - SEARCH-VIEW | SERP | Facet | Category |" +
    " SINGLE increment | TOP > DOWN "+
    "Verify user can successfully navigate " +
    "from 1st category level " +
    "to 2nd category level",
    async ({lidlStoreFront }) => {

//STEP 2: 
//CLick on Accept all cookies oneTrust cookie settings button
         console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
         await lidlStoreFront.DECookies().clickOn_AcceptAllCS_btn();

//STEP  0:
// The user submits a basic search on the home page
         console.log("STEP 3: The user submits a basic search on the home page");
         await lidlStoreFront.DEfacetCategory().debugTestCase1();
    });

test("DE - 2 - PROD - SEARCH-VIEW | SERP | Facet | Category |" +
    " SINGLE increment | TOP > DOWN "+
    "Verify user can successfully navigate " +
    "from 2nd category level " +
    "to 3rd category level",
    async ({lidlStoreFront }) => {

         //STEP 2: 
         //CLick on Accept all cookies oneTrust cookie settings button
         console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
         await lidlStoreFront.DECookies().clickOn_AcceptAllCS_btn();

         //STEP  0:
         // The user submits a basic search on the home page
         console.log("STEP 3: The user submits a basic search on the home page");
         await lidlStoreFront.DEfacetCategory().debugTestCase2();
    });


test("DE - 3 - PROD - SEARCH-VIEW | SERP | Facet | Category |" +
    " SINGLE increment | DOWN > TOP "+
    "Verify user can successfully navigate " +
    "from 3rd category level " +
    "to 2nd category level",
    async ({lidlStoreFront }) => {

         //STEP 2: 
         //CLick on Accept all cookies oneTrust cookie settings button
         console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
         await lidlStoreFront.DECookies().clickOn_AcceptAllCS_btn();

         //STEP  0:
         // The user submits a basic search on the home page
         console.log("STEP 3: The user submits a basic search on the home page");
         await lidlStoreFront.DEfacetCategory().debugTestCase3();
    });

test("DE - 4 - PROD - SEARCH-VIEW | SERP | Facet | Category |" +
    " SINGLE increment | DOWN > TOP     "+
    "Verify user can successfully navigate " +
    "from 2nd category level " +
    "to 1st category level",
    async ({lidlStoreFront }) => {

         //STEP 2: 
         //CLick on Accept all cookies oneTrust cookie settings button
         console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
         await lidlStoreFront.DECookies().clickOn_AcceptAllCS_btn();

         //STEP  0:
         // The user submits a basic search on the home page
         console.log("STEP 3: The user submits a basic search on the home page");
         await lidlStoreFront.DEfacetCategory().debugTestCase4();
    });

test("DE - 5 - PROD - SEARCH-VIEW | SERP | Facet | Category |" +
    " DOUBLE increment | TOP > DOWN     "+
    "Verify user can successfully navigate " +
    "from 1st category level " +
    "to 3rd category level",
    async ({lidlStoreFront }) => {

         //STEP 2: 
         //CLick on Accept all cookies oneTrust cookie settings button
         console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
         await lidlStoreFront.DECookies().clickOn_AcceptAllCS_btn();

         //STEP  0:
         // The user submits a basic search on the home page
         console.log("STEP 3: The user submits a basic search on the home page");
         await lidlStoreFront.DEfacetCategory().debugTestCase5();
    });

test("DE - 6 - PROD - SEARCH-VIEW | SERP | Facet | Category |" +
    " Sequential increment | FULL TOP > DOWN     "+
    "Verify user can successfully navigate " +
    "from 1st category level " +
    "from 2nd category level " +
    "to 3rd category level",
    async ({lidlStoreFront }) => {

         //STEP 2: 
         //CLick on Accept all cookies oneTrust cookie settings button
         console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
         await lidlStoreFront.DECookies().clickOn_AcceptAllCS_btn();

         //STEP  0:
         // The user submits a basic search on the home page
         console.log("STEP 3: The user submits a basic search on the home page");
         await lidlStoreFront.DEfacetCategory().debugTestCase6();
    });

test("DE - 7 - PROD - SEARCH-VIEW | SERP | Facet | Category |" +
    " Sequential increment | FULL DOWN > TOP     "+
    "Verify user can successfully navigate " +
    "from 3rd category level " +
    "to 2nd category level and " +
    "to 1st category level",
    async ({lidlStoreFront }) => {

         //STEP 2: 
         //CLick on Accept all cookies oneTrust cookie settings button
         console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
         await lidlStoreFront.DECookies().clickOn_AcceptAllCS_btn();

         //STEP  0:
         // The user submits a basic search on the home page
         console.log("STEP 3: The user submits a basic search on the home page");
         await lidlStoreFront.DEfacetCategory().debugTestCase7();
    });

test("DE - 8 - PROD - SEARCH-VIEW | SERP | Facet | Category |" +
    " RESET | HEADER reset option | "+
    "Verify user can successfully reset " +
    "the already activated category facet" +
    "by category facet header reset option. ",
    async ({lidlStoreFront }) => {

         //STEP 2: 
         //CLick on Accept all cookies oneTrust cookie settings button
         console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
         await lidlStoreFront.DECookies().clickOn_AcceptAllCS_btn();

         //STEP  0:
         // The user submits a basic search on the home page
         console.log("STEP 3: The user submits a basic search on the home page");
         await lidlStoreFront.DEfacetCategory().debugTestCase9();
    });

test("DE - 9 - PROD - SEARCH-VIEW | SERP | Facet | Category |" +
    " RESET | BUBBLE reset option | "+
    "Verify user can successfully reset " +
    "the already activated " +
    "second level category facet" +
    "by category facet bubble reset option. ",
    async ({lidlStoreFront }) => {

         //STEP 2: 
         //CLick on Accept all cookies oneTrust cookie settings button
         console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
         await lidlStoreFront.DECookies().clickOn_AcceptAllCS_btn();

         //STEP  0:
         // The user submits a basic search on the home page
         console.log("STEP 3: The user submits a basic search on the home page");
         await lidlStoreFront.DEfacetCategory().debugTestCase9();
    });

test("DE - 10 - PROD - SEARCH-VIEW | SERP | Facet | Category |" +
    " RESET | BUBBLE reset option | "+
    "Verify user can successfully reset " +
    "the already activated " +
    "3rd level category facet" +
    "by category facet bubble reset option. ",
    async ({lidlStoreFront }) => {

         //STEP 2: 
         //CLick on Accept all cookies oneTrust cookie settings button
         console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
         await lidlStoreFront.DECookies().clickOn_AcceptAllCS_btn();

         //STEP  0:
         // The user submits a basic search on the home page
         console.log("STEP 3: The user submits a basic search on the home page");
         await lidlStoreFront.DEfacetCategory().debugTestCase10();
    });

test("DE - 11 - PROD - SEARCH-VIEW | SERP | Facet | Category |" +
    " RESET | BUBBLE reset option | "+
    "Verify user can successfully reset " +
    "the already activated " +
    "3rd level category facet" +
    "by category facet bubble reset option. ",
    async ({lidlStoreFront }) => {

         //STEP 2: 
         //CLick on Accept all cookies oneTrust cookie settings button
         console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
         await lidlStoreFront.DECookies().clickOn_AcceptAllCS_btn();

         //STEP  0:
         // The user submits a basic search on the home page
         console.log("STEP 3: The user submits a basic search on the home page");
         await lidlStoreFront.DEfacetCategory().debugTestCase11();
    });

test("DE - 12 - PROD - SEARCH-VIEW | SERP | Facet | Category |" +
    " RESET | BUBBLE reset option | "+
    "Verify user can successfully reset " +
    "the already activated " +
    "2nd level category facet" +
    "by category facet bubble reset option. ",
    async ({lidlStoreFront }) => {

         //STEP 2: 
         //CLick on Accept all cookies oneTrust cookie settings button
         console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
         await lidlStoreFront.DECookies().clickOn_AcceptAllCS_btn();

         //STEP  0:
         // The user submits a basic search on the home page
         console.log("STEP 3: The user submits a basic search on the home page");
         await lidlStoreFront.DEfacetCategory().debugTestCase12();
    });

test("DE - 13 - PROD - SEARCH-VIEW | SERP | Facet | Category |" +
    " RESET | BUBBLE reset option | "+
    "Verify user can successfully reset " +
    "the already activated " +
    "2nd level category facet" +
    "by category facet bubble reset option. ",
    async ({lidlStoreFront }) => {

         //STEP 2: 
         //CLick on Accept all cookies oneTrust cookie settings button
         console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
         await lidlStoreFront.DECookies().clickOn_AcceptAllCS_btn();

         //STEP  0:
         // The user submits a basic search on the home page
         console.log("STEP 3: The user submits a basic search on the home page");
         await lidlStoreFront.DEfacetCategory().debugTestCase13();
    });

test("DE - 14 - PROD - SEARCH-VIEW | SERP | Facet | Category |" +
    " RESET | BUBBLE reset option | "+
    "Verify user can successfully reset " +
    "the already activated " +
    "1st level category facet" +
    "2nd level category facet" +
    "3nd level category facet" +
    "by category facet bubble reset option. ",
    async ({lidlStoreFront }) => {

         //STEP 2: 
         //CLick on Accept all cookies oneTrust cookie settings button
         console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
         await lidlStoreFront.DECookies().clickOn_AcceptAllCS_btn();

         //STEP  0:
         // The user submits a basic search on the home     page
         console.log("STEP 3: The user submits a basic search on the home page");
         await lidlStoreFront.DEfacetCategory().debugTestCase14();
    });


test("DE - 15 - PROD - SEARCH-VIEW | SERP | Facet | Category |" +
    " RESET | BUBBLE reset option | "+
    "Verify user can successfully reset " +
    "the already activated " +
    "3rd level category facet" +
    "2nd level category facet" +
    "1st level category facet" +
    "by category facet bubble reset option. ",
    async ({lidlStoreFront }) => {

//STEP 2: 
//CLick on Accept all cookies oneTrust cookie settings button
         console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
         await lidlStoreFront.DECookies().clickOn_AcceptAllCS_btn();

//STEP  0:
// The user submits a basic search on the home     page
         console.log("STEP 3: The user submits a basic search on the home page");
         await lidlStoreFront.DEfacetCategory().debugTestCase15();
    });

test("DE - 16 - PROD - SEARCH-VIEW | SERP | Facet | Category |" +
    " RESET | BUBBLE reset option | "+
    "Verify user can successfully reset " +
    "the already activated " +
    "1st level category facet" + +
        "by category facet bubble reset option. ",
    async ({lidlStoreFront }) => {

         //STEP 2: 
         //CLick on Accept all cookies oneTrust cookie settings button
         console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
         await lidlStoreFront.DECookies().clickOn_AcceptAllCS_btn();

         //STEP  0:
         // The user submits a basic search on the home     page
         console.log("STEP 3: The user submits a basic search on the home page");
         await lidlStoreFront.DEfacetCategory().debugTestCase16();
    });

test("DE - 17 - PROD - SEARCH-VIEW | SERP | Facet | Category |" +
    " RESET | BUBBLE reset option | "+
    "Verify user can successfully reset " +
    "the already activated " +
    "1st level category facet" +
    "2nd level category facet" +
    "3nd level category facet" +
    "by category facet bubble reset option. ",
    async ({lidlStoreFront }) => {

         //STEP 2: 
         //CLick on Accept all cookies oneTrust cookie settings button
         console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
         await lidlStoreFront.DECookies().clickOn_AcceptAllCS_btn();

         //STEP  0:
         // The user submits a basic search on the home     page
         console.log("STEP 3: The user submits a basic search on the home page");
         await lidlStoreFront.DEfacetCategory().debugTestCase17();
    });

test("DE - 18 - PROD - SEARCH-VIEW | SERP | Facet | Category |" +
    " RESET | BUBBLE reset option | "+
    "Verify user can successfully reset " +
    "the already activated " +
    "1st level category facet" +
    "2nd level category facet" +
    "3nd level category facet" +
    "by category facet bubble reset option. ",
    async ({lidlStoreFront }) => {

         //STEP 2: 
         //CLick on Accept all cookies oneTrust cookie settings button
         console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
         await lidlStoreFront.DECookies().clickOn_AcceptAllCS_btn();

         //STEP  0:
         // The user submits a basic search on the home     page
         console.log("STEP 3: The user submits a basic search on the home page");
         await lidlStoreFront.DEfacetCategory().debugTestCase18();
    });

test("DE - 19 - PROD - SEARCH-VIEW | SERP | Facet | Category |" +
    " RESET | BUBBLE reset option | "+
    "Verify user can successfully reset " +
    "the already activated " +
    "1st level category facet" +
    "2nd level category facet" +
    "3nd level category facet" +
    "by category facet bubble reset option. ",
    async ({lidlStoreFront }) => {

         //STEP 2: 
         //CLick on Accept all cookies oneTrust cookie settings button
         console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
         await lidlStoreFront.DECookies().clickOn_AcceptAllCS_btn();

         //STEP  0:
         // The user submits a basic search on the home     page
         console.log("STEP 3: The user submits a basic search on the home page");
         await lidlStoreFront.DEfacetCategory().debugTestCase19();
    });

test("DE - 20 - PROD - SEARCH-VIEW | SERP | Facet | Category |" +
    " RESET | BUBBLE reset option | "+
    "Verify user can successfully reset " +
    "the already activated " +
    "1st level category facet" +
    "2nd level category facet" +
    "3nd level category facet" +
    "by category facet bubble reset option. ",
    async ({lidlStoreFront }) => {

         //STEP 2: 
         //CLick on Accept all cookies oneTrust cookie settings button
         console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
         await lidlStoreFront.DECookies().clickOn_AcceptAllCS_btn();

         //STEP  0:
         // The user submits a basic search on the home     page
         console.log("STEP 3: The user submits a basic search on the home page");
         await lidlStoreFront.DEfacetCategory().debugTestCase20();
    });

test("DE - 21 - PROD - SEARCH-VIEW | SERP | Facet | Category |" +
    " RESET | BUBBLE reset option | "+
    "Verify user can successfully reset " +
    "the already activated " +
    "1st level category facet" +
    "2nd level category facet" +
    "3nd level category facet" +
    "by category facet bubble reset option. ",
    async ({lidlStoreFront }) => {

         //STEP 2: 
         //CLick on Accept all cookies oneTrust cookie settings button
         console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
         await lidlStoreFront.DECookies().clickOn_AcceptAllCS_btn();

         //STEP  0:
         // The user submits a basic search on the home     page
         console.log("STEP 3: The user submits a basic search on the home page");
         await lidlStoreFront.DEfacetCategory().debugTestCase21();
    });

test("DE - 22 - PROD - SEARCH-VIEW | SERP | Facet | Category |" +
    " RESET | BUBBLE reset option | "+
    "Verify user can successfully reset " +
    "the already activated " +
    "1st level category facet" +
    "2nd level category facet" +
    "3nd level category facet" +
    "by category facet bubble reset option. ",
    async ({lidlStoreFront }) => {

         //STEP 2: 
         //CLick on Accept all cookies oneTrust cookie settings button
         console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
         await lidlStoreFront.DECookies().clickOn_AcceptAllCS_btn();

         //STEP  0:
         // The user submits a basic search on the home     page
         console.log("STEP 3: The user submits a basic search on the home page");
         await lidlStoreFront.DEfacetCategory().debugTestCase22();
    });

test("DE - 23 - PROD - SEARCH-VIEW | SERP | Facet | Category |" +
    " RESET | BUBBLE reset option | "+
    "Verify user can successfully reset " +
    "the already activated " +
    "1st level category facet" +
    "2nd level category facet" +
    "3nd level category facet" +
    "by category facet bubble reset option. ",
    async ({lidlStoreFront }) => {

         //STEP 2: 
         //CLick on Accept all cookies oneTrust cookie settings button
         console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
         await lidlStoreFront.DECookies().clickOn_AcceptAllCS_btn();

         //STEP  0:
         // The user submits a basic search on the home     page
         console.log("STEP 3: The user submits a basic search on the home page");
         await lidlStoreFront.DEfacetCategory().debugTestCase23();
    });

test("DE - 24 - PROD - SEARCH-VIEW | SERP | Facet | Category |" +
    " RESET | BUBBLE reset option | "+
    "Verify user can successfully reset " +
    "the already activated " +
    "1st level category facet" +
    "2nd level category facet" +
    "3nd level category facet" +
    "by category facet bubble reset option. ",
    async ({lidlStoreFront }) => {

         //STEP 2: 
         //CLick on Accept all cookies oneTrust cookie settings button
         console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
         await lidlStoreFront.DECookies().clickOn_AcceptAllCS_btn();

         //STEP  0:
         // The user submits a basic search on the home     page
         console.log("STEP 3: The user submits a basic search on the home page");
         await lidlStoreFront.DEfacetCategory().debugTestCase24();
    }); 