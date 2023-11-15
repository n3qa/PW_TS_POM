  import { Expect, Locator, Page, expect } from "@playwright/test";
  import { LidlBase } from "../../../../fixtures/lidlBase";

  export default class SKCookiesPage extends LidlBase {
    constructor(page: Page) {
      super(page)
    }

  //SK flow 
  //Locators 
  //Fast OneTrust decition window 
  acceptAll_cs = () => this.page.getByRole('button', { name: 'POVOLIŤ' });
  rejectAll_cs = () => this.page.getByRole('button', { name: 'ODMIETNUŤ' }); 
  advanced_cs = () => this.page.getByRole('button', { name: 'PRISPÔSOBIŤ' });
  
  //Advance (more) cookie settings
  acceptAdvance_cs = () => this.page.getByRole('button', { name: 'SCHVÁLIŤ VÝBER' });
  preferences_cs = () => this.page.locator('label').filter({ hasText: 'Preferenčné' }).getByRole('switch', { name: 'Preferenčné' });
  statistics_cs = () => this.page.locator('label').filter({ hasText: 'Štatistické' }).getByRole('switch', { name: 'Štatistické' });
  marketing_cs = () => this.page.locator('label').filter({ hasText: 'Marketingové' }).getByRole('switch', { name: 'Marketingové' });
  submitMoreCS = () => this.page.locator('label').filter({ hasText: 'Marketingové' }).getByRole('switch', { name: 'Marketingové' });;

  //Actions
 
  public async  clickOn_AcceptAllCS_btn() {
    //wait for the element to be shown dynamicaly - 3rd party vendor - not stable
    await this.page.waitForSelector('button#onetrust-accept-btn-handler');
    
    //User country spec locator with label so to verify that the button label is ok
    await this.acceptAll_cs().click();

    // Wait a bit dynamicaly in order to be sure that the pop-up /frame is closed 
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForLoadState('load');
    
    //VErify the button is no longer visible and it was clicked
    await expect(this.acceptAll_cs()).toHaveCount(0);
  }

  public async clickOn_RejectAllCS_btn() { 
    await this.rejectAll_cs().isVisible();
    await this.rejectAll_cs().click();
    await this.page.waitForLoadState('domcontentloaded');
    await expect(this.rejectAll_cs()).toHaveCount(0);
  }

  public async clickOn_AdvancedCS_btn() { 
    await this.advanced_cs().isVisible();
    await this.advanced_cs().click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  public async clickOn_SubmitAdvanceCS_btn() {
    await this.acceptAdvance_cs().isVisible();
    await this.acceptAdvance_cs().click();
    await this.page.waitForLoadState('domcontentloaded');
  }
  

  public async clickOn_Preferences_btn() {
    await this.page.waitForLoadState();
    await this.preferences_cs().click();
  }

  public async clickOn_Statistics_btn() {
    await this.page.waitForLoadState();
    await this.statistics_cs().click();
  }

  public async clickOn_Marketing_btn() {
    await this.page.waitForLoadState();
    await this.preferences_cs().click();
  }


}
