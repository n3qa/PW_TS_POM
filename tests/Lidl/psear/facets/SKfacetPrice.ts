import { expect, Page } from "@playwright/test";
import { LidlBase } from "../../../../fixtures/lidlBase";

export default class SKfacetPrice extends LidlBase{
  constructor(page: Page) {
    super(page)
  }

  //Common price facet locators
    //1 Price facet expand and collapse via main price facet button
    priceFacet_mian_btn = () =>  this.page.locator('(//button[contains(@data-testselector,"price-facet")])');
    price_country_spec_label_btn = () =>  this.page.getByRole('button', { name: 'Filtrovať podľa Cena' });

    //2 Price facet functionalities input fields
    price_from = () =>  this.page.locator('//input[contains(@data-testselector,"price-facet-range-input-minValue")]');
    price_till = () =>  this.page.locator('//input[contains(@data-testselector,"price-facet-range-input-maxValue")]');
 
    price_slider_minimum_range = () => this.page.locator('//input[contains(@id,"Cena-filter-range-min")]');
    price_slider_maximum_range = () => this.page.locator('//input[contains(@id,"Cena-filter-range-max")]');
    price_slider_range_progress_bar = () => this.page.locator("//div[contains(@class,'s-facet-range__progress')]");
 
    //3 Reset option
    header_reset_btn = () => this.page.locator('//div/a[contains(@data-testseletor,"price-facet-header-reset-option")]');
    
    //4 Navigation reset all bubbls button
    navigation_reset_all_bubbles_btn = () => this.page.locator('(//li[contains(@class,"s-selections__reset")])[1]');

    //USER ACTIONS
    public async set_price_from_value(providePriceFromvalue: string) {
      await this.price_from().fill(providePriceFromvalue);
      // await this.priceFrom().press('Enter');
      await this.page.locator('input#Cena-filter-input-min').fill(providePriceFromvalue);
      await this.price_from().press('Enter');
     
      console.log("CONFIRM: THe user has provided an inptut value for price from : "+providePriceFromvalue)
      // priceFacet.waitForSelector(gridBoxImages);
  }

  public async set_price_till_value(providePriceTillvalue: string) {
    await this.price_from().fill(providePriceTillvalue);
    // await this.priceFrom().press('Enter');
    await this.page.locator('input#Cena-filter-input-min').fill(providePriceTillvalue);
    await this.price_from().press('Enter');
   
    console.log("CONFIRM: THe user has provided an inptut value for price from : "+providePriceTillvalue)
    // priceFacet.waitForSelector(gridBoxImages);
}
  


    // VALIDATIONS 
    // Getters for validations
    public async get_price_from_value() {
      await this.page.waitForSelector('#price'); //the facet main div
      console.log("! The user is getting the price from value.")
      let priceFromInputField = ''; //providing additional var for better debugging 
      await  this.price_from().scrollIntoViewIfNeeded();
      priceFromInputField = await  this.price_from().inputValue()+'';
      
      return priceFromInputField;
    }

    public async get_price_till_value() {
      await this.page.waitForSelector('#price'); //the facet main div
      console.log("! The user is getting the price till value.")
      let priceTillInputField = ''; //providing additional var for better debugging 
      await  this.price_from().scrollIntoViewIfNeeded();
      priceTillInputField = await this.price_till().inputValue()+'';
      return priceTillInputField;
  }

    public async get_price_slider_min_range_value() {
      await this.page.waitForSelector('#price'); //the facet main div
      console.log("! The user is getting the price slider min range value.")
      let priceSliderMinimumRangeValue = ''; //providing additional var for better debugging 
      
      priceSliderMinimumRangeValue = await this.price_slider_minimum_range().inputValue()+'';
      return priceSliderMinimumRangeValue;
  }

  public async get_price_slider_max_range_value() {
    await this.page.waitForSelector('#price'); //the facet main div
    console.log("! The user is getting the price slider maximum range value.")
    let priceSliderMaximumRangeValue = ''; //providing additional var for better debugging 
   
    priceSliderMaximumRangeValue = await this.price_till().inputValue()+'';
    return priceSliderMaximumRangeValue;
  }

