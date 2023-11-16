import { expect, Page } from "@playwright/test";
import { LidlBase } from "../../../../fixtures/lidlBase";

export default class SKsearchResultsPage extends LidlBase{
  constructor(page: Page) {
    super(page)
  }

  //Locators
  //Main strategy: from TOP of the PAGE to the bottom 
  //Second employed strategy : lef aside /facets/ 

  //Search ResultsPage header
  searchResultsPageHeader = () => this.page.locator('');
  //Search Results page grid box counter

  searchBar = () => this.searchInputField().getAttribute('#search-input-hook');
  searchInputField = () => this.page.locator('#s-search-input-field');
  searchSubmitButton = () => this.page.locator('button.s-search-input__button');
  //Search input field = abbreaviation -> SIF
  SIFplaceHolder = () => this.searchInputField().getAttribute('placeholder');

  //Facets country spec labels locators 
  facet_category = () => this.page.getByRole('button', { name: 'Filtrovať podľa Kategórie' });
  facet_price = () => this.page.getByRole('button', { name: 'Filtrovať podľa Cena' });
  facet_brand = () => this.page.getByRole('button', { name: 'Filtrovať podľa Značka' });
  facet_color = () => this.getByRole('button', { name: 'Filtrovať podľa Farba' });
  facet_size = () => this.getByRole('button', { name: 'Filtrovať podľa Veľkosť' });
  facet_ratings = () => this.page.getByRole('button', { name: 'Filtrovať podľa Hodnotenia' });

  //On the bottom of the page
  load_more_grids_button = () => this.page.getByRole('button', { name: 'Ďalej Viac produktov' });

  //Actions
  public async clickOnSearchInputField () {
    await this.searchInputField().click();

    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForLoadState('load');
    await this.page.waitForLoadState('networkidle');
  } 

  public async submitSearchQuery(searchTerm: string) {
    await this.searchInputField().fill(searchTerm);

    await this.searchInputField().press("Enter");
  }
   
  public async validate_initial_searchResultsPage_is_correct() {
    // await this.searchInputField().press("Enter");
  }
 
