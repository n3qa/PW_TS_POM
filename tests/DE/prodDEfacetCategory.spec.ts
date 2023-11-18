import { test } from "../../fixtures/lidl-configurator";

     test("SK - 1 -PROD - SEARCH-VIEW | SERP | Facet | Category |" +
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
await lidlStoreFront.SKfacetCategory().debugTestCase1();
});

     test("SK - 2 - PROD - SEARCH-VIEW | SERP | Facet | Category |" +
          " SINGLE increment | TOP > DOWN "+
          "Verify user can successfully navigate " +
          "from 2nd category level " +
          "to 3rd category level",
          async ({lidlStoreFront }) => {

     //STEP 2: 
     //CLick on Accept all cookies oneTrust cookie settings button
     console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
     await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn();

     //STEP  0:
     // The user submits a basic search on the home page
     console.log("STEP 3: The user submits a basic search on the home page");
     await lidlStoreFront.SKfacetCategory().debugTestCase2();
});  
 

     test("SK - 3 - PROD - SEARCH-VIEW | SERP | Facet | Category |" +
          " SINGLE increment | DOWN > TOP "+
          "Verify user can successfully navigate " +
          "from 3rd category level " +
          "to 2nd category level",
          async ({lidlStoreFront }) => {

          //STEP 2: 
          //CLick on Accept all cookies oneTrust cookie settings button
          console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
          await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn();

          //STEP  0:
          // The user submits a basic search on the home page
          console.log("STEP 3: The user submits a basic search on the home page");
          await lidlStoreFront.SKfacetCategory().debugTestCase3();
});  

     test("SK - 4 - PROD - SEARCH-VIEW | SERP | Facet | Category |" +
          " SINGLE increment | DOWN > TOP     "+
          "Verify user can successfully navigate " +
          "from 2nd category level " +
          "to 1st category level",
          async ({lidlStoreFront }) => {

          //STEP 2: 
          //CLick on Accept all cookies oneTrust cookie settings button
          console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
          await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn();

          //STEP  0:
          // The user submits a basic search on the home page
          console.log("STEP 3: The user submits a basic search on the home page");
          await lidlStoreFront.SKfacetCategory().debugTestCase4();
});  
 
     test("SK - 5 - PROD - SEARCH-VIEW | SERP | Facet | Category |" +
               " DOUBLE increment | TOP > DOWN     "+
               "Verify user can successfully navigate " +
               "from 1st category level " +
               "to 3rd category level",
               async ({lidlStoreFront }) => {

          //STEP 2: 
          //CLick on Accept all cookies oneTrust cookie settings button
          console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
          await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn();

          //STEP  0:
          // The user submits a basic search on the home page
          console.log("STEP 3: The user submits a basic search on the home page");
          await lidlStoreFront.SKfacetCategory().debugTestCase5();
          });  

     test("SK - 6 - PROD - SEARCH-VIEW | SERP | Facet | Category |" +
               " Sequential increment | FULL TOP > DOWN     "+
               "Verify user can successfully navigate " +
               "from 1st category level " +
               "from 2nd category level " +
               "to 3rd category level",
               async ({lidlStoreFront }) => {

          //STEP 2: 
          //CLick on Accept all cookies oneTrust cookie settings button
          console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
          await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn();

          //STEP  0:
          // The user submits a basic search on the home page
          console.log("STEP 3: The user submits a basic search on the home page");
          await lidlStoreFront.SKfacetCategory().debugTestCase6();
          });  

          test("SK - 7 - PROD - SEARCH-VIEW | SERP | Facet | Category |" +
               " Sequential increment | FULL DOWN > TOP     "+
               "Verify user can successfully navigate " +
               "from 3rd category level " +
               "to 2nd category level and " +
               "to 1st category level",
               async ({lidlStoreFront }) => {

          //STEP 2: 
          //CLick on Accept all cookies oneTrust cookie settings button
          console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
          await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn();

          //STEP  0:
          // The user submits a basic search on the home page
          console.log("STEP 3: The user submits a basic search on the home page");
          await lidlStoreFront.SKfacetCategory().debugTestCase7();
          }); 

          test("SK - 8 - PROD - SEARCH-VIEW | SERP | Facet | Category |" +
               " RESET | HEADER reset option | "+
               "Verify user can successfully reset " +
               "the already activated category facet" +
               "by category facet header reset option. ",
               async ({lidlStoreFront }) => {

          //STEP 2: 
          //CLick on Accept all cookies oneTrust cookie settings button
          console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
          await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn();

          //STEP  0:
          // The user submits a basic search on the home page
          console.log("STEP 3: The user submits a basic search on the home page");
          await lidlStoreFront.SKfacetCategory().debugTestCase9();
          }); 

          test("SK - 9 - PROD - SEARCH-VIEW | SERP | Facet | Category |" +
               " RESET | BUBBLE reset option | "+
               "Verify user can successfully reset " +
               "the already activated " +
               "second level category facet" +
               "by category facet bubble reset option. ",
               async ({lidlStoreFront }) => {

          //STEP 2: 
          //CLick on Accept all cookies oneTrust cookie settings button
          console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
          await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn();

          //STEP  0:
          // The user submits a basic search on the home page
          console.log("STEP 3: The user submits a basic search on the home page");
          await lidlStoreFront.SKfacetCategory().debugTestCase9();
          }); 
        
          test("SK - 10 - PROD - SEARCH-VIEW | SERP | Facet | Category |" +
               " RESET | BUBBLE reset option | "+
               "Verify user can successfully reset " +
               "the already activated " +
               "3rd level category facet" +
               "by category facet bubble reset option. ",
               async ({lidlStoreFront }) => {

          //STEP 2: 
          //CLick on Accept all cookies oneTrust cookie settings button
          console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
          await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn();

          //STEP  0:
          // The user submits a basic search on the home page
          console.log("STEP 3: The user submits a basic search on the home page");
          await lidlStoreFront.SKfacetCategory().debugTestCase10();
          }); 

          test("SK - 11 - PROD - SEARCH-VIEW | SERP | Facet | Category |" +
               " RESET | BUBBLE reset option | "+
               "Verify user can successfully reset " +
               "the already activated " +
               "3rd level category facet" +
               "by category facet bubble reset option. ",
               async ({lidlStoreFront }) => {

          //STEP 2: 
          //CLick on Accept all cookies oneTrust cookie settings button
          console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
          await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn();

          //STEP  0:
          // The user submits a basic search on the home page
          console.log("STEP 3: The user submits a basic search on the home page");
          await lidlStoreFront.SKfacetCategory().debugTestCase11();
          }); 

          test("SK - 12 - PROD - SEARCH-VIEW | SERP | Facet | Category |" +
               " RESET | BUBBLE reset option | "+
               "Verify user can successfully reset " +
               "the already activated " +
               "2nd level category facet" +
               "by category facet bubble reset option. ",
               async ({lidlStoreFront }) => {

          //STEP 2: 
          //CLick on Accept all cookies oneTrust cookie settings button
          console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
          await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn();

          //STEP  0:
          // The user submits a basic search on the home page
          console.log("STEP 3: The user submits a basic search on the home page");
          await lidlStoreFront.SKfacetCategory().debugTestCase12();
          }); 

          test("SK - 13 - PROD - SEARCH-VIEW | SERP | Facet | Category |" +
          " RESET | BUBBLE reset option | "+
          "Verify user can successfully reset " +
          "the already activated " +
          "2nd level category facet" +
          "by category facet bubble reset option. ",
          async ({lidlStoreFront }) => {

          //STEP 2: 
          //CLick on Accept all cookies oneTrust cookie settings button
          console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
          await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn();

          //STEP  0:
          // The user submits a basic search on the home page
          console.log("STEP 3: The user submits a basic search on the home page");
          await lidlStoreFront.SKfacetCategory().debugTestCase13();
     }); 

     test("SK - 14 - PROD - SEARCH-VIEW | SERP | Facet | Category |" +
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
     await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn();

     //STEP  0:
     // The user submits a basic search on the home     page
     console.log("STEP 3: The user submits a basic search on the home page");
     await lidlStoreFront.SKfacetCategory().debugTestCase14();
}); 


