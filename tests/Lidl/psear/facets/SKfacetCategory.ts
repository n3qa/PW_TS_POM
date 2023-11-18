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
  //1.General properties of the Category facet for SK
  //1.1. Facet main div
  facet_category_div = () => this.page.waitForSelector('#category'); 
  
  //1.2. Facet header / button  = for expand collapse 
  facet_category = () => this.page.getByRole('button', { name: 'Filtrovať podľa Kategórie' });
  
  //1.3 Facet header rest button
  facet_category_header_reset_btn = () => await this.page.locator('.s-facet__reset');

  //2. CATEGORY TREE
  //2.1. PROD FIRST level nodes
  first_level_moda = () =>  await this.page.getByRole('link', { name: 'Móda' });
  //2.1.1. bubble reset option for first level moda
  bubble_reset_option_for_first_level_moda = () =>  await this.page.getByRole('link', { name: 'Móda' });
  
  //2.2. PROD SECOND level nodes
  second_level_women_moda = () => await this.page.getByRole('link', { name: 'Dámska móda' }).click();
  //2.2.1.reset option for second level women moda
  bubble_reset_option_for_second_level_women_moda = () =>  await this.page.getByRole('link', { name: 'Móda' });
  
  //2.3. PROD THIRD level nodes
  third_level_xxx_women_moda = () =>  await this.page.getByRole('link', { name: 'Dámska XXL móda' });
  //2.3.1.reset option for third level XXL women moda

  //1.4. QA FIRST level nodes
  //1.5. QA SECOND level nodes
  //1.6. QA THIRD level nodes

  //2 
  //1 Price facet expand and collapse 
   //2 Price facet functionalities input fields
   //3 Price facet functionalities (drag and drop) slider functionalities
   
   //4 Reset option
   
 
    
    

//  

