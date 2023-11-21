import { expect, Page } from "@playwright/test";
import { LidlBase } from "../../../../fixtures/lidlBase";

export default class DEfacetCountryOfOrigin extends LidlBase {
  constructor(page: Page) {
    super(page)
  }

  public async goto(url:string) {
    const currnetURL = url;
    await this.page.goto('www.lidl.de');
    console.log ('CONFIRM: The user has navigated to URL: '+currnetURL)
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

  //Support DEBUG
  public async debugTestCase1() {
    await this.page.goto('https://www.lidl.de/q/search?q=*');
    await this.page.locator('#Herkunft').getByRole('button', { name: 'Alles anzeigen' }).click();
    await this.page.getByRole('button', { name: 'Weniger anzeigen' }).click();
  };

  public async debugTestCase2() {
    await this.page.goto('https://www.lidl.de/q/search?q=*');
    await this.page.getByRole('button', { name: 'Filtern nach Herkunftsland' }).click();
    await this.page.getByRole('button', { name: 'Filtern nach Herkunftsland' }).click();
  };

  public async debugTestCase3() {
    await this.page.goto('https://www.lidl.de/q/search?q=*');
    await this.page.locator('label').filter({ hasText: 'Deutschland' }).click();
  };

  public async debugTestCase4() {
    await this.page.goto('https://www.lidl.de/q/search?q=*');
    await this.page.locator('label').filter({ hasText: 'Deutschland' }).click();
    await this.page.locator('label').filter({ hasText: 'Italien' }).click();
  };

  public async debugTestCase5() {
    await this.page.goto('https://www.lidl.de/q/search?q=*');
    await this.page.locator('label').filter({ hasText: 'Deutschland' }).click();
    await this.page.locator('label').filter({ hasText: 'Italien' }).click();
    await this.page.locator('.s-facet__reset').click();
  };

  public async debugTestCase6() {
    await this.page.goto('https://www.lidl.de/q/search?q=*');
    await this.page.locator('label').filter({ hasText: 'Frankreich' }).click();
    await this.page.locator('label').filter({ hasText: 'Spanien' }).click();
    await this.page.getByRole('link', { name: 'Spanien' }).click();
    await this.page.getByRole('link', { name: 'Frankreich' }).click();
  };
}