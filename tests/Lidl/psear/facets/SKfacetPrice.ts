import { expect, Page } from "@playwright/test";
import { LidlBase } from "../../../../fixtures/lidlBase";

export default class SKfacetPrice extends LidlBase{
  constructor(page: Page) {
    super(page)
  }

  //Locators
  //Main strategy: from TOP of the PAGE to the bottom 
  //Second employed strategy : lef aside /facets/ 

  //Search ResultsPage header
  searchResultsPageHeader = () => this.page.locator('');
  //Search Results page grid box counter

 
  facet_price = () => this.page.getByRole('button', { name: 'Filtrovať podľa Cena' });
  

  // await page.goto('https://qa.lidl.sk/q/search?q=*');
  // await page.getByRole('button', { name: 'Filtrovať podľa Cena' }).click();
  // await page.getByRole('button', { name: 'Filtrovať podľa Cena' }).click();
  // await page.locator('.s-facet-range__progress').click();
  // await page.locator('.s-facet-range__progress').click();
  // await page.getByLabel('Filtrovať podľa Cena: Od').dblclick();
  // await page.getByLabel('Filtrovať podľa Cena: Od').dblclick();
  // await page.locator('html').click();
  // await page.getByLabel('Filtrovať podľa Cena: Od').click();
  // await page.getByLabel('Filtrovať podľa Cena: Od').fill('033');
  // await page.getByLabel('Filtrovať podľa Cena: Od').press('Enter');
  // await page.getByLabel('Filtrovať podľa Cena: Do').dblclick();
  // await page.getByLabel('Filtrovať podľa Cena: Do').fill('420');
  // await page.getByLabel('Filtrovať podľa Cena: Do').press('Enter');
  // await page.getByRole('link', { name: '33 € - 420 €' }).click();
  // await page.getByLabel('Filtrovať podľa Cena: Od').click(
    
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

 
      //FACET :: 7 :: RATINGS 
      public async validate_load_more_grids_btn_canBe_clicked(){
        //1:Wait for the selector and click
        await this.page.waitForSelector('div .s-load-more'); // facet main div
        //2. Single click on the expanded facet MAKEs the facet to collapse
       await this.load_more_grids_button().scrollIntoViewIfNeeded();
        await this.load_more_grids_button().click();
        console.log('CONFIRM: The user has clicked on the facet button')
      }
 
      // >>>>> >>> >>> START REGRESION SKELETON <<<, <<< <<<
      public async debugTestCase1() {
        //Paste the content from the excel
        // before the method page PUT the key word 
        // -->  this.

        // EXAMPLE:
        //BEFORE in excel
        // page.getByRole('link', { name: 'Móda' }).click();
        // AFTER in code
        // this.page.getByRole('link', { name: 'Móda' }).click();
        await this.page.goto('https://www.lidl.sk/q/search?variant=a&productsOnly=false&idsOnly=false');
        await this.page.getByRole('button', { name: 'Filtrovať podľa Cena' }).click();
        await this.page.getByRole('button', { name: 'Filtrovať podľa Cena' }).click();
      }


      public async debugTestCase2() {
        await this.page.goto('https://www.lidl.sk/q/search?variant=a&productsOnly=false&idsOnly=false');
        await this.page.getByLabel('Filtrovať podľa Cena: Od').click();
        await this.page.getByLabel('Filtrovať podľa Cena: Od').fill('2');
        await this.page.getByLabel('Filtrovať podľa Cena: Od').press('Enter');
      }

      public async debugTestCase3() {
        await this.page.goto('https://www.lidl.sk/q/search?variant=a&productsOnly=false&idsOnly=false');
        await this.page.getByLabel('Filtrovať podľa Cena: Do').click();
        await this.page.getByLabel('Filtrovať podľa Cena: Do').fill('1598');
        await this.page.getByLabel('Filtrovať podľa Cena: Do').press('Enter');
      }

      public async debugTestCase4() {
        await this.page.goto('https://www.lidl.sk/q/search?variant=a&productsOnly=false&idsOnly=false');
        await this.page.getByLabel('Filtrovať podľa Cena: Od').click();
        await this.page.getByLabel('Filtrovať podľa Cena: Od').fill('10');
        await this.page.getByLabel('Filtrovať podľa Cena: Do').click();
        await this.page.getByLabel('Filtrovať podľa Cena: Do').click();
        await this.page.getByLabel('Filtrovať podľa Cena: Do').fill('1590');
        await this.page.getByLabel('Filtrovať podľa Cena: Do').press('Enter');
      }