    public async validate_price_facet_expanded() {
      await this.page.waitForSelector('#price'); //the facet main div
      const facetStateStatus = await this.priceFacet_mian_btn().getAttribute('class');
      console.log('REPORT: Current facet expand class is: '+facetStateStatus)
      await expect(facetStateStatus).toBe('s-facet__heading s-facet__heading--open');  
      console.log('CONFIRM : The initial expand facet state is opened/expanded.' );
    }

    public async validate_price_facet_collapsed() {
      //providing some dynamic wait
      await this.page.waitForLoadState('domcontentloaded');
      await this.page.waitForSelector("//div[contains(@class,'s-facet-range__progress')]") //price slider bar
        
      await this.page.waitForSelector('#price'); //the facet main div
      const facetStateStatus = await this.priceFacet_mian_btn().getAttribute('class');
      console.log('REPORT: Current facet expand class is: '+facetStateStatus)
      await expect(facetStateStatus).toBe('s-facet__heading');  
      console.log('CONFIRM : The pric facet state is collapsed' );
    }

    // SIMPLE VALIDATIONS
    // SHOWN STATUS
    //1 HEADER 
    public async validate_price_facet_header_is_shown () {
      //providing some dynamic wait
      await this.page.waitForLoadState('domcontentloaded');
      await this.page.waitForSelector("//div[contains(@class,'s-facet-range__progress')]") //price slider bar
      
      await expect(this.price_country_spec_label_btn()).toHaveCount(1);
      console.log('CONFIRM: Price header country spec label is presented')  
    }
    //2 INPUT FIELDS SHOWN STATUS
    // 2.1. PRICE FROM SHOWN STATUS
    public async validate_no_price_from_is_shown() {
      //providing some dynamic wait
      await this.page.waitForLoadState('domcontentloaded');
      await this.page.waitForSelector("//div[contains(@class,'s-facet-range__progress')]") //price slider bar

      await expect(this.price_from()).toHaveCount(0);
      console.log('CONFIRM: No price from input field is presented')
    }
    public async validate_price_from_is_shown() {
      //providing some dynamic wait
      await this.page.waitForLoadState('domcontentloaded');
      await this.page.waitForSelector("//div[contains(@class,'s-facet-range__progress')]") //price slider bar

      await expect(this.price_from()).toHaveCount(1);
      console.log('CONFIRM: Price from input field is presented')
    }
    //2.2. PRICE TILL SHOWN STATUS
    public async validate_no_price_till_is_shown() {
      //providing some dynamic wait
      await this.page.waitForLoadState('domcontentloaded');
      await this.page.waitForSelector("//div[contains(@class,'s-facet-range__progress')]") //price slider bar

      await expect(this.price_till()).toHaveCount(0);
      console.log('CONFIRM: No price till input field is presented')
    }
    public async validate_price_till_is_shown() {
      //providing some dynamic wait
      await this.page.waitForLoadState('domcontentloaded');
      await this.page.waitForSelector("//div[contains(@class,'s-facet-range__progress')]") //price slider bar

      await expect(this.price_till()).toHaveCount(1);
      console.log('CONFIRM: Price till input field is presented')
    }
    //2.3. PRICE SLIDER MINIMUM SHOWN STATUS
    public async validate_no_price_slider_minimum_range_is_shown() {
      //providing some dynamic wait
      await this.page.waitForLoadState('domcontentloaded');
      await this.page.waitForSelector("//div[contains(@class,'s-facet-range__progress')]") //price slider bar

      await expect(this.price_slider_minimum_range()).toHaveCount(0);
      console.log('CONFIRM: No price slider minimum range input field is presented')
    }
    public async validate_price_rice_slider_minimum_range_is_shown() {
      //providing some dynamic wait
      await this.page.waitForLoadState('domcontentloaded');
      await this.page.waitForSelector("//div[contains(@class,'s-facet-range__progress')]") //price slider bar

      await expect(this.price_slider_minimum_range()).toHaveCount(1);
      console.log('CONFIRM: Price slider minimum range input field is presented')
    }
    //2.4. PRICE SLIDER MAXIMUM SHOWN STATUS
    public async validate_no_price_slider_maximum_range_is_shown() {
      //providing some dynamic wait
      await this.page.waitForLoadState('domcontentloaded');
      await this.page.waitForSelector("//div[contains(@class,'s-facet-range__progress')]") //price slider bar

      await expect(this.price_slider_maximum_range()).toHaveCount(1);
      console.log('CONFIRM: No price slider maximum range input field is presented')
    }
    public async validate_price_rice_slider_maximum_range_is_shown() {
      //providing some dynamic wait
      await this.page.waitForLoadState('domcontentloaded');
      await this.page.waitForSelector("//div[contains(@class,'s-facet-range__progress')]") //price slider bar

      await expect(this.price_slider_maximum_range()).toHaveCount(1);
      console.log('CONFIRM: Price slider maximum range input field is presented')
    }
     //2.5. PRICE SLIDER PROGRESS SHOWN STATUS
     public async validate_no_price_slider_progress_bar_is_shown() {
      //providing some dynamic wait
      await this.page.waitForLoadState('domcontentloaded');
      await this.page.waitForSelector("//div[contains(@class,'s-facet-range__progress')]") //price slider bar

      await expect(this.price_slider_range_progress_bar()).toHaveCount(0);
      console.log('CONFIRM: No price slider maximum range input field is presented')
    }
    public async validate_price_rice_slider_progress_bar_is_shown() {
      //providing some dynamic wait
      await this.page.waitForLoadState('domcontentloaded');
      await this.page.waitForSelector("//div[contains(@class,'s-facet-range__progress')]") //price slider bar

      await expect(this.price_slider_range_progress_bar()).toHaveCount(1);
      console.log('CONFIRM: Price slider maximum range input field is presented')
    }
    //3 RESET OPTIONS
    //3.1 NAVIGATION RESET ALL BUBBLS BUTTON
    public async validate_header_reset_option_is_shown() {
      await expect(this.header_reset_btn()).toHaveCount(1);
     console.log('CONFIRM: Header reset option is presented')
    }
    public async validate_no_header_reset_option_is_shown() {
      await expect(this.header_reset_btn()).toHaveCount(0);
     console.log('CONFIRM: No header reset option is presented')
    }
    //3.2 NAVIGATION RESET ALL BUBBLS BUTTON
    public async validate_no_navigation_reset_all_bubbles_button_is_shown(){
      await expect(this.navigation_reset_all_bubbles_btn()).toHaveCount(0);
      console.log('CONFIRM: There is no navigation reset all bubbles button')
    }
    public async validate_navigation_reset_all_bubbles_button_is_shown(){
      await expect(this.navigation_reset_all_bubbles_btn()).toHaveCount(1);
      console.log('CONFIRM: There is no navigation reset all bubbles button')
    }
    