test("SK - 15 - PROD - SEARCH-VIEW | SERP | Facet | Category |" +
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
await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn();

//STEP  0:
// The user submits a basic search on the home     page
console.log("STEP 3: The user submits a basic search on the home page");
await lidlStoreFront.SKfacetCategory().debugTestCase15();
}); 

test("SK - 16 - PROD - SEARCH-VIEW | SERP | Facet | Category |" +
          " RESET | BUBBLE reset option | "+
          "Verify user can successfully reset " +
          "the already activated " +
          "1st level category facet" + +
          "by category facet bubble reset option. ",
          async ({lidlStoreFront }) => {

     //STEP 2: 
     //CLick on Accept all cookies oneTrust cookie settings button
     console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
     await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn();

     //STEP  0:
     // The user submits a basic search on the home     page
     console.log("STEP 3: The user submits a basic search on the home page");
     await lidlStoreFront.SKfacetCategory().debugTestCase16();
}); 

test("SK - 17 - PROD - SEARCH-VIEW | SERP | Facet | Category |" +
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
     await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn();

     //STEP  0:
     // The user submits a basic search on the home     page
     console.log("STEP 3: The user submits a basic search on the home page");
     await lidlStoreFront.SKfacetCategory().debugTestCase17();
}); 

test("SK - 18 - PROD - SEARCH-VIEW | SERP | Facet | Category |" +
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
     await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn();

     //STEP  0:
     // The user submits a basic search on the home     page
     console.log("STEP 3: The user submits a basic search on the home page");
     await lidlStoreFront.SKfacetCategory().debugTestCase18();
}); 

