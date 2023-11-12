import { expect, Page } from "@playwright/test";
import { LidlBase } from "../../../../fixtures/lidlBase";

export default class SKsearchResultsPage extends LidlBase{
  constructor(page: Page) {
    super(page)
  }

  //Locators
  searchBar = () => this.searchInputField().getAttribute('#search-input-hook');
  searchInputField = () => this.page.locator('#s-search-input-field');
  searchSubmitButton = () => this.page.locator('button.s-search-input__button');
  //Search input field = abbreaviation -> SIF
  SIFplaceHolder = () => this.searchInputField().getAttribute('placeholder');

  //Actions
  public async clickOnSearchInputField () {
    await this.searchInputField().click();
  } 

  public async submitSearchQuery(searchTerm: string) {
    await this.searchInputField().fill(searchTerm);
    await this.searchInputField().press("Enter");
  }
   
  public async validateSearchResultsPageIsCorrect() {
    
    await this.searchInputField().press("Enter");
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