    //*****  COMMON *****
    //>>>>> VALIDATION <<<<<
    //! ! !   STEPS ! ! ! 
    // Validations for the inital common elements 
     public async validate_facet_price_default_props(){
      //provide a dynamic wait for CI/CD 
      await this.page.waitForLoadState('domcontentloaded');
      await this.page.waitForSelector('#price'); 
     
     
      //1. The user verifies that initial category facet props are presented as per requirements
      console.log('VALIDATE : The user verifies that initial/default price facet is expanded.')
      await this.validate_price_facet_expanded();
      //2. THere is no header reset option
      console.log('-> VALIDATE: The user checks that there is no header reset option when the facet is not active'); 
      await this.validate_no_header_reset_option_is_shown();
      //3. There is no navigation reset all bubble button
      console.log("-> VALIDATE: THe user checks that there is no navigation bubble reset button when the facet is not active");
      await this.validate_no_navigation_reset_all_bubbles_button_is_shown();
      //4 There is a price from input field 
      console.log("-> VALIDATE: THe user checks that there is a price from input filed presented");
      await this.validate_price_from_is_shown();
      //5 There is a price till input field
      console.log("-> VALIDATE: THe user checks that there is a price till input filed presented");
      await this.validate_price_till_is_shown();  
      //6 There is a price slider minimum range
      console.log("-> VALIDATE: THe user checks that there is a price slider minimum range input filed presented");
      await this.validate_price_rice_slider_minimum_range_is_shown();   
      //7 There is a price slider maximum range
      console.log("-> VALIDATE: THe user checks that there is a price slider maximum range input filed presented");
      await this.validate_price_rice_slider_maximum_range_is_shown();   
      //8 There is a price slider bar
      console.log("-> VALIDATE: THe user checks that there is a price slider progres bar presented");
      await this.validate_price_rice_slider_progress_bar_is_shown();   
        
    }
    
