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
  header_reset_btn = () =>  this.page.locator('[data-testseletor="category-facet-header-reset-option"]');

  //1.4 Navigation reset all button
  navigation_reset_all_bubbles_button = () => this.page.getByRole('link', { name: 'Zrušiť filtre' });
 

  //2. CATEGORY TREE
  //2.1. PROD FIRST level nodes
  first_level_moda = () => this.page.getByRole('link', { name: 'Móda' });
  first_level_workshop_garden = () => this.page.getByRole('link', { name: 'Dielňa a záhrada' });
  //2.1.1. bubble reset option for first level moda
  bubble_reset_option_for_first_level_moda = () =>  this.page.getByRole('link', { name: 'Móda', exact: true });

  //2.2. PROD SECOND level nodes
  second_level_women_moda = () =>  this.page.getByRole('link', { name: 'Dámska móda' });
  
  //2.2.1.reset option for second level women moda
  bubble_reset_option_for_second_level_women_moda = () =>  this.page.getByRole('link', { name: 'Móda' });
  
  //2.3. PROD THIRD level nodes
  third_level_xxx_women_moda = () =>   this.page.getByRole('link', { name: 'Dámska XXL móda' });
  //2.3.1.reset option for third level XXL women moda
  bubble_reset_option_for_third_level_xxl_women_moda = () =>  this.page.locator('nav').filter({ hasText: 'Filtrovať podľa Kategórie Móda Dámska móda Dámska XXL móda Filtrovať podľa Cena ' }).getByRole('link').first().click();
  
  //1.4. QA FIRST level nodes
  //1.5. QA SECOND level nodes
  //1.6. QA THIRD level nodes

  //2 
  //1 Price facet expand and collapse 
   //2 Price facet functionalities input fields
   //3 Price facet functionalities (drag and drop) slider functionalities
   
   //4 Reset option
   

  //2. CATEGORY TREE
  //2.1. PROD FIRST level nodes
  first_level_moda = () =>   this.page.getByRole('link', { name: 'Móda' });
  //2.1.1. bubble reset option for first level moda 
  // to slow function with xpath operation 2 conditions operator for finding 
  // a relevat bubble by provided label
  bubble_reset_option_for_first_level_moda = () => this.page.locator('//li/div/a/span[@class="s-selection__label" and text()="Móda"]');

 
  //2.2. PROD SECOND level nodes
  second_level_women_moda = () =>  this.page.getByRole('link', { name: 'Dámska móda' });
  //2.2.1.reset option for second level women moda
  bubble_reset_option_for_second_level_women_moda = () =>   this.page.getByRole('link', { name: 'Móda' });
  
  //2.3. PROD THIRD level nodes
  third_level_xxx_women_moda = () =>   this.page.getByRole('link', { name: 'Dámska XXL móda' });
  //2.3.1.reset option for third level XXL women moda
  bubble_reset_option_for_third_level_xxl_women_moda = () =>  this.page.locator('nav').filter({ hasText: 'Filtrovať podľa Kategórie Móda Dámska móda Dámska XXL móda Filtrovať podľa Cena ' }).getByRole('link').first();
  
  //1.4. QA FIRST level nodes
  //1.5. QA SECOND level nodes
  //1.6. QA THIRD level nodes

  //2 
  //1 Price facet expand and collapse 
   //2 Price facet functionalities input fields
   //3 Price facet functionalities (drag and drop) slider functionalities
   
   //4 Reset option
   
    
    

//  
 
   


 
  //SK PROD data spefic  


  //1. Category tree 


  //Actions
  public async click_on_first_level_category_node () {
    await this.first_level_moda().click();
    console.log('CONFIRM: THe user has clicked on first level node: MODA')
  }

  public async click_on_second_level_category_node () {
    await this.second_level_women_moda().click();
  }
  
  // ACTION END

  // VALIDATIONS
  // CATEOGRY LABEL
  public async validate_category_label(){
    const categoryLabel = await this.page.locator('[data-testselector="category-facet"]').textContent()
    expect(categoryLabel.includes('Kategórie')).toBeTruthy();
    console.log('CONFIRM: Category country spec label is: '+categoryLabel);
  }


  //VALIDATIONS 
  // RESET OPTIONS
  // 1st LEVEL

  public async validate_no_navigation_reset_all_bubbles_button_is_shown(){
    await expect(this.navigation_reset_all_bubbles_button()).toHaveCount(0);
    console.log('CONFIRM: There is no navigation reset all bubbles button')
  }

  public async validate_no_header_reset_option_is_shown(){
    await expect(this.header_reset_btn()).toHaveCount(0);
    console.log('CONFIRM: No header reset option is presented')
  }
   
  public async validate_header_reset_option_is_shown(){
    await expect(this.header_reset_btn()).toHaveCount(1);
    console.log('CONFIRM: Header reset option is presented')
  }

  public async validate_navigation_reset_all_bubbles_button_is_shown(){
    await expect(this.navigation_reset_all_bubbles_button()).toHaveCount(1);
    console.log('CONFIRM: There is no navigation reset all bubbles button')
  }

  //First level bubbles
  public async validate_no_bubble_reset_option_for_moda_is_shown(){
    await expect(this.bubble_reset_option_for_first_level_moda()).toHaveCount(0)
    console.log('CONFIRM: No bubble reset option is presented')
  }

  public async validate_bubble_reset_option_for_moda_is_shown(){
    await expect(this.bubble_reset_option_for_first_level_moda()).toHaveCount(1);
    console.log('CONFIRM: Bubble reset option is presented')
  }

  // RESET OPTIONS
  // 2n LEVEL
  //Second level bubbles
  

  //VALIDATIONS 
  // CATEGORY TREE
  // 1st LEVEL
  //7.1. Validate target node is shown as parent
  //7.3. Validate destination node (the node that was clicked) is active
  //7.4. Validate 3rd navitation node is presented for the user
  
  // CATEGORY TREE
  // 2nd LEVEL
   public async validate_no_first_level_node_for_workshop_and_garden_is_shown() {
    await expect(this.first_level_workshop_garden()).toHaveCount(0);
    console.log('CONFIRM: There is no first level syblings shown to the user with label '+ 'Dielňa a záhrada')   
   }
    
   public async validate_second_level_node_for_women_moda_is_shown() {
    await expect(this.second_level_women_moda()).toHaveCount(1);
    console.log('CONFIRM: There is a second level node with label'+ 'Dámska móda')   
   }
   public async validate_no_third_level_node_for_workshop_and_garden_is_shown() {
    await expect(this.first_level_workshop_garden()).toHaveCount(0);
    console.log('CONFIRM: There is no first level syblings shown to the user with label '+ 'Dielňa a záhrada')   
   }
 
 //7.1. Validate target node is shown as parent
  //7.3. Validate destination node (the node that was clicked) is active
  //7.4. Validate 3rd navitation node is presented for the user

  //Support DEBUG
  public async debugTestCase1() {
    await this.page.goto('https://www.lidl.sk/q/search?variant=a&category=M%C3%B3da&idsOnly=false&productsOnly=false');
    await this.page.getByRole('link', { name: ' Móda' }).click();

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