import { test } from "../../fixtures/lidl-configurator";
import { expect } from "playwright/test";

     test.only("SK - 1 -PROD - SEARCH-VIEW | SERP | Facet | Category |" +
          " SINGLE increment | TOP > DOWN "+
          "Verify user can successfully navigate " +
          "from root category level " +
          "to 1st category level",
          async ({lidlStoreFront }) => {

          //STEP 2: 
          //CLick on Accept all cookies oneTrust cookie settings button
          console.log("*** STEP 2: CLick on oneTrust accept all cookies settings button");
          await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn();

          //STEP 3:
          // The user submits a basic search on the home page
          console.log("*** STEP 3: The user submits a basic search on the home page");
          await lidlStoreFront.searchBar().submitSearchQuery("*");

          //STEP 4:
          // The user verifies that initial category facet props are presented as per requirements
          console.log('*** STEP 4: The user verifies that initial category facet props are presented as per requirements');
          //4.1. Validate category facet initial state (expanded) presented  
          console.log('-> Validate category facet initial state (expanded) presented.');
          await lidlStoreFront.SKsrp().validate_facet_category_state_expanded();
          // 4.2. THere is no header reset option
          console.log('-> Validate there is no header reset option when the facet is not active')
          await lidlStoreFront.SKfacetCategory().validate_no_header_reset_option_is_shown();      
          //4.3. There is no bubble reset option
          console.log("-> Validate there is no bubble reset option when the facet is not active")
          await lidlStoreFront.SKfacetCategory().validate_no_bubble_reset_option_for_moda_is_shown();
          //4.4. There is no navigation reset button ( delete all bubbles)
          console.log("-> Validate  that there is no navigation reset all button ( delete all bubbles)")
          await lidlStoreFront.SKfacetCategory().validate_no_navigation_reset_all_bubbles_button_is_shown();

         
          //STEP 5 
          // THe user activates the category facet by navigating from root category to first level category
          console.log('*** STEP 5: THe user activates the category facet by navigating from root/first category to second level category');
          await lidlStoreFront.SKfacetCategory().first_level_moda().click();
               
         
          //STEP 6 
          //Validate category facet is activated by selection of first level category node Moda
          //6.1. Valdiate category facet is activated
          console.log('*** STEP 6: Validate category facet is activated by selection of first level category node Moda')
          //6.2. Validate category facet initial state (expanded) presented  
          console.log('-> Validate category facet initial state (expanded) presented.');
          await lidlStoreFront.SKsrp().validate_facet_category_state_expanded();
          //6.3. THere is a header reset option
          console.log('-> Validate there is a header reset option when the facet is active')
          await lidlStoreFront.SKfacetCategory().validate_header_reset_option_is_shown();      
          //6.4. There is a bubble reset option
          console.log("-> Validate there is a bubble reset option when the facet is active")
          await lidlStoreFront.SKfacetCategory().validate_bubble_reset_option_for_moda_is_shown();
          //6.5. There is a navigation reset button ( delete all bubbles)
          console.log("-> Validate  that there is a navigation reset all button ( delete all bubbles)")
          await lidlStoreFront.SKfacetCategory().validate_navigation_reset_all_bubbles_button_is_shown();    
          
          //7 Validation of the category tree nodes
          console.log('*** STEP 7: Validation of the category tree nodes')
          console.log("-> Validate  that there is a navigation reset all button ( delete all bubbles)")
          await lidlStoreFront.SKfacetCategory().validate_no_first_level_node_for_workshop_and_garden_is_shown();
          //7.4. Validate 3rd navitation node is presented for the user and not active
          console.log('-> Validate 3rd navitation node is presented for the user and not active')
          const isNotSelected = lidlStoreFront.SKfacetCategory().second_level_women_moda().getAttribute('');
          await expect(lidlStoreFront.SKfacetCategory().second_level_women_moda()).toHaveAttribute
         
          //category-facet-Dámska móda-notSelected
          //7.4. Validate 3rd navitation node is presented for the user
      
          
   
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