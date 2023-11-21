  import { Expect, Locator, Page, expect } from "@playwright/test";
  import { LidlBase } from "../../../fixtures/lidlBase";

  export default class FacetPrice extends LidlBase {
    constructor(page: Page) {
      super(page)
    }
 
    //Common price facet locators
    //1 Price facet expand and collapse via main price facet button
    priceFacet_mian_btn = () =>  this.page.locator('(//button[contains(@data-testselector,"price-facet")])');

    //2 Price facet functionalities input fields
    priceFrom = () =>  this.page.locator('//input[contains(@data-testselector,"price-facet-range-input-minValue")]');
    priceTill = () =>  this.page.locator('//input[contains(@data-testselector,"price-facet-range-input-maxValue")]');
 
    priceSliderMinimumRange = () => this.page.locator('//input[contains(@id,"Cena-filter-range-min")]');
    priceSliderMaximumRange = () => this.page.locator('//input[contains(@id,"Cena-filter-range-max")]');
    priceSliderRangeProgressBar = () => this.page.locator("//div[contains(@class,'s-facet-range__progress')]");

    //3 Reset option
    header_reset_btn = () => this.page.locator('//div/a[contains(@data-testseletor,"price-facet-header-reset-option")]');
    
    //4 Navigation reset all bubbls button
    navigation_reset_all_bubbles_btn = () => this.page.locator('(//li[contains(@class,"s-selections__reset")])[1]');

    //USER ACTIONS
    public async setPriceFromValue(providePriceFromvalue: string) {
      await this.priceFrom().fill(providePriceFromvalue);
      // await this.priceFrom().press('Enter');
      await this.page.locator('input#Cena-filter-input-min').fill(providePriceFromvalue);
      await this.priceFrom().press('Enter');
     
      console.log("CONFIRM: THe user has provided an inptut value for price from : "+providePriceFromvalue)
      // priceFacet.waitForSelector(gridBoxImages);
  }
  


    // VALIDATIONS 
    // Getters for validations
    public async getPriceFromValue() {
      console.log("! The user is getting the prife from value.")
      let priceFromInputField = ''; //providing additional var for better debugging 
      priceFromInputField = await  this.priceFrom().inputValue()+'';
      
      return priceFromInputField;
    }

    public async getPriceTillValue() {
      console.log("! The user is getting the prife till value.")
      let priceTillInputField = ''; //providing additional var for better debugging 
      priceTillInputField = await this.priceTill().inputValue()+'';
      return priceTillInputField;
  }

    public async validate_price_facet_expanded() {
      await this.page.waitForSelector('#price'); //the facet main div
      const facetStateStatus = await this.priceFacet_mian_btn().getAttribute('class');
      console.log('REPORT: Current facet expand class is: '+facetStateStatus)
      await expect(facetStateStatus).toBe('s-facet__heading s-facet__heading--open');  
      console.log('CONFIRM : The initial expand facet state is opened/expanded.' );
    }

    //HEADER RESET OPTION
    public async validate_header_reset_option_is_shown() {
      await expect(this.header_reset_btn()).toHaveCount(1);
     console.log('CONFIRM: Header reset option is presented')
    }

    public async validate_no_header_reset_option_is_shown() {
      await expect(this.header_reset_btn()).toHaveCount(0);
     console.log('CONFIRM: No header reset option is presented')
    }
    //NAVIGATION RESET ALL BUBBLS BUTTON
    public async validate_no_navigation_reset_all_bubbles_button_is_shown(){
      await expect(this.navigation_reset_all_bubbles_btn()).toHaveCount(0);
      console.log('CONFIRM: There is no navigation reset all bubbles button')
    }

    public async validate_navigation_reset_all_bubbles_button_is_shown(){
      await expect(this.navigation_reset_all_bubbles_btn()).toHaveCount(1);
      console.log('CONFIRM: There is no navigation reset all bubbles button')
    }

    // Validations for the inital common elements 
    public async validate_facet_price_initial_common_props(){
      //provide a dynamic wait for CI/CD 
      await this.page.waitForLoadState('domcontentloaded');
      await this.page.waitForSelector('#price'); 

      //1. The user verifies that initial category facet props are presented as per requirements
      console.log('VALIDATE : The user verifies that initial/default price facet is expanded.')
      await this.validate_price_facet_expanded();
      //2. THere is no header reset option
      await this.validate_no_header_reset_option_is_shown();
      console.log('-> Validate there is no header reset option when the facet is not active')
      //3. There is no navigation reset all bubble button
      await this.validate_no_navigation_reset_all_bubbles_button_is_shown();
      console.log("-> Validate there is no navigation bubble reset button when the facet is not active")

    }

    //Validate price facet input fields 
    public async validate_price_from_input_field(defaultInputValue: string){
      //provide dynamic wait for the price facet input field interactions
      //everytime when the facet is activated a massive rearragment of the 
      //SRP grid box is provided 
      // SO in that case a dynamic wait is needed
      // also serve as a stability during test execution on CI/CD
      await this.page.waitForLoadState('domcontentloaded');
      await this.page.waitForSelector("//div[contains(@class,'s-facet-range__progress')]") //price slider bar
      await this.page.locator("//div[contains(@class,'s-facet-range__progress')]").scrollIntoViewIfNeeded //price slider bar
      //Provide an actual verification action
      const currentPriceFromValue = await this.priceFrom().inputValue()+'';
      console.log('CONFIRM: The current price from value is:  '+currentPriceFromValue)
      expect(currentPriceFromValue).toMatch(defaultInputValue); 
    }

    public async validate_price_till_input_field(defaultInputValue: string){
      //provide dynamic wait for the price facet input field interactions
      //everytime when the facet is activated a massive rearragment of the 
      //SRP grid box is provided 
      // SO in that case a dynamic wait is needed
      // also serve as a stability during test execution on CI/CD
      await this.page.waitForLoadState('domcontentloaded');
      await this.page.waitForSelector("//div[contains(@class,'s-facet-range__progress')]") //price slider bar
      await this.page.locator("//div[contains(@class,'s-facet-range__progress')]").scrollIntoViewIfNeeded //price slider bar
      //Provide an actual verification action
      const currentPriceTillValue = await this.priceTill().inputValue()+'';
      console.log('CONFIRM: The current price from value is:  '+currentPriceTillValue)
      expect(currentPriceTillValue).toMatch(defaultInputValue); 
    }

  


    
    

  }
