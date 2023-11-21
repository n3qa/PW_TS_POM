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
         await lidlStoreFront.DEfacetSorting().debuggingTest1();
    });


