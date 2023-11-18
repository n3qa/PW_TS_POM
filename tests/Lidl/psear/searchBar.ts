import { expect, Page } from "@playwright/test";
import { LidlBase } from "../../../fixtures/lidlBase";

export default class SearchInputBox extends LidlBase {
  constructor(page: Page) {
    super(page)
  }
  // await page.goto('https://www.lidl.sk/');
  // await page.getByRole('button', { name: 'POVOLIŤ' }).click();
  // await page.getByPlaceholder('Vyhľadaj obľúbený produkt, značku, kategóriu...').click();
  // await page.getByPlaceholder('Vyhľadaj obľúbený produkt, značku, kategóriu...').fill('*');
  // await page.getByRole('button', { name: 'Spustite vyhľadávanie' }).click();

  //Locators
  searchBar = () => this.searchInputField().getAttribute('#search-input-hook');
  searchInputField = () => this.page.locator('#s-search-input-field');
  searchSubmitButton = () => this.page.locator('button.s-search-input__button');
  navSearchSubmitButtonSK  = () => this.page.getByRole('button', { name: 'Spustite vyhľadávanie' });
  //Search input field = abbreaviation -> SIF
  SIFplaceHolder = () => this.searchInputField().getAttribute('placeholder');
 
  

  //Actions
  public async clickOnSearchInputField () {
    await this.searchInputField().click();
  } 

  public async submitSearchQuery(searchTerm: string) {
    await this.searchInputField().fill(searchTerm);
    console.log('CONFIRM: The user has submited a search with data: '+searchTerm);
    
    await this.navSearchSubmitButtonSK().isVisible;
    await this.navSearchSubmitButtonSK().click();
    console.log('CONFIRM: The use has clicked on navigation search submit button for term: '+searchTerm)
    // await this.searchInputField().press('Enter');
  }

}