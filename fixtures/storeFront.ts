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

//2 Search results page
//2.1. SK
import LidlSKsearchResultsPage from "../tests/Lidl/psear/srp/SKsearchResultsPage";
//2.2. SK
import LidlDEsearchResultsPage from "../tests/Lidl/psear/srp/DEsearchResultsPage";

//3 FACETS
// 3.0 COMMON facets
import LidlFacetPrice from '../tests/Lidl/common/FacetPrice';

//3.1. SK FACETS
import LidlSKfacetBrand from '../tests/Lidl/psear/facets/SKfacetBrand'
import LidlSKfacetCategory from '../tests/Lidl/psear/facets/SKfacetCategory'
import LidlSKfacetMaterial from '../tests/Lidl/psear/facets/SKfacetMaterial'
import LidlSKfacetPrice from '../tests/Lidl/psear/facets/SKfacetPrice'
import LidlSKfacetRatings from '../tests/Lidl/psear/facets/SKfacetRatings'
import LidlSKfacetSize from '../tests/Lidl/psear/facets/SKfacetSize'
import LidlSKfacetSorting from '../tests/Lidl/psear/facets/SKfacetSorting'
//3.2. DE FACETS
import LidlDEfacetBrand from '../tests/Lidl/psear/facets/DEfacetBrand'
import LidlDEfacetCategory from '../tests/Lidl/psear/facets/DEfacetCategory'
import LidlDEfacetMaterial from '../tests/Lidl/psear/facets/DEfacetMaterial'
import LidlDEfacetPrice from '../tests/Lidl/psear/facets/DEfacetPrice'
import LidlDEfacetRatings from '../tests/Lidl/psear/facets/DEfacetRatings'
import LidlDEfacetSize from '../tests/Lidl/psear/facets/DEfacetSize'
import LidlDEfacetSorting from '../tests/Lidl/psear/facets/DEfacetSorting'
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
  private readonly lidlDEsearchResultsPage: LidlDEsearchResultsPage;

  //3. FACETS 
  //3.0 Common 
  private readonly lidlFacetPrice: LidlFacetPrice;
  //3.1. SK FACETS
  private readonly lidlSKfacetBrand: LidlSKfacetBrand;
  private readonly lidlSKfacetCategory: LidlSKfacetCategory;
  private readonly lidlSKfacetMaterial: LidlSKfacetMaterial;
  private readonly lidlSKfacetPrice: LidlSKfacetPrice;
  private readonly lidlSKfacetRatings: LidlSKfacetRatings;
  private readonly lidlSKfacetSize: LidlSKfacetSize;
  private readonly lidlSKfacetSorting: LidlSKfacetSorting;
  //3.2. DE FACETS
  private readonly lidlDEfacetBrand: LidlDEfacetBrand;
  private readonly lidlDEfacetCategory: LidlDEfacetCategory;
  private readonly lidlDEfacetMaterial: LidlDEfacetMaterial;
  private readonly lidlDEfacetPrice: LidlDEfacetPrice;
  private readonly lidlDEfacetRatings: LidlDEfacetRatings;
  private readonly lidlDEfacetSize: LidlDEfacetSize;
  private readonly lidlDEfacetSorting: LidlDEfacetSorting;
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
    this.lidlDEsearchResultsPage = new LidlDEsearchResultsPage(this.page);

    //3 FACETS
    //3.0 Facetos common
    this.lidlFacetPrice = new LidlFacetPrice(this.page);
    //3.1. SK FACETS
    this.lidlSKfacetBrand = new LidlSKfacetBrand(this.page);
    this.lidlSKfacetCategory = new LidlSKfacetCategory(this.page);
    this.lidlSKfacetMaterial = new LidlSKfacetMaterial(this.page);
    this.lidlSKfacetPrice = new LidlSKfacetPrice(this.page);
    this.lidlSKfacetRatings = new LidlSKfacetRatings(this.page);
    this.lidlSKfacetSize = new LidlSKfacetSize(this.page);
    this.lidlSKfacetSorting = new LidlSKfacetSorting(this.page);

    //3.1. DE FACETS
    this.lidlDEfacetBrand = new LidlDEfacetBrand(this.page);
    this.lidlDEfacetCategory = new LidlDEfacetCategory(this.page);
    this.lidlDEfacetMaterial = new LidlDEfacetMaterial(this.page);
    this.lidlDEfacetPrice = new LidlDEfacetPrice(this.page);
    this.lidlDEfacetRatings = new LidlDEfacetRatings(this.page);
    this.lidlDEfacetSize = new LidlDEfacetSize(this.page);
    this.lidlDEfacetSorting = new LidlDEfacetSorting(this.page);
   
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
    DECookies() {return this.lidlDECookiesPage}
    // 3 FR Cookies
    FRCookies() {return this.lidlFRCookiesPage}
    // 4 CZ Cookies
    CZCookes() {return this.lidlCZCookiesPage}
    // Search results page -> ABR -> srp

    
    //2: SRP Country spec srp -> SK
    SKsrp() {return this.lidlSKsearchResultsPage}
    DEsrp() {return this.lidlDEsearchResultsPage}

    //3: Facets
    //3.0 Facets common
    facetPrice() {return this.lidlFacetPrice};
    // 3.1. SK
    SKfacetBrand() {return this.lidlSKfacetBrand};
    SKfacetCategory(){return this.lidlSKfacetCategory};
    SKfacetMaterial() {return this.lidlSKfacetMaterial};
    SKfacetPrice(){return this.lidlSKfacetPrice}
    SKfacetRatings(){return this.lidlSKfacetRatings}
    SKfacetSize(){return this.lidlSKfacetSize}
    SKfacetSorting(){return this.lidlSKfacetSorting}

    //3.2. DE
    DEfacetBrand() {return this.lidlDEfacetBrand};
    DEfacetCategory(){return this.lidlDEfacetCategory};
    DEfacetMaterial() {return this.lidlDEfacetMaterial};
    DEfacetPrice(){return this.lidlDEfacetPrice}
    DEfacetRatings(){return this.lidlDEfacetRatings}
    DEfacetSize(){return this.lidlDEfacetSize}
    DEfacetSorting(){return this.lidlDEfacetSorting}
    

}