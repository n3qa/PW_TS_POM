  import { Expect, Locator, Page, expect } from "@playwright/test";
  import { LidlBase } from "../../../fixtures/lidlBase";

  export default class FacetPrice extends LidlBase {
    constructor(page: Page) {
      super(page)
    }
    acceptAll_cs = () => this.page.getByRole('button', { name: 'POVOLIŤ' });
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
    navigation_reset_all_bubbles_btn_sk = () => this.page.getByRole('link', { name: 'Zrušiť filtre' });

    // VALIDATIONS 
    //
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
      await expect(this.navigation_reset_all_bubbles_button()).toHaveCount(0);
      console.log('CONFIRM: There is no navigation reset all bubbles button')
    }
  

  


    // Validations for the inital 
    public async validate_facet_price_initial_props_for_sk(){
      //1. The user verifies that initial category facet props are presented as per requirements
      console.log('VALIDATE : The user verifies that initial/default price facet is expanded.')
      await this.validate_price_facet_expanded();
    
      // 2. THere is no header reset option
      console.log('-> Validate there is no header reset option when the facet is not active')
      await this.validate_no_header_reset_option_is_shown();
      //4.3. There is no bubble reset option
      console.log("-> Validate there is no bubble reset option when the facet is not active")
      await lidlStoreFront.SKfacetCategory().validate_no_bubble_reset_option_for_moda_is_shown();
      //4.4. There is no navigation reset button ( delete all bubbles)
      console.log("-> Validate  that there is no navigation reset all button ( delete all bubbles)")
      await lidlStoreFront.SKfacetCategory().validate_no_navigation_reset_all_bubbles_button_is_shown();

 
    }
    

  }