    // PRICE FACET COLLAPSED
    public async validate_facet_price_colapsed_props(){
      //provide a dynamic wait for CI/CD 
      await this.page.waitForLoadState('domcontentloaded');
      await this.page.waitForSelector('#price'); 
     
     
      //1. The user verifies that initial category facet props are presented as per requirements
      console.log('VALIDATE : The user verifies that initial/default price facet is expanded.')
      await this.validate_price_facet_collapsed();
      //2. THere is no header reset option
      console.log('-> VALIDATE: The user checks that there is no header reset option when the facet is not active'); 
      await this.validate_no_header_reset_option_is_shown();
      //3. There is no navigation reset all bubble button
      console.log("-> VALIDATE: THe user checks that there is no navigation bubble reset button when the facet is not active");
      await this.validate_no_navigation_reset_all_bubbles_button_is_shown();
      //4 There is a price from input field 
      console.log("-> VALIDATE: THe user checks that there is no price from input filed presented");
      await this.validate_no_price_from_is_shown();
      //5 There is a price till input field
      console.log("-> VALIDATE: The user checks that there no price till input filed presented");
      await this.validate_no_price_till_is_shown();  
      //6 There is a price slider minimum range
      console.log("-> VALIDATE: THe user checks that there is no price slider minimum range input filed presented");
      await this.validate_no_price_slider_minimum_range_is_shown();   
      //7 There is a price slider maximum range
      console.log("-> VALIDATE: THe user checks that there is no price slider maximum range input filed presented");
      await this.validate_no_price_slider_maximum_range_is_shown();   
      //8 There is a price slider bar
      console.log("-> VALIDATE: THe user checks that there is no price slider progres bar presented");
      await this.validate_no_price_slider_progress_bar_is_shown();   
        
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
      const currentPriceFromValue = await this.price_from().inputValue()+'';
      console.log('CONFIRM: The current price from value is:  '+currentPriceFromValue)
      expect(currentPriceFromValue).toMatch(defaultInputValue); 
    }

    public async validate_price_till_input_field(defaultInputValue: string){
      //provide dynamic wait for the price facet input field interactions
      await this.page.waitForLoadState('domcontentloaded');
      await this.page.waitForSelector("//div[contains(@class,'s-facet-range__progress')]") //price slider bar
      await this.page.locator("//div[contains(@class,'s-facet-range__progress')]").scrollIntoViewIfNeeded //price slider bar
      //Provide an actual verification action
      const currentPriceTillValue = await this.price_till().inputValue()+'';
      console.log('CONFIRM: The current price from value is:  '+currentPriceTillValue)
      expect(currentPriceTillValue).toMatch(defaultInputValue); 
    }

    public async validate_price_slider_minimum_range_input_field(defaultInputValue: string){
      //provide dynamic wait for the price facet input field interactions
      await this.page.waitForLoadState('domcontentloaded');
      await this.page.waitForSelector("//div[contains(@class,'s-facet-range__progress')]") //price slider bar
      await this.page.locator("//div[contains(@class,'s-facet-range__progress')]").scrollIntoViewIfNeeded //price slider bar
      //Provide an actual verification action
      const currentValue = await this.price_slider_minimum_range().inputValue()+'';
      console.log('CONFIRM: The current price from value is:  '+currentValue)
      expect(currentValue).toMatch(defaultInputValue); 
    }

    public async validate_price_slider_maximum_range_input_field(defaultInputValue: string){
      //provide dynamic wait for the price facet input field interactions
      await this.page.waitForLoadState('domcontentloaded');
      await this.page.waitForSelector("//div[contains(@class,'s-facet-range__progress')]") //price slider bar
      await this.page.locator("//div[contains(@class,'s-facet-range__progress')]").scrollIntoViewIfNeeded //price slider bar
      //Provide an actual verification action
      const currentPriceTillValue = await this.price_slider_maximum_range().inputValue()+'';
      console.log('CONFIRM: The current price from value is:  '+currentPriceTillValue)
      expect(currentPriceTillValue).toMatch(defaultInputValue); 
    }


    //******************************** 
    // TEST CASES SKELETON FOR DEBUGGING
    //******************************** 
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