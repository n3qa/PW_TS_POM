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
  sk_facet_price = () => this.page.getByRole('button', { name: 'Filtrovať podľa Cena' }).click();
  sk_facet_brand = () => this.page.getByRole('button', { name: 'Filtrovať podľa Značka' }).click();
  sk_facet_color = () => this.getByRole('button', { name: 'Filtrovať podľa Farba' }).click();
  sk_facet_size = () => this.getByRole('button', { name: 'Filtrovať podľa Veľkosť' }).click();
  sk_facet_ratings = () => this.page.getByRole('button', { name: 'Filtrovať podľa Hodnotenia' }).click();

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
   
  public async validateSearchResultsPageIsCorrect() {
    // await this.searchInputField().press("Enter");
  }
 
  public async validate_SK_SearchResultsPageHTMTitle(){
    try {
      // await expect(this.page).toHaveURL('https://lidl.sk/'); - after cononical url update provide valid one
      await expect(this.page).toHaveTitle('Lidl.sk | Správná voľba');
       console.log('VALIDATION : Search results page html tite is correct: '+ 'Lidl.sk | Správná voľba' );
    } catch (error) {
      console.log("Failed Lidl homepage verification");
    }

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