  import { Expect, Locator, Page, expect } from "@playwright/test";
  import { LidlBase } from "../../../../fixtures/lidlBase";

  export default class DECookiesPage extends LidlBase {
    constructor(page: Page) {
      super(page)
    }

  //SK flow 
  //Locators
  DE_acceptAll_cs_g = () => this.page.waitForSelector('button#onetrust-accept-btn-handler');
  DE_acceptAll_cs = () => this. page.getByRole('button', { name: 'POVOLIŤ' });
    

  public async  clickOn_AcceptAllCS_btn() {
    //wait for the element to be shown dynamicaly - 3rd party vendor - not stable
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForLoadState('load');
    
    console.log('The user is waitting in order to see the accept all cs button and interacat with it');
    if(!(this.page.locator('button#onetrust-accept-btn-handler').isVisible())){
      console.log("There was no accetp all cookies option button to be clicked")

    } else {
      await this.page.waitForSelector('button#onetrust-accept-btn-handler');
      (await this.page.waitForSelector('button#onetrust-accept-btn-handler')).scrollIntoViewIfNeeded();
      //User country spec locator with label so to verify that the button label is ok
    
      await this.page.locator('button#onetrust-accept-btn-handler').click();
      console.log('CONFIRM: The user clicked on accept all CS')
      
      // Wait a bit dynamicaly in order to be sure that the pop-up /frame is closed 
      await this.page.waitForLoadState('domcontentloaded');
      await this.page.waitForLoadState('load');
    }
  }

  public async  clickOn_AcceptAllCS_btn_qa() {
    //wait for the element to be shown dynamicaly - 3rd party vendor - not stable
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForLoadState('load');
    
    console.log('The user is waitting in order to see the accept all cs button and interacat with it');
    if(!(this.page.locator('button#onetrust-accept-btn-handler').isVisible())){
      console.log("There was no accetp all cookies option button to be clicked")

    } else {
      await this.page.waitForSelector('button#onetrust-accept-btn-handler');
      (await this.page.waitForSelector('button#onetrust-accept-btn-handler')).scrollIntoViewIfNeeded();
      //User country spec locator with label so to verify that the button label is ok
   
      await this.page.locator('button#onetrust-accept-btn-handler').click();
      console.log('CONFIRM: The user clicked on accept all CS')
      
      // Wait a bit dynamicaly in order to be sure that the pop-up /frame is closed 
      await this.page.waitForLoadState('domcontentloaded');
      await this.page.waitForLoadState('load');
    }
  }

  }