  public async validate_SK_SearchResultsPageHTMTitle(){
    try {
      //await expect(this.page).toHaveURL('https://lidl.sk/'); - after cononical url update provide valid one
      const lidlPageTitle = await this.page.title();
      console.log('REPORT: Lidl mina page title: '+lidlPageTitle);
      await expect(this.page).toHaveTitle('Výsledok vyhľadávania na Lidl.sk');
      console.log('VALIDATION : Search results page html tite is correct: '+ 'Výsledok vyhľadávania na Lidl.sk' );
    } catch (error) {
      console.log("Failed Lidl homepage verification");
    }
  }

//FACET :: 1 :: CATEGORY 
public async validate_facet_category_state_expanded(){
  //1.Validate the facet = expanded
    this.page.waitForSelector('#category'); //the facet main div
    const facetStateStatus = await this.facet_category().getAttribute('class');
    console.log('REPORT: Current facet expand class is: '+facetStateStatus)
    await expect(facetStateStatus).toBe('s-facet__heading s-facet__heading--open');  
    console.log('VALIDATION : The initial expand facet state is opened/expanded.' );
}
//FACET :: 1 :: CATEGORY 
public async validate_facet_category_canBe_Collapsed(){
  //1:Wait for the selector and click
   await this.page.waitForSelector('#category'); //the facet main div
  //2. Single click on expanded price facet MAKEs the facet to collapse
  await this.facet_category().click();
  console.log('CONFIRM: The user has clicked on the facet button')
}
  //FACET :: 2 :: PRICE
  public async validate_facet_price_state_expanded(){
    //1.Validate price facet = expanded
    this.page.waitForSelector('#price'); //price facet main div
    const priceFacetStateStatus = await this.facet_price().getAttribute('class');
    console.log('REPORT: Current price facet class is: '+priceFacetStateStatus)
    await expect(priceFacetStateStatus).toBe('s-facet__heading s-facet__heading--open');
    console.log('VALIDATION : The initial price facet state is opened/expanded.' );
  }
  //FACET :: 2 :: PRICE
  public async validate_facet_price_canBe_Collapsed(){
    //1:Wait for the selector and click
    await this.page.waitForSelector('#price'); //price facet main div
    //2. Single click on the expanded facet MAKEs the facet to collapse
    await this.facet_price().click();
    console.log('CONFIRM: The user has clicked on price facet button')
  }
  //FACET :: 3 :: BRAND 
  public async validate_facet_brand_state_expanded(){
  //1.Validate facet = expanded
    this.page.waitForSelector('#brand'); // facet main div
    const facetStateStatus = await this.facet_brand().getAttribute('class');
    console.log('REPORT: Current facet expand class is: '+facetStateStatus)
    await expect(facetStateStatus).toBe('s-facet__heading s-facet__heading--open');  
    console.log('VALIDATION : The initial expand facet state is opened/expanded.' );
  }
  //FACET :: 3 :: BRAND 
  public async validate_facet_brand_canBe_Collapsed(){
    //1:Wait for the selector and click
    this.page.waitForSelector('#brand'); // facet main div
    //2. Single click on the expanded facet MAKEs the facet to collapse
    this.facet_brand().click();
    console.log('CONFIRM: The user has clicked on the facet button')
  }
   //FACET :: 4 :: COLOR 
   public async validate_facet_color_state_expanded(){
    //1.Validate  facet = expanded
      this.page.waitForSelector('#color'); // facet main div
      const facetStateStatus = await this.facet_color().getAttribute('class');
      console.log('REPORT: Current facet expand class is: '+facetStateStatus)
      await expect(facetStateStatus).toBe('s-facet__heading s-facet__heading--open');  
      console.log('VALIDATION : The initial expand facet state is opened/expanded.' );
    }
    //FACET :: 4 :: COLOR 
    public async validate_facet_color_canBe_Collapsed(){
      //1:Wait for the selector and click
      this.page.waitForSelector('#color'); // facet main div
      //2. Single click on the expanded facet MAKEs the facet to collapse
      this.facet_color().click();
      console.log('CONFIRM: The user has clicked on the facet button')
    }
    //FACET :: 5 :: SIZE 
   public async validate_facet_size_state_expanded(){
    //1.Validate facet = expanded
      this.page.waitForSelector('#size'); // facet main div
      const facetStateStatus = await this.facet_color().getAttribute('class');
      console.log('REPORT: Current facet expand class is: '+facetStateStatus)
      await expect(facetStateStatus).toBe('s-facet__heading s-facet__heading--open');  
      console.log('VALIDATION : The initial expand facet state is opened/expanded.' );
    }
    //FACET :: 5 :: SIZE 
    public async validate_facet_size_canBe_Collapsed(){
      //1:Wait for the selector and click
      this.page.waitForSelector('#size'); // facet main div
      //2. Single click on the expanded  facet MAKEs the facet to collapse
      this.facet_size().click();
      console.log('CONFIRM: The user has clicked on the facet button')
    }
    //FACET :: 6 :: RATINGS 
    public async validate_facet_ratings_state_expanded(){
    //1.Validate  facet = expanded
      this.page.waitForSelector('#Hodnotenia'); // facet main div
      const facetStateStatus = await this.facet_ratings().getAttribute('class');
      console.log('REPORT: Current facet expand class is: '+facetStateStatus)
      await expect(facetStateStatus).toBe('s-facet__heading s-facet__heading--open');  
      console.log('VALIDATION : The initial expand facet state is opened/expanded.' );
    }
    //FACET :: 6 :: RATINGS 
    public async validate_facet_ratings_canBe_Collapsed(){
      //1:Wait for the selector and click
      this.page.waitForSelector('#Hodnotenia'); // facet main div
      //2. Single click on the expanded facet MAKEs the facet to collapse
      this.facet_ratings().click();
      console.log('CONFIRM: The user has clicked on the facet button')
    }

     //FACET :: 7 :: LOAD MORE GRIDS BUTTON 
     public async validate_load_more_grids_btn_state_expanded(){
      //1.Validate brand facet = expanded
        this.page.waitForSelector('div .s-load-more'); // facet main div
        const facetStateStatus = await this.facet_ratings().getAttribute('class');
        console.log('REPORT: Current facet expand class is: '+facetStateStatus)
        await expect(facetStateStatus).toBe('s-facet__heading s-facet__heading--open');  
        console.log('VALIDATION : The initial expand facet state is opened/expanded.' );
      }
      //FACET :: 7 :: RATINGS 
      public async validate_load_more_grids_btn_canBe_clicked(){
        //1:Wait for the selector and click
        this.page.waitForSelector('div .s-load-more'); // facet main div
        //2. Single click on the expanded facet MAKEs the facet to collapse
        this.load_more_grids_button().click();
        console.log('CONFIRM: The user has clicked on the facet button')
      }

  //FACET :: BRAND
  
  // await page.getByRole('button', { name: 'Ďalej Viac produktov' }).click();
  // await page.getByRole('link', { name: 'Relevantnosti' }).click();

 


}