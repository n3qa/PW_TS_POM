import { expect, Page } from "@playwright/test";
import { LidlBase } from "../../../../fixtures/lidlBase";

export default class DEfacetSales extends LidlBase {
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
    await this.page.goto('https://www.lidl.de/');
    await this.page.getByRole('button', { name: 'Zustimmen' }).click();
    await this.page.goto('https://www.lidl.de/q/search?q=*');
    await this.page.getByRole('button', { name: 'Filtern nach Besonderheit' }).click();
    await this.page.getByRole('button', { name: 'Filtern nach Besonderheit' }).click();
  };

  public async debugTestCase2() {
    await this.page.goto('https://www.lidl.de/q/search?q=*');
    await this.page.locator('label').filter({ hasText: 'Schnäppchen' }).click();
  };

  public async debugTestCase3() {
    await this.page.goto('https://www.lidl.de/q/search?q=*');
    await this.page.locator('label').filter({ hasText: 'Schnäppchen' }).click();
    await this.page.locator('.s-facet__reset').click();
  };

  public async debugTestCase4() {
    await this.page.goto('https://www.lidl.de/q/search?q=*');
    await this.page.getByText('Schnäppchen').click();
    await this.page.getByRole('link', { name: 'Schnäppchen' }).click();
  };

  }