const context = await browser.newContext();
await page.getByRole('button', { name: 'Filtrovať podľa Kategórie' }).click();
await page.locator('.s-facet__reset').click();
await page.getByRole('button', { name: 'Filtrovať podľa Kategórie' }).click();
await page.getByRole('link', { name: 'Móda' }).click();
await page.getByRole('link', { name: 'Dámska móda' }).click();
await page.getByRole('link', { name: 'Dámska móda' }).click();
await page.locator('section').filter({ hasText: 'Filtrovať podľa Kategórie Móda Dielňa a záhrada Šport a voľný čas Bývanie Domácn' }).click();
await page.getByRole('link', { name: 'Móda' }).click();
await page.getByRole('link', { name: 'Móda', exact: true }).click();
await page.getByText('Filtrovať podľa Cena minimum Filtrovať podľa Cena maximum').click();
await page.locator('.s-facet-range__progress').click();
await page.getByLabel('Filtrovať podľa Cena: Od').click({
  clickCount: 3
});
await page.locator('html').click();
await page.getByLabel('Filtrovať podľa Cena: Od').click();
await page.getByLabel('Filtrovať podľa Cena: Od').click();
await page.getByLabel('Filtrovať podľa Cena: Od').fill('133');
await page.getByLabel('Filtrovať podľa Cena: Od').press('Tab');
await page.getByRole('link', { name: 'Dielňa a záhrada' }).click();
await page.getByRole('link', { name: 'Dielňa a záhrada' }).click();


  await this.page.getByTestId('category-facet').click();
  await this.page.getByTestId('category-facet').click();
  await this.page.locator('.s-facet__reset').click();
  await this.page.getByRole('link', { name: 'Dielňa a záhrada' }).click();
  await this.page.getByRole('link', { name: 'Dielňa a záhrada' }).click();

  //SK PROD data spefic  


  //1. Category tree 


  //Actions
  

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

  
  public async debugTestCase15() {
    await this.page.goto('https://www.lidl.sk/q/search?variant=a&category=M%C3%B3da%2FD%C3%A1mska+m%C3%B3da%2FD%C3%A1mska+XXL+m%C3%B3da&idsOnly=false&productsOnly=false');
    await this.page.getByRole('link', { name: 'Dámska móda' }).click();
    await this.page.getByRole('link', { name: 'Móda', exact: true }).click();
    await this.page.locator('.s-facet__reset').click();
  }

  public async debugTestCase16() {
    await this.page.goto('https://www.lidl.sk/q/search?variant=a&productsOnly=false&idsOnly=false');
    await this.page.getByRole('link', { name: 'Móda' }).click();
    await this.page.locator('.s-facet__reset').click();
    await this.page.getByRole('link', { name: 'Dielňa a záhrada' }).click();
  }

  public async debugTestCase17() {
    await this.page.goto('https://www.lidl.sk/q/search?variant=a&category=M%C3%B3da&idsOnly=false&productsOnly=false');
    await this.page.getByRole('link', { name: 'Dámska móda' }).click();
    await this.page.getByRole('link', { name: 'Dámska móda' }).click();
  }

  public async debugTestCase18() {
    await this.page.goto('https://www.lidl.sk/q/search?variant=a&category=M%C3%B3da%2FD%C3%A1mska+m%C3%B3da&idsOnly=false&productsOnly=false');
    await this.page.getByRole('link', { name: 'Dámska XXL móda' }).click();
    await this.page.getByRole('link', { name: 'Dámska XXL móda' }).click();
  }

  public async debugTestCase19() {
    await this.page.goto('https://www.lidl.sk/q/search?variant=b&category=M%C3%B3da%2FD%C3%A1mska+m%C3%B3da%2FD%C3%A1mska+XXL+m%C3%B3da&idsOnly=false&productsOnly=false');
    await this.page.getByRole('link', { name: 'Dámska móda' }).click();
    await this.page.getByRole('link', { name: 'Dámska móda' }).click();
  }

  public async debugTestCase20() {
    await this.page.goto('https://www.lidl.sk/q/search?variant=b&category=M%C3%B3da%2FD%C3%A1mska+m%C3%B3da&idsOnly=false&productsOnly=false');
    await this.page.getByRole('link', { name: 'Móda', exact: true }).click();
    await this.page.getByRole('link', { name: 'Móda', exact: true }).click();
  }

  public async debugTestCase21() {
    await this.page.goto('https://www.lidl.sk/q/search?variant=a&productsOnly=false&idsOnly=false');
    await this.page.getByRole('link', { name: 'Móda' }).click();
    await this.page.getByRole('link', { name: 'Dámska móda' }).click();
    await this.page.getByRole('link', { name: 'Dámska XXL móda' }).click();
    await this.page.getByRole('link', { name: 'Móda', exact: true }).click();
    await this.page.getByRole('link', { name: 'Móda', exact: true }).click();
  }

  public async debugTestCase22() {
    await this.page.goto('https://www.lidl.sk/q/search?variant=a&productsOnly=false&idsOnly=false');
    await this.page.getByRole('link', { name: 'Móda' }).click();
    await this.page.getByRole('link', { name: 'Dámska móda' }).click();
    await this.page.getByRole('link', { name: 'Dámska XXL móda' }).click();
    await this.page.getByRole('link', { name: 'Dámska XXL móda' }).click();
  }

  public async debugTestCase23() {
    await this.page.goto('https://www.lidl.sk/q/search?variant=a&category=M%C3%B3da%2FD%C3%A1mska+m%C3%B3da%2FD%C3%A1mska+XXL+m%C3%B3da&idsOnly=false&productsOnly=false');
    await this.page.getByRole('link', { name: 'Dámska móda' }).click();
    await this.page.getByRole('link', { name: 'Móda', exact: true }).click();
    await this.page.getByRole('link', { name: 'Móda', exact: true }).click();
  }

  public async debugTestCase24() {
    await this.page.goto('https://www.lidl.sk/q/search?variant=a&productsOnly=false&idsOnly=false');
    await this.page.getByRole('link', { name: 'Móda' }).click();
    await this.page.getByRole('link', { name: 'Móda', exact: true }).click();
    await this.page.getByRole('link', { name: 'Dielňa a záhrada' }).click();
  }

}