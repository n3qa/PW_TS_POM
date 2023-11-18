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

  searchBar = () => this.searchInputField().getAttribute('#search-input-hook');
  searchInputField = () => this.page.locator('#s-search-input-field');
  searchSubmitButton = () => this.page.locator('button.s-search-input__button');
  //Search input field = abbreaviation -> SIF
  SIFplaceHolder = () => this.searchInputField().getAttribute('placeholder');

  //Facets country spec labels locators 
  facet_category = () => this.page.getByRole('button', { name: 'Filtrovať podľa Kategórie' });
  facet_price = () => this.page.getByRole('button', { name: 'Filtrovať podľa Cena' });
  facet_brand = () => this.page.getByRole('button', { name: 'Filtrovať podľa Značka' });
  facet_color = () => this.page.getByRole('button', { name: 'Filtrovať podľa Farba' });
  facet_size = () => this.page.getByRole('button', { name: 'Filtrovať podľa Veľkosť' });
  facet_ratings = () => this.page.getByRole('button', {class: 'Filtrovať podľa Hodnotenia' });  //Hodnotenia-facet
  facet_ratingsG = () => this.page.getByTestId('Hodnotenia-facet');
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
        //Paste the content from the excel
        // before the method page PUT the key word 
        // -->  this.

        // EXAMPLE:
        //BEFORE in excel
        // page.getByRole('link', { name: 'Móda' }).click();
        // AFTER in code
        // this.page.getByRole('link', { name: 'Móda' }).click();
        await this.page.goto('https://www.lidl.sk/q/search?variant=a&productsOnly=false&idsOnly=false');
        await this.page.getByLabel('Filtrovať podľa Cena: Od').click();
        await this.page.getByLabel('Filtrovať podľa Cena: Od').fill('2');
        await this.page.getByLabel('Filtrovať podľa Cena: Od').press('Enter');
      }
      

}