      public async debugTestCase5() {
        await this.page.goto('https://www.lidl.sk/q/search?variant=a&productsOnly=false&idsOnly=false');
        await this.page.getByLabel('Filtrovať podľa Cena: Do').click();
        await this.page.getByLabel('Filtrovať podľa Cena: Do').fill('159');
        await this.page.getByLabel('Filtrovať podľa Cena: Od').click();
        await this.page.getByLabel('Filtrovať podľa Cena: Od').click();
        await this.page.getByLabel('Filtrovať podľa Cena: Od').fill('1000');
        await this.page.getByLabel('Filtrovať podľa Cena: Od').press('Enter');
      }

      public async debugTestCase6() {
        await this.page.goto('https://www.lidl.sk/q/search?variant=a&productsOnly=false&idsOnly=false');
        await this.page.getByLabel('Filtrovať podľa Cena: Od').click();
        await this.page.getByLabel('Filtrovať podľa Cena: Od').fill('1000');
        await this.page.getByLabel('Filtrovať podľa Cena: Do').click();
        await this.page.getByLabel('Filtrovať podľa Cena: Do').click();
        await this.page.getByLabel('Filtrovať podľa Cena: Do').fill('159');
        await this.page.getByLabel('Filtrovať podľa Cena: Do').press('Enter');
      }
      

      public async debugTestCase7() {
        await this.page.goto('https://www.lidl.sk/q/search?variant=a&productsOnly=false&idsOnly=false');
        await this.page.getByLabel('Filtrovať podľa Cena: Do').click();
        await this.page.getByLabel('Filtrovať podľa Cena: Do').fill('15999');
        await this.page.getByLabel('Filtrovať podľa Cena: Do').press('Enter');
        await this.page.getByLabel('Filtrovať podľa Cena: Do').click();
        await this.page.getByLabel('Filtrovať podľa Cena: Do').press('Enter');
      }

      public async debugTestCase8() {
        await this.page.goto('https://www.lidl.sk/q/search?variant=a&productsOnly=false&idsOnly=false');
        await this.page.getByLabel('Filtrovať podľa Cena: Od').click();
        await this.page.getByLabel('Filtrovať podľa Cena: Od').fill('0');
        await this.page.getByLabel('Filtrovať podľa Cena: Od').press('Enter');
        await this.page.getByRole('link', { name: '1 € - 1599 €' }).click();
      }

      public async debugTestCase9() {
        await this.page.goto('https://www.lidl.sk/q/search?variant=a&productsOnly=false&idsOnly=false');
        await this.page.getByLabel('Filtrovať podľa Cena: Od').click();
        await this.page.getByLabel('Filtrovať podľa Cena: Od').fill('10');
        await this.page.getByLabel('Filtrovať podľa Cena: Do').click();
        await this.page.getByLabel('Filtrovať podľa Cena: Do').click();
        await this.page.getByLabel('Filtrovať podľa Cena: Do').fill('1594');
        await this.page.getByLabel('Filtrovať podľa Cena: Do').press('Enter');
        await this.page.locator('.s-facet__reset').click();
      }

      public async debugTestCase10() {
        await this.page.goto('https://www.lidl.sk/q/search?variant=a&productsOnly=false&idsOnly=false');
        await this.page.getByLabel('Filtrovať podľa Cena: Od').click();
        await this.page.getByLabel('Filtrovať podľa Cena: Od').fill('11');
        await this.page.getByLabel('Filtrovať podľa Cena: Do').click();
        await this.page.getByLabel('Filtrovať podľa Cena: Do').click();
        await this.page.getByLabel('Filtrovať podľa Cena: Do').click();
        await this.page.getByLabel('Filtrovať podľa Cena: Do').fill('1520');
        await this.page.getByLabel('Filtrovať podľa Cena: Od').click();
        await this.page.getByRole('link', { name: '11 € - 1520 €' }).click();
      }
      
      // >>>>> STOP   REGRESION SUPPORT  <<<< < << << 

}