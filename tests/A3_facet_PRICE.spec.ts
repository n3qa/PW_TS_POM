import { expect } from "@playwright/test";
import { test } from "../fixtures/lidl";


test("Verify user can triger search results page with statistics cookies accpeted.", async ({
                                page, 
                                lidlCookiesPage,
                                lidlSearchBarPage,
                                lidlSearchResultsPage

                                }) => { 
     await lidlCookiesPage.goto();
     await lidlCookiesPage.selectSpecificCookieSettings('statistics');
     await lidlSearchBarPage.submitSearchQuery('ad');  
});

test("Verify user can triger search results page with preferences cookies accpeted.", async ({
     page, 
     lidlCookiesPage,
     lidlSearchBarPage,
     lidlSearchResultsPage

     }) => { 
     await lidlCookiesPage.goto();
     await lidlCookiesPage.selectSpecificCookieSettings('preferences');
     await lidlSearchBarPage.submitSearchQuery('ad');  
});

test("Verify user can triger search results page with marketing cookies accpeted.", async ({
     page, 
     lidlCookiesPage,
     lidlSearchBarPage,
     lidlSearchResultsPage

     }) => { 
     await lidlCookiesPage.goto();
     await lidlCookiesPage.selectSpecificCookieSettings('marketing');
     await lidlSearchBarPage.submitSearchQuery('ad');  
});

