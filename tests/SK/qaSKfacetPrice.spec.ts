import { test } from "../../fixtures/lidl-configurator";


    test("SK - 1 - QA - SEARCH-VIEW | SERP | Facet | Price |" +
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
            await lidlStoreFront.SKfacetPrice().verify_facet_price_default_props();    

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
            await lidlStoreFront.SKfacetPrice().verify_facet_price_default_props();     

            console.log('here')
          });

        test.only("SK - 2 - QA - SEARCH-VIEW | Facet | Price | PRICE FROM | " +
        "Verify that user can activate price facet " +
        "by providing a valid data for " +
        "price from input field. " ,
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
        await lidlStoreFront.SKfacetPrice().verify_facet_price_default_props();    
        
        //STEP 5:
        // Getting the initial price from and price till for further checks in the script
        const INITIAL_PRICE_FROM = await lidlStoreFront.SKfacetPrice().get_price_from_value();
        const INITIAL_PRICE_TILL = await lidlStoreFront.SKfacetPrice().get_price_till_value();
        const INITIAL_PRICE_MIN_RANGE = await lidlStoreFront.SKfacetPrice().get_price_slider_min_range_value();
        const INITIAL_PRICE_MAX_RANGE = await lidlStoreFront.SKfacetPrice().get_price_slider_max_range_value();;
        //For better debugging a report for the initial values will be printed on the consle
        console.log('Initial:  price from : '+ INITIAL_PRICE_FROM);
        console.log('Initial:  price till : '+ INITIAL_PRICE_TILL);
        console.log('Initial:  price slider mininum range : '+ INITIAL_PRICE_MIN_RANGE);
        console.log('Initial:  price slider maximum range : '+ INITIAL_PRICE_MAX_RANGE);
   
        // STEP 6
        // The price facet is activated by  Price from  input field as per requirements. 
        console.log('*** STEP 6 :  The price facet is activated by price from  input field as per requirements. ')   
        const SET_PRICE_FROM_VALUE = '13';
        await lidlStoreFront.SKfacetPrice().set_price_from_value(SET_PRICE_FROM_VALUE);

       // STEP 7 
       // The user verifies that the price facet is activated as per requirments
       console.log('*** STEP 7 : The user verifies that the price facet is activated as per requirments')
       
        await lidlStoreFront.SKfacetPrice().validate_header_reset_option_is_shown();
        await lidlStoreFront.SKfacetPrice().validate_navigation_reset_all_bubbles_button_is_shown();
        await lidlStoreFront.SKfacetPrice().verify_price_from_input_field(SET_PRICE_FROM_VALUE);
        await lidlStoreFront.SKfacetPrice().verify_price_till_input_field(INITIAL_PRICE_TILL);
        await lidlStoreFront.SKfacetPrice().verify_price_slider_minimum_range_input_field(SET_PRICE_FROM_VALUE)
        await lidlStoreFront.SKfacetPrice().verify_price_slider_maximum_range_input_field(INITIAL_PRICE_MAX_RANGE);

    });

 