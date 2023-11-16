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
  facet_price = () => this.page.getByRole('button', { name: 'Filtrovať podľa Cena' });
  facet_brand = () => this.page.getByRole('button', { name: 'Filtrovať podľa Značka' });
  facet_color = () => this.getByRole('button', { name: 'Filtrovať podľa Farba' });
  facet_size = () => this.getByRole('button', { name: 'Filtrovať podľa Veľkosť' });
  facet_ratings = () => this.page.getByRole('button', { name: 'Filtrovať podľa Hodnotenia' });

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

  public async validate_priceFacet_state_expanded(){
    //1.Validate price facet = expanded
      this.page.waitForSelector('#price'); //price facet main div
      const priceFacetStateStatus = await this.facet_price().getAttribute('class');
      console.log('REPORT: Current price facet class is: '+priceFacetStateStatus)
      await expect(priceFacetStateStatus).toBe('s-facet__heading s-facet__heading--open');  
      console.log('VALIDATION : The initial price facet state is opened/expanded.' );
  }

  public async validate_priceFacet_canBe_Collapsed(){
    //1:Wait for the selector and click
    this.page.waitForSelector('#price'); //price facet main div
    //2. Single click on expanded price facet MAKEs the facet to collapse
    this.facet_price().click();
    console.log('CONFIRM: The user has clicked on price facet button')
    //2: wait for the selector to be shown again
    this.page.waitForSelector('#price'); //price facet main div
    //3: Validate price facet main div status
    const priceMainDiv = this.page.locator('#price');
    const currentPriceFacetStyle = await priceMainDiv.evaluate(e => (e as HTMLDivElement).getAttribute('style'));
    console.log('REPORT: Current price facet class is: '+currentPriceFacetStyle)

    await expect(currentPriceFacetStyle).toBe('s-facet__heading s-facet__heading--open');  
    console.log('VALIDATION : The initial price facet state is opened/expanded.' );
  }
 

 
  // await page.getByPlaceholder('Vyhľadaj obľúbený produkt, značku, kategóriu...').click();
  // await page.getByRole('button', { name: 'Spustite vyhľadávanie' }).click();
  // await page.getByRole('button', { name: 'Filtrovať podľa Kategórie' }).click();
  // await page.getByRole('button', { name: 'Filtrovať podľa Kategórie' }).click();
  // await page.getByRole('button', { name: 'Filtrovať podľa Cena' }).click();
  // await page.getByRole('button', { name: 'Filtrovať podľa Cena' }).click();
  // await page.getByRole('button', { name: 'Filtrovať podľa Zľavy' }).dblclick();
  // await page.getByRole('button', { name: 'Filtrovať podľa Značka' }).dblclick();
  // await page.getByRole('button', { name: 'Filtrovať podľa Farba' }).dblclick();
  // await page.getByRole('button', { name: 'Filtrovať podľa Veľkosť' }).click();
  // await page.getByRole('button', { name: 'Filtrovať podľa Veľkosť' }).click();
  // await page.getByRole('button', { name: 'Filtrovať podľa Materiál' }).click();
  // await page.getByRole('button', { name: 'Filtrovať podľa Materiál' }).click();
  // await page.getByRole('button', { name: 'Filtrovať podľa Hodnotenia' }).click();
  // await page.getByRole('button', { name: 'Filtrovať podľa Hodnotenia' }).click();
  // await page.getByRole('button', { name: 'Ďalej Viac produktov' }).click();
  // await page.getByRole('link', { name: 'Relevantnosti' }).click();

 


}