test("SK - 19 - PROD - SEARCH-VIEW | SERP | Facet | Category |" +
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
     await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn();

     //STEP  0:
     // The user submits a basic search on the home     page
     console.log("STEP 3: The user submits a basic search on the home page");
     await lidlStoreFront.SKfacetCategory().debugTestCase19();
}); 

test("SK - 20 - PROD - SEARCH-VIEW | SERP | Facet | Category |" +
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
     await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn();

     //STEP  0:
     // The user submits a basic search on the home     page
     console.log("STEP 3: The user submits a basic search on the home page");
     await lidlStoreFront.SKfacetCategory().debugTestCase20();
}); 

test("SK - 21 - PROD - SEARCH-VIEW | SERP | Facet | Category |" +
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
     await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn();

     //STEP  0:
     // The user submits a basic search on the home     page
     console.log("STEP 3: The user submits a basic search on the home page");
     await lidlStoreFront.SKfacetCategory().debugTestCase21();
}); 

test("SK - 22 - PROD - SEARCH-VIEW | SERP | Facet | Category |" +
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
     await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn();

     //STEP  0:
     // The user submits a basic search on the home     page
     console.log("STEP 3: The user submits a basic search on the home page");
     await lidlStoreFront.SKfacetCategory().debugTestCase22();
}); 

test("SK - 23 - PROD - SEARCH-VIEW | SERP | Facet | Category |" +
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
     await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn();

     //STEP  0:
     // The user submits a basic search on the home     page
     console.log("STEP 3: The user submits a basic search on the home page");
     await lidlStoreFront.SKfacetCategory().debugTestCase23();
}); 

test("SK - 24 - PROD - SEARCH-VIEW | SERP | Facet | Category |" +
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
     await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn();

     //STEP  0:
     // The user submits a basic search on the home     page
     console.log("STEP 3: The user submits a basic search on the home page");
     await lidlStoreFront.SKfacetCategory().debugTestCase24();
}); 