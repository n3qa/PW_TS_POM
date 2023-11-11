import { expect, Page } from "@playwright/test";

export default class SearchResultsPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public async goto() {
    await this.page.goto('www.lidl.sk');
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
    await this.searchSubmitButton().click();
  }

}