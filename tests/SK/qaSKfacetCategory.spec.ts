     import { test } from "../../fixtures/lidl-configurator";
     import { expect } from "playwright/test";
     test("SK - 1 - QA - SEARCH-VIEW | SERP | Facet | Category |" +
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
 
         //STEP 7 
         //Validation of the category tree nodes
         console.log('*** STEP 7: Validation of the category tree nodes')
         //7.1.Validate not relevant first level nodes are not shown
         console.log("-> Validate not relevant root level nodes are not shown")
         await lidlStoreFront.SKfacetCategory().validate_no_first_level_node_for_workshop_and_garden_is_shown();
         //7.2. Validate 2nd navitation node is presented for the user
         console.log('-> Validate 2nd navitation node is presented for the user')
         await lidlStoreFront.SKfacetCategory().validate_second_level_node_for_women_moda_is_shown();
 
     });
 
 test("SK - 2 - QA - SEARCH-VIEW | SERP | Facet | Category |" +
     " SINGLE increment | TOP > DOWN "+
     "Verify user can successfully navigate " +
     "from 1st category level " +
     "to 2nd category level",
     async ({lidlStoreFront }) => {
 
         //STEP 2: 
         //CLick on Accept all cookies oneTrust cookie settings button
         console.log("*** STEP 2: CLick on oneTrust accept all cookies settings button");
         await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn();
 
         //STEP 3:
         // The user navigates to predefined SRP page
         console.log('*** STEP 3: The user goes to an already activated SRP with category facet')
         await lidlStoreFront.SKfacetCategory().goto('https://www.lidl.sk/q/search?variant=b&category=M%C3%B3da&idsOnly=false&QAuctsOnly=false')
 
         //STEP 4 
         //Validate category facet is already activated by 
         //4.1. Valdiate category facet is activated
         console.log('*** STEP 4: Validate category facet is already activated ')
         //4.2. Validate category facet initial state (expanded) presented  
         console.log('-> Validate category facet state is expanded presented.');
         await lidlStoreFront.SKsrp().validate_facet_category_state_expanded();
         //4.3. THere is a header reset option
         console.log('-> Validate there is a header reset option when the facet is active')
         await lidlStoreFront.SKfacetCategory().validate_header_reset_option_is_shown();
         //4.4. There is a bubble reset option
         console.log("-> Validate there is a bubble reset option when the facet is active")
         await lidlStoreFront.SKfacetCategory().validate_bubble_reset_option_for_moda_is_shown();
         //4.5. There is a navigation reset button ( delete all bubbles)
         console.log("-> Validate  that there is a navigation reset all button ( delete all bubbles)")
         await lidlStoreFront.SKfacetCategory().validate_navigation_reset_all_bubbles_button_is_shown();
 
 
         //STEP 5 
         //Validate category facet is activated by selection of third level category node XXL Women Moda
         await lidlStoreFront.SKfacetCategory().second_level_women_moda().click();
 
         //STEP 7: 
         //Validate category facet is activated by 2nd level category node
         //7.1. Validate category facet initial state (expanded) presented  
         console.log('*** STEP 7: Validate category facet is activated by 2nd level category node')
         console.log('-> Validate category facet state is expanded presented.');
         await lidlStoreFront.SKsrp().validate_facet_category_state_expanded();
         //7.2. THere is a header reset option
         console.log('-> Validate there is a header reset option when the facet is active')
         await lidlStoreFront.SKfacetCategory().validate_header_reset_option_is_shown();
         //7.3. There is a bubble reset option
         console.log("-> Validate there is a bubble reset option when the facet is active")
         await lidlStoreFront.SKfacetCategory().validate_bubble_reset_option_for_women_moda_is_shown();
         //7.4. There is a navigation reset button ( delete all bubbles)
         console.log("-> Validate  that there is a navigation reset all button ( delete all bubbles)")
         await lidlStoreFront.SKfacetCategory().validate_navigation_reset_all_bubbles_button_is_shown();
 
     });
 
 test("SK - 3 - QA - SEARCH-VIEW | SERP | Facet | Category |" +
     " SINGLE increment | DOWN > TOP "+
     "Verify user can successfully navigate " +
     "from 2nd category level " +
     "to 3rd category level",
     async ({lidlStoreFront }) => {
 
         //STEP 2: 
         //CLick on Accept all cookies oneTrust cookie settings button
         console.log("*** STEP 2: CLick on oneTrust accept all cookies settings button");
         await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn();
 
         //STEP 3:
         // The user navigates to predefined SRP page
         console.log('*** STEP 3: The user goes to an already activated SRP with category facet')
         await lidlStoreFront.SKfacetCategory().goto('https://www.lidl.sk/q/search?variant=b&category=M%C3%B3da%2FD%C3%A1mska+m%C3%B3da&idsOnly=false&QAuctsOnly=false');
 
         //4.1. Validate category facet initial state (expanded) presented  
         console.log("*** STEP 4: Validate category iniital state for already selected 2nd level category navigation node")
         console.log('-> Validate category facet state is expanded presented.');
         await lidlStoreFront.SKsrp().validate_facet_category_state_expanded();
         //4.2. THere is a header reset option
         console.log('-> Validate there is a header reset option when the facet is active')
         await lidlStoreFront.SKfacetCategory().validate_header_reset_option_is_shown();
         //4.3. There is a bubble reset option
         console.log("-> Validate there is a bubble reset option when the facet is active")
         await lidlStoreFront.SKfacetCategory().validate_bubble_reset_option_for_women_moda_is_shown();
         //4.4. There is a navigation reset button ( delete all bubbles)
         console.log("-> Validate  that there is a navigation reset all button ( delete all bubbles)")
         await lidlStoreFront.SKfacetCategory().validate_navigation_reset_all_bubbles_button_is_shown();
 
 
         //STEP 5
         // The user clicks on 2nd level navigation node  
         console.log('*** STEP 5: The user clicks on 3rd level navigation node  ');
         await lidlStoreFront.SKfacetCategory().third_level_xxx_women_moda().click();
 
         //STEP 6 
         //Validate category facet is activated by second level category level node MODA
         console.log('*** STEP 6: Validate category facet is activated by 3rd level category level node WOMEN MODA')
 
         //6.1. Valdiate category facet is activated
         console.log('*** STEP 4: Validate category facet is already activated ')
         //6.2. Validate category facet initial state (expanded) presented  
         console.log('-> Validate category facet state is expanded presented.');
         await lidlStoreFront.SKsrp().validate_facet_category_state_expanded();
         //6.3. THere is a header reset option
         console.log('-> Validate there is a header reset option when the facet is active')
         await lidlStoreFront.SKfacetCategory().validate_header_reset_option_is_shown();
         //6.4. There is a bubble reset option
         console.log("-> Validate there is a bubble reset option when the facet is active")
         await lidlStoreFront.SKfacetCategory().validate_bubble_reset_option_for_xxxl_women_moda_is_shown();
         //6.5. There is a navigation reset button ( delete all bubbles)
         console.log("-> Validate  that there is a navigation reset all button ( delete all bubbles)")
         await lidlStoreFront.SKfacetCategory().validate_navigation_reset_all_bubbles_button_is_shown();
     });
 
 test("SK - 4 - QA - SEARCH-VIEW | SERP | Facet | Category |" +
     " SINGLE increment | DOWN > TOP     "+
     "Verify user can successfully navigate " +
     "from 2nd category level " +
     "to 1st category level",
     async ({lidlStoreFront }) => {
 
         //STEP 2: 
         //CLick on Accept all cookies oneTrust cookie settings button
         console.log("*** STEP 2: CLick on oneTrust accept all cookies settings button");
         await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn();
 
         //STEP 3:
         // The user navigates to predefined SRP page
         console.log('*** STEP 3: The user goes to an already activated SRP with category facet')
         await lidlStoreFront.SKfacetCategory().goto('https://www.lidl.sk/q/search?variant=b&category=M%C3%B3da%2FD%C3%A1mska+m%C3%B3da&idsOnly=false&QAuctsOnly=false');
 
         //4.1. Validate category facet initial state (expanded) presented  
         console.log("*** STEP 4: Validate category inital state for already selected 2nd level category navigation node")
         console.log('-> Validate category facet state is expanded presented.');
         await lidlStoreFront.SKsrp().validate_facet_category_state_expanded();
         //4.2. THere is a header reset option
         console.log('-> Validate there is a header reset option when the facet is active')
         await lidlStoreFront.SKfacetCategory().validate_header_reset_option_is_shown();
         //4.3. There is a bubble reset option
         console.log("-> Validate there is a bubble reset option when the facet is active")
         await lidlStoreFront.SKfacetCategory().validate_bubble_reset_option_for_women_moda_is_shown();
         //4.4. There is a navigation reset button ( delete all bubbles)
         console.log("-> Validate  that there is a navigation reset all button ( delete all bubbles)")
         await lidlStoreFront.SKfacetCategory().validate_navigation_reset_all_bubbles_button_is_shown();
 
 
         //STEP 5
         // The user clicks on 2nd level navigation node  
         console.log('*** STEP 5: The user clicks on 1st level navigation node  ');
         await lidlStoreFront.SKfacetCategory().first_level_moda().click();
 
         //STEP 6 
         //Validate category facet is activated by frst level category level node MODA
         console.log('*** STEP 6: Validate category facet is activated by 1st level category level node WOMEN MODA')
 
         //6.1. Valdiate category facet is activated
         console.log('*** STEP 4: Validate category facet is already activated ')
         //6.2. Validate category facet initial state (expanded) presented  
         console.log('-> Validate category facet state is expanded.');
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
 
     });
 
 test("SK - 5 - QA - SEARCH-VIEW | SERP | Facet | Category |" +
     " DOUBLE increment | TOP > DOWN     "+
     "Verify user can successfully navigate " +
     "from 1st category level " +
     "to 2nd category level " +
     "to 3rd category level " +
     "and jump back to 1st level",
     async ({lidlStoreFront }) => {
 
         //STEP 2: 
         //CLick on Accept all cookies oneTrust cookie settings button
         console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
         await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn();
 
         // ****************
         // FROM ROOT TO 1st
         //****************  
 
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
 
         //STEP 7 
         //Validation of the category tree nodes
         console.log('*** STEP 7: Validation of the category tree nodes')
         //7.1.Validate not relevant first level nodes are not shown
         console.log("-> Validate not relevant root level nodes are not shown")
         await lidlStoreFront.SKfacetCategory().validate_no_first_level_node_for_workshop_and_garden_is_shown();
         //7.2. Validate 2nd navitation node is presented for the user
         console.log('-> Validate 2nd navitation node is presented for the user')
         await lidlStoreFront.SKfacetCategory().validate_second_level_node_for_women_moda_is_shown();
 
         // ****************
         // FROM 1st TO 2nd
         //****************   
 
         //STEP 8 
         //Validate category facet is activated by selection of third level category node XXL Women Moda
         console.log('*** STEP 8: Validate category facet is activated by selection of 2nd level category node Women Moda');
         await lidlStoreFront.SKfacetCategory().second_level_women_moda().click();
 
         //STEP 9: 
         //Validate category facet is activated by 2nd level category node
         //9.1. Validate category facet initial state (expanded) presented  
         console.log('*** STEP 9: Validate category facet is activated by 2nd level category node')
         console.log('-> Validate category facet state is expanded presented.');
         await lidlStoreFront.SKsrp().validate_facet_category_state_expanded();
         //9.2. THere is a header reset option
         console.log('-> Validate there is a header reset option when the facet is active')
         await lidlStoreFront.SKfacetCategory().validate_header_reset_option_is_shown();
         //9.3. There is a bubble reset option
         console.log("-> Validate there is a bubble reset option when the facet is active")
         await lidlStoreFront.SKfacetCategory().validate_bubble_reset_option_for_women_moda_is_shown();
         //9.4. There is a navigation reset button ( delete all bubbles)
         console.log("-> Validate  that there is a navigation reset all button ( delete all bubbles)")
         await lidlStoreFront.SKfacetCategory().validate_navigation_reset_all_bubbles_button_is_shown();
 
         // ****************
         // FROM 2nd TO 3rd
         //****************  
 
         //STEP 10
         // The user clicks on 3rd level navigation node  
         console.log('*** STEP 10: The user clicks on 3rd level navigation node  ');
         await lidlStoreFront.SKfacetCategory().third_level_xxx_women_moda().click();
 
         //STEP 11 
         //Validate category facet is activated by second level category level node MODA
         console.log('*** STEP 11: Validate category facet is activated by 3rd level category level node WOMEN MODA')
 
         //11.1. Validate category facet initial state (expanded) presented  
         console.log('-> Validate category facet state is expanded presented.');
         await lidlStoreFront.SKsrp().validate_facet_category_state_expanded();
         //11.2. THere is a header reset option
         console.log('-> Validate there is a header reset option when the facet is active')
         await lidlStoreFront.SKfacetCategory().validate_header_reset_option_is_shown();
         //11.3. There is a bubble reset option
         console.log("-> Validate there is a bubble reset option when the facet is active")
         await lidlStoreFront.SKfacetCategory().validate_bubble_reset_option_for_xxxl_women_moda_is_shown();
         //11.4. There is a navigation reset button ( delete all bubbles)
         console.log("-> Validate  that there is a navigation reset all button ( delete all bubbles)")
         await lidlStoreFront.SKfacetCategory().validate_navigation_reset_all_bubbles_button_is_shown();
 
         // ****************
         // FROM 3rd to 1st
         //****************       
         //STEP 12
         // The user clicks on 1st level navigation node  
         console.log('*** STEP 11: The user clicks on 1st level navigation node  ');
         await lidlStoreFront.SKfacetCategory().first_level_moda().click();
 
         //STEP  
         // Valdiate category facet is activated
         console.log('*** STEP 13: Validate category facet is already activated ')
         //13.1. Validate category facet initial state (expanded) presented  
         console.log('-> Validate category facet state is expanded.');
         await lidlStoreFront.SKsrp().validate_facet_category_state_expanded();
         //13.2. THere is a header reset option
         console.log('-> Validate there is a header reset option when the facet is active')
         await lidlStoreFront.SKfacetCategory().validate_header_reset_option_is_shown();
         //13.3. There is a bubble reset option
         console.log("-> Validate there is a bubble reset option when the facet is active")
         await lidlStoreFront.SKfacetCategory().validate_bubble_reset_option_for_moda_is_shown();
         //13.4. There is a navigation reset button ( delete all bubbles)
         console.log("-> Validate  that there is a navigation reset all button ( delete all bubbles)")
         await lidlStoreFront.SKfacetCategory().validate_navigation_reset_all_bubbles_button_is_shown();
 
 
     });
 
 test("SK - 6 - QA - SEARCH-VIEW | SERP | Facet | Category |" +
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
 
         // ****************
         // FROM ROOT TO 1st
         //****************  
 
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
 
         //STEP 7 
         //Validation of the category tree nodes
         console.log('*** STEP 7: Validation of the category tree nodes')
         //7.1.Validate not relevant first level nodes are not shown
         console.log("-> Validate not relevant root level nodes are not shown")
         await lidlStoreFront.SKfacetCategory().validate_no_first_level_node_for_workshop_and_garden_is_shown();
         //7.2. Validate 2nd navitation node is presented for the user
         console.log('-> Validate 2nd navitation node is presented for the user')
         await lidlStoreFront.SKfacetCategory().validate_second_level_node_for_women_moda_is_shown();
 
         // ****************
         // FROM 1st TO 2nd
         //****************   
 
         //STEP 8 
         //Validate category facet is activated by selection of third level category node XXL Women Moda
         console.log('*** STEP 8: Validate category facet is activated by selection of 2nd level category node Women Moda');
         await lidlStoreFront.SKfacetCategory().second_level_women_moda().click();
 
         //STEP 9: 
         //Validate category facet is activated by 2nd level category node
         //9.1. Validate category facet initial state (expanded) presented  
         console.log('*** STEP 9: Validate category facet is activated by 2nd level category node')
         console.log('-> Validate category facet state is expanded presented.');
         await lidlStoreFront.SKsrp().validate_facet_category_state_expanded();
         //9.2. THere is a header reset option
         console.log('-> Validate there is a header reset option when the facet is active')
         await lidlStoreFront.SKfacetCategory().validate_header_reset_option_is_shown();
         //9.3. There is a bubble reset option
         console.log("-> Validate there is a bubble reset option when the facet is active")
         await lidlStoreFront.SKfacetCategory().validate_bubble_reset_option_for_women_moda_is_shown();
         //9.4. There is a navigation reset button ( delete all bubbles)
         console.log("-> Validate  that there is a navigation reset all button ( delete all bubbles)")
         await lidlStoreFront.SKfacetCategory().validate_navigation_reset_all_bubbles_button_is_shown();
 
         // ****************
         // FROM 2nd TO 3rd
         //****************  
 
         //STEP 10
         // The user clicks on 3rd level navigation node  
         console.log('*** STEP 10: The user clicks on 3rd level navigation node  ');
         await lidlStoreFront.SKfacetCategory().third_level_xxx_women_moda().click();
 
         //STEP 11 
         //Validate category facet is activated by second level category level node MODA
         console.log('*** STEP 11: Validate category facet is activated by 3rd level category level node WOMEN MODA')
 
         //11.1. Validate category facet initial state (expanded) presented  
         console.log('-> Validate category facet state is expanded presented.');
         await lidlStoreFront.SKsrp().validate_facet_category_state_expanded();
         //11.2. THere is a header reset option
         console.log('-> Validate there is a header reset option when the facet is active')
         await lidlStoreFront.SKfacetCategory().validate_header_reset_option_is_shown();
         //11.3. There is a bubble reset option
         console.log("-> Validate there is a bubble reset option when the facet is active")
         await lidlStoreFront.SKfacetCategory().validate_bubble_reset_option_for_xxxl_women_moda_is_shown();
         //11.4. There is a navigation reset button ( delete all bubbles)
         console.log("-> Validate  that there is a navigation reset all button ( delete all bubbles)")
         await lidlStoreFront.SKfacetCategory().validate_navigation_reset_all_bubbles_button_is_shown();
 
     });
 
 test("SK - 7 - QA - SEARCH-VIEW | SERP | Facet | Category |" +
     " Sequential increment | FULL DOWN > TOP     "+
     "Verify user can successfully navigate " +
     "from 3rd category level " +
     "to 2nd category level and " +
     "to 1st category level",
     async ({lidlStoreFront }) => {
 
         //STEP 2: 
         //CLick on Accept all cookies oneTrust cookie settings button
         console.log("*** STEP 2: CLick on oneTrust accept all cookies settings button");
         await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn();
 
         //STEP 3:
         // The user navigates to predefined SRP page
         console.log('*** STEP 3: The user goes to an already activated SRP with category facet')
         await lidlStoreFront.SKfacetCategory().goto('https://www.lidl.sk/q/search?variant=b&category=M%C3%B3da%2FD%C3%A1mska+m%C3%B3da%2FD%C3%A1mska+XXL+m%C3%B3da&idsOnly=false&QAuctsOnly=false');
 
         // ****************
         // FROM 3rd TO 2nd
         //****************
 
         //STEP 4
         //Validate category facet is activated by 3rd level category level node MODA
         console.log('*** STEP 4: Validate category facet is activated by 3rd level category level node WOMEN MODA')
 
         //4.1. Validate category facet initial state (expanded) presented  
         console.log('-> Validate category facet state is expanded presented.');
         await lidlStoreFront.SKsrp().validate_facet_category_state_expanded();
         //4.2. THere is a header reset option
         console.log('-> Validate there is a header reset option when the facet is active')
         await lidlStoreFront.SKfacetCategory().validate_header_reset_option_is_shown();
         //4.3. There is a bubble reset option
         console.log("-> Validate there is a bubble reset option when the facet is active")
         await lidlStoreFront.SKfacetCategory().validate_bubble_reset_option_for_xxxl_women_moda_is_shown();
         //4.4. There is a navigation reset button ( delete all bubbles)
         console.log("-> Validate  that there is a navigation reset all button ( delete all bubbles)")
         await lidlStoreFront.SKfacetCategory().validate_navigation_reset_all_bubbles_button_is_shown();
 
         //STEP 5 
         // The user clicks on second level  category node
         console.log('*** STEP 5: The user clicks on second level  category node')
         await lidlStoreFront.SKfacetCategory().second_level_women_moda().click();
 
         //STEP 6
         // Validate the user has activate category facet via 2nd level category node
         console.log('*** STEP 6: Validate the user has activate category facet via 2nd level category node');
         //6.1. Validate category facet initial state (expanded) presented  
         console.log('-> Validate category facet state is expanded presented.');
         await lidlStoreFront.SKsrp().validate_facet_category_state_expanded();
         //6.2. THere is a header reset option
         console.log('-> Validate there is a header reset option when the facet is active')
         await lidlStoreFront.SKfacetCategory().validate_header_reset_option_is_shown();
         //6.3. There is a bubble reset option
         console.log("-> Validate there is a bubble reset option when the facet is active")
         await lidlStoreFront.SKfacetCategory().validate_bubble_reset_option_for_women_moda_is_shown();
         //6.4. There is a navigation reset button ( delete all bubbles)
         console.log("-> Validate  that there is a navigation reset all button ( delete all bubbles)")
         await lidlStoreFront.SKfacetCategory().validate_navigation_reset_all_bubbles_button_is_shown();
 
         // ****************
         // FROM 2nd TO 1st
         //****************
 
         await lidlStoreFront.SKfacetCategory().first_level_moda().click();
 
         //STEP 7
         //Validate category facet is activated by selection of first level category node Moda
         //7.1. Valdiate category facet is activated
         console.log('*** STEP 7: Validate category facet is activated by selection of first level category node Moda')
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
 
         //STEP 7 
         //Validation of the category tree nodes
         console.log('*** STEP 8: Validation of the category tree nodes')
         //7.1.Validate not relevant first level nodes are not shown
         console.log("-> Validate not relevant root level nodes are not shown")
         await lidlStoreFront.SKfacetCategory().validate_no_first_level_node_for_workshop_and_garden_is_shown();
         //7.2. Validate 2nd navitation node is presented for the user
         console.log('-> Validate 2nd navitation node is presented for the user')
         await lidlStoreFront.SKfacetCategory().validate_second_level_node_for_women_moda_is_shown();
 
     });
 
 test("SK - 8 - QA - SEARCH-VIEW | SERP | Facet | Category |" +
     " Horizontal Nav | Header Reset option | "+
     "Verify user can successfully navigate " +
     "horizontaly in first level category tree" +
     "and reset a first level node Moda " +
     "by header reset option ",
     async ({lidlStoreFront }) => {
 
         //STEP 2: 
         //CLick on Accept all cookies oneTrust cookie settings button
         console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
         await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn();
 
         //STEP 3:
         // The user submits a basic search on the home page
         console.log("*** STEP 3: The user submits a basic search on the home page");
         await lidlStoreFront.searchBar().submitSearchQuery("*");
 
         //STEP 4: 
         //CLick on Accept all cookies oneTrust cookie settings button
         console.log('*** STEP 4: The user clicks on first level category node with label: Moda');
         await lidlStoreFront.SKfacetCategory().first_level_moda().click();
 
         //STEP 5
         //Validate category facet is activated by selection of first level category node Moda
         console.log('*** STEP 5: Validate category facet is activated by selection of first level category node Moda')
         //5.1. Validate category facet initial state (expanded) presented  
         console.log('-> Validate category facet initial state (expanded) presented.');
         await lidlStoreFront.SKsrp().validate_facet_category_state_expanded();
         //5.2. THere is a header reset option
         console.log('-> Validate there is a header reset option when the facet is active')
         await lidlStoreFront.SKfacetCategory().validate_header_reset_option_is_shown();
         //5.3. There is a bubble reset option
         console.log("-> Validate there is a bubble reset option when the facet is active")
         await lidlStoreFront.SKfacetCategory().validate_bubble_reset_option_for_moda_is_shown();
         //5.4. There is a navigation reset button ( delete all bubbles)
         console.log("-> Validate  that there is a navigation reset all button ( delete all bubbles)")
         await lidlStoreFront.SKfacetCategory().validate_navigation_reset_all_bubbles_button_is_shown();
 
         //STEP 6 
         //Validation of the category tree nodes
         console.log('*** STEP 6: Validation of the category tree nodes')
         //6.1.Validate not relevant first level nodes are not shown
         console.log("-> Validate not relevant root level nodes are not shown")
         await lidlStoreFront.SKfacetCategory().validate_no_first_level_node_for_workshop_and_garden_is_shown();
         //6.2. Validate 2nd navitation node is presented for the user
         console.log('-> Validate 2nd navitation node is presented for the user')
         await lidlStoreFront.SKfacetCategory().validate_second_level_node_for_women_moda_is_shown();
 
         //***************
         // RESET and click on other 1st level sybling
         //**************
 
         //STEP: 7
         // The user reset the category facet by header reset option
         console.log('*** STEP 7 : The user reset the category facet by header reset option');
         await lidlStoreFront.SKfacetCategory().header_reset_btn().click();
 
         //STEP: 8
         // the user activates the category facet by selecting first level category node
         console.log('*** STEAP 8: The user activates the category facet by selecting first level category node');
         await lidlStoreFront.SKfacetCategory().first_level_sports_and_free_time().click();
 
         //STEP 9
         //Validate category facet is activated by selection of first level category node Moda
         console.log('*** STEP 9: Validate category facet is activated by selection of first level category node sports and free time')
         //9.1. Validate category facet initial state (expanded) presented  
         console.log('-> Validate category facet initial state (expanded) presented.');
         await lidlStoreFront.SKsrp().validate_facet_category_state_expanded();
         //9.2. THere is a header reset option
         console.log('-> Validate there is a header reset option when the facet is active')
         await lidlStoreFront.SKfacetCategory().validate_header_reset_option_is_shown();
         //9.3. There is a bubble reset option
         console.log("-> Validate there is a bubble reset option when the facet is active")
         await lidlStoreFront.SKfacetCategory().validate_bubble_reset_option_for_first_level_sports_and_free_time_is_shown();
         //9.4. There is a navigation reset button ( delete all bubbles)
         console.log("-> Validate  that there is a navigation reset all button ( delete all bubbles)")
         await lidlStoreFront.SKfacetCategory().validate_navigation_reset_all_bubbles_button_is_shown();
 
         //STEP 10 
         //Validation of the category tree nodes
         console.log('*** STEP 10: Validation of the category tree nodes')
         //10.1.Validate not relevant first level nodes are not shown
         console.log("-> Validate not relevant root level nodes are not shown")
         await lidlStoreFront.SKfacetCategory().validate_no_first_level_node_for_workshop_and_garden_is_shown();
 
 
     });
 
 test("SK - 9 - QA - SEARCH-VIEW | SERP | Facet | Category |" +
     " RESET | BUBBLE reset option | "+
     "Verify user can successfully reset " +
     "the already activated " +
     "1st level category facet" +
     "by category facet bubble reset option. ",
     async ({lidlStoreFront }) => {
 
         //STEP 2: 
         //CLick on Accept all cookies oneTrust cookie settings button
         console.log("STEP 2: CLick on oneTrust accept all cookies settings button");
         await lidlStoreFront.SKCookies().clickOn_AcceptAllCS_btn();
 
         //STEP 3:
         // The user navigates to an already activated category facet by first level node
         console.log("*** STEP 3: The user navigates to an already activated category facet by first level node");
         await lidlStoreFront.SKfacetCategory().goto('https://www.lidl.sk/q/search?variant=b&category=M%C3%B3da&idsOnly=false&QAuctsOnly=false');
 
         //STEP 4
         //Validate category facet is activated by selection of first level category node Moda
         console.log('*** STEP 4: Validate category facet is activated by selection of first level category node Moda')
         //4.1. Validate category facet initial state (expanded) presented  
         console.log('-> Validate category facet initial state (expanded) presented.');
         await lidlStoreFront.SKsrp().validate_facet_category_state_expanded();
         //4.2. THere is a header reset option
         console.log('-> Validate there is a header reset option when the facet is active')
         await lidlStoreFront.SKfacetCategory().validate_header_reset_option_is_shown();
         //4.3. There is a bubble reset option
         console.log("-> Validate there is a bubble reset option when the facet is active")
         await lidlStoreFront.SKfacetCategory().validate_bubble_reset_option_for_moda_is_shown();
         //4.4. There is a navigation reset button ( delete all bubbles)
         console.log("-> Validate  that there is a navigation reset all button ( delete all bubbles)")
         await lidlStoreFront.SKfacetCategory().validate_navigation_reset_all_bubbles_button_is_shown();
 
         //STEP 5
         // The user reset the category facet by clicking on header reset otpion
         console.log('*** STEP 5: The user reset the category facet by clicking on header reset otpion')
         await lidlStoreFront.SKfacetCategory().header_reset_btn().click();
 
         //STEP 6
         // Validate header reset option deactivated the category facet
         console.log('*** STEP 6: Validate header reset option deactivated the category facet as per requirements');
         //6.1. Validate category facet initial state (expanded) presented  
         console.log('-> Validate category facet initial state (expanded) presented.');
         await lidlStoreFront.SKsrp().validate_facet_category_state_expanded();
         // 6.2. THere is no header reset option
         console.log('-> Validate there is no header reset option when the facet is not active')
         await lidlStoreFront.SKfacetCategory().validate_no_header_reset_option_is_shown();
         //6.3. There is no bubble reset option
         console.log("-> Validate there is no bubble reset option when the facet is not active")
         await lidlStoreFront.SKfacetCategory().validate_no_bubble_reset_option_for_moda_is_shown();
         //6.4. There is no navigation reset button ( delete all bubbles)
         console.log("-> Validate  that there is no navigation reset all button ( delete all bubbles)")
         await lidlStoreFront.SKfacetCategory().validate_no_navigation_reset_all_bubbles_button_is_shown();
 
     });
 
 
 test("SK - 10 - QA - SEARCH-VIEW | SERP | Facet | Category |" +
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
         await lidlStoreFront.SKfacetCategory().debugTestCase10();
     });
 
 test("SK - 11 - QA - SEARCH-VIEW | SERP | Facet | Category |" +
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
 
 test("SK - 12 - QA - SEARCH-VIEW | SERP | Facet | Category |" +
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
 
 test("SK - 13 - QA - SEARCH-VIEW | SERP | Facet | Category |" +
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
 
 test("SK - 14 - QA - SEARCH-VIEW | SERP | Facet | Category |" +
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
 
 
 test("SK - 15 - QA - SEARCH-VIEW | SERP | Facet | Category |" +
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
 
 test("SK - 16 - QA - SEARCH-VIEW | SERP | Facet | Category |" +
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
 
 test("SK - 17 - QA - SEARCH-VIEW | SERP | Facet | Category |" +
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
 
 test("SK - 18 - QA - SEARCH-VIEW | SERP | Facet | Category |" +
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
 
 test("SK - 19 - QA - SEARCH-VIEW | SERP | Facet | Category |" +
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
 
 test("SK - 20 - QA - SEARCH-VIEW | SERP | Facet | Category |" +
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
 
 test("SK - 21 - QA - SEARCH-VIEW | SERP | Facet | Category |" +
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
 
 test("SK - 22 - QA - SEARCH-VIEW | SERP | Facet | Category |" +
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
 
 test("SK - 23 - QA - SEARCH-VIEW | SERP | Facet | Category |" +
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
 
 test("SK - 24 - QA - SEARCH-VIEW | SERP | Facet | Category |" +
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