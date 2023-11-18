import { test } from "../../fixtures/lidl-configurator";

     test.only("SK - 1 - PROD - END 2 END | SEARCH-VIEW |SERP | Facet | brand |",
          async ({lidlStoreFront }) => {

     //STEP 2: 
     //CLick on Accept all cookies oneTrust cookie settings button
     console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
     await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn();
     
     //STEP 3:
     // The user submits a basic search on the home page
     console.log("STEP 3: The user submits a basic search on the home page");
     await lidlStoreFront.searchBar().submitSearchQuery("*");

     //STEP  4:
     // The user verifies the brand facet country specific label is per requriments
     console.log("STEP 4: The user verifies the brand facet country specific label is per requriments");
     await lidlStoreFront.SKfacetBrand().verifyBrandFacetLabel();
      
     //STEP 5:
     console.log('STEP 5: Verify the user can activate and deactivate brand facet search functionality via baseic search')
     await lidlStoreFront.SKfacetBrand().veryfyBrandSearchInputBoxCanBeActivatedWithBasicSearch('Parkside');

     //STEP 6: 
     console.log('STEP 6: Check brand facet buttons for show more / show less brand options');
     await lidlStoreFront.SKfacetBrand().verifyBrandFacetShowMoreAndShowLessButtonsFunctionality();
   
     //STEP 7: 
     console.log('STEP 7: Check brand facet buttons for show more / show less brand options');
     await lidlStoreFront.SKfacetBrand().verifyBrandFacetShowMoreAndShowLessButtonsFunctionality();
    
     //STEP 8:
     console.log('STEP 8: Verify the user can activate brand search with term A and aftaer that select relevat checkbox')
     await lidlStoreFront.SKfacetBrand().verifyBasicBrandSearchWithTermA();
     

     });
 