import { expect, Page } from "@playwright/test";
import { LidlBase } from "../../../../fixtures/lidlBase";

export default class SKfacetCategory extends LidlBase {
  constructor(page: Page) {
    super(page)
  }

  public async goto(url:string) {
    const currnetURL = url;
    await this.page.goto('www.lidl.sk');
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
    await this.page.goto('https://www.lidl.sk/q/search?variant=a&category=M%C3%B3da&idsOnly=false&productsOnly=false');
    await this.page.getByRole('link', { name: 'Dámska móda' }).click();

  }

  public async debugTestCase2() {
    await this.page.goto('https://www.lidl.sk/q/search?variant=b&category=M%C3%B3da%2FD%C3%A1mska+m%C3%B3da&idsOnly=false&productsOnly=false');
    await this.page.getByRole('link', { name: 'Dámska XXL móda' }).click();
  }

  public async debugTestCase3() {
    await this.page.goto('https://www.lidl.sk/q/search?variant=b&category=M%C3%B3da%2FD%C3%A1mska+m%C3%B3da%2FD%C3%A1mska+XXL+m%C3%B3da&idsOnly=false&productsOnly=false');
    await this.page.getByRole('link', { name: 'Dámska móda' }).click();
  }

  public async debugTestCase4() {
    await this.page.goto('https://www.lidl.sk/q/search?variant=b&category=M%C3%B3da%2FD%C3%A1mska+m%C3%B3da&idsOnly=false&productsOnly=false');
    await this.page.getByRole('link', { name: 'Móda', exact: true }).click();
  }

  public async debugTestCase5() {
    await this.page.goto('https://www.lidl.sk/q/search?variant=b&productsOnly=false&idsOnly=false');
    await this.page.getByRole('link', { name: 'Móda' }).click();
    await this.page.getByRole('link', { name: 'Dámska móda' }).click();
    await this.page.getByRole('link', { name: 'Dámska XXL móda' }).click();
    await this.page.getByRole('link', { name: 'Móda', exact: true }).click();
  }

  public async debugTestCase6() {
    await this.page.goto('https://www.lidl.sk/q/search?variant=a&productsOnly=false&idsOnly=false');
    await this.page.getByRole('link', { name: 'Móda' }).click();
    await this.page.getByRole('link', { name: 'Dámska móda' }).click();
    await this.page.getByRole('link', { name: 'Dámska XXL móda' }).click();
  }  
 
  public async debugTestCase7() {
    await this.page.goto('https://www.lidl.sk/q/search?variant=a&category=M%C3%B3da%2FD%C3%A1mska+m%C3%B3da%2FD%C3%A1mska+XXL+m%C3%B3da&idsOnly=false&productsOnly=false');
    await this.page.getByRole('link', { name: 'Dámska móda' }).click();
    await this.page.getByRole('link', { name: 'Móda', exact: true }).click();  
  }

  public async debugTestCase8a() {
    await this.page.goto('https://www.lidl.sk/q/search?variant=a&productsOnly=false&idsOnly=false');
    await this.page.getByRole('link', { name: 'Šport a voľný čas' }).click(); 
  }

  public async debugTestCase9() {
    await this.page.goto('https://www.lidl.sk/q/search?variant=a&category=M%C3%B3da&idsOnly=false&productsOnly=false');
    await this.page.getByRole('link', { name: 'Dámska móda' }).click();
    await this.page.locator('.s-facet__reset').click();  
  }

  public async debugTestCase10() {
    await this.page.goto('https://www.lidl.sk/q/search?variant=a&category=M%C3%B3da%2FD%C3%A1mska+m%C3%B3da&idsOnly=false&productsOnly=false');
    await this.page.getByRole('link', { name: 'Dámska XXL móda' }).click();
    await this.page.locator('nav').filter({ hasText: 'Filtrovať podľa Kategórie Móda Dámska móda Dámska XXL móda Filtrovať podľa Cena ' }).getByRole('link').first().click();
  }

  public async debugTestCase11() {
    await this.page.goto('https://www.lidl.sk/q/search?variant=b&category=M%C3%B3da%2FD%C3%A1mska+m%C3%B3da%2FD%C3%A1mska+XXL+m%C3%B3da&idsOnly=false&productsOnly=false');
    await this.page.getByRole('link', { name: 'Dámska móda' }).click();
    await this.page.locator('.s-facet__reset').click();
  }

  public async debugTestCase12() {
    await this.page.goto('https://www.lidl.sk/q/search?variant=b&category=M%C3%B3da%2FD%C3%A1mska+m%C3%B3da&idsOnly=false&productsOnly=false');
    await this.page.getByRole('link', { name: 'Móda', exact: true }).click();
    await this.page.locator('.s-facet__reset').click();
  }

  public async debugTestCase13() {
    await this.page.goto('https://www.lidl.sk/q/search?variant=a&productsOnly=false&idsOnly=false');
    await this.page.getByRole('link', { name: 'Móda' }).click();
    await this.page.getByRole('link', { name: 'Dámska móda' }).click();
    await this.page.getByRole('link', { name: 'Dámska XXL móda' }).click();
    await this.page.getByRole('link', { name: 'Móda', exact: true }).click();
    await this.page.locator('.s-facet__reset').click();
  }

  public async debugTestCase14() {
    await this.page.goto('https://www.lidl.sk/q/search?variant=a&productsOnly=false&idsOnly=false');
    await this.page.getByRole('link', { name: 'Móda' }).click();
    await this.page.getByRole('link', { name: 'Dámska móda' }).click();
    await this.page.getByRole('link', { name: 'Dámska XXL móda' }).click();
    await this.page.locator('nav').filter({ hasText: 'Filtrovať podľa Kategórie Móda Dámska móda Dámska XXL móda Filtrovať podľa Cena ' }).getByRole('link').first().click();
  }

}