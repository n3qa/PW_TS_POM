import { Page ,expect } from "@playwright/test";
// IMPORT
// StoreFront common pages   

import LidlCookiesPage from "../tests/Lidl/common/cookies/lidlCookies";
import LidlSearchBarPage from "../tests/Lidl/psear/searchBar";
import LidlSearchResultsPage from "../tests/Lidl/psear/searchBar";

//IMPORT 
// Project Spec Pages
// 1 Cookies 
// 1.1. SK Cookes 
 import LidlSKCookiesPage from "../tests/Lidl/common/cookies/SKcookiesPage";
//1.2. DE Cookies
import LidlDECookiesPage from "../tests/Lidl/common/cookies/DEcookiesPage";
//1.3 CZ Cookies
import LidlCZCookiesPage from "../tests/Lidl/common/cookies/CZcookiesPage";
//1.4 FR Cookies
import LidlFRCookiesPage from "../tests/Lidl/common/cookies/FRcookiesPage";

//Searh results pages 
//Common methods for SRP

//1 SK Search results page
import LidlSKsearchResultsPage from "../tests/Lidl/psear/srp/SKsearchResultsPage";

// END OF IMPTS 
export class StoreFront { 

  private readonly page:Page;

  //Providing fields for StoreFront Pages
  private readonly lidlCookiesPage: LidlCookiesPage;
  private readonly lidlSearchBarPage: LidlSearchBarPage;
  private readonly lidlSearchResultsPage: LidlSearchResultsPage;
  
  //Providing StoreFront common pages by country
  //1. Cookies
  // 1.1. SK 
  private readonly lidlSKCookiesPage: LidlSKCookiesPage;  
  private readonly lidlDECookiesPage: LidlDECookiesPage;
  private readonly lidlCZCookiesPage: LidlCZCookiesPage;
  private readonly lidlFRCookiesPage: LidlFRCookiesPage;
  
  //2. Search results page ->
  //2.1. SK
  private readonly lidlSKsearchResultsPage: LidlSKsearchResultsPage;

  constructor(page:Page){
    this.page = page;
    
  //init StoreFront common pages
   this.lidlCookiesPage = new LidlCookiesPage(this.page);
   this.lidlSearchBarPage = new LidlSearchBarPage(this.page);
   this.lidlSearchResultsPage = new LidlSearchResultsPage(this.page);
    //init Project Spec pages
    // 1 Cookies 
    // 1.1. SK Cookes 
    this.lidlSKCookiesPage = new LidlSKCookiesPage(this.page);
    // 1.2. DE Cookes 
    this.lidlDECookiesPage = new LidlDECookiesPage(this.page);
    // 1.3. CZ Cookes 
    this.lidlCZCookiesPage = new LidlCZCookiesPage(this.page);
    // 1.4. FR Cookes 
    this.lidlFRCookiesPage = new LidlFRCookiesPage(this.page);

    //2.Search Results Page for Countries
    //2.1. SK SRP 
    this.lidlSKsearchResultsPage = new LidlSKsearchResultsPage(this.page);
  }

  //Instance providers
    //Common pages
    cookies() {return this.lidlCookiesPage};
    searchBar(){return this.lidlSearchBarPage};
    srp() {return this.lidlSearchResultsPage};
    
    //Project spec pages
    // 1 SK Cookies
    SKCookies(){return this.lidlSKCookiesPage}
    // 2 DE Cookies
    DECookiesPage() {return this.lidlDECookiesPage}
    // 3 FR Cookies
    FRCookies() {return this.lidlFRCookiesPage}
    // 4 CZ Cookies
    CZCookes() {return this.lidlCZCookiesPage}
    // Search results page -> ABR -> srp

    
    //Country spec srp -> SK
    SKsrp() {return this.lidlSKsearchResultsPage}
    

}