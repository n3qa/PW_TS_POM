  import { Expect, Locator, Page, expect } from "@playwright/test";
  import { LidlBase } from "../../../../fixtures/lidlBase";

  export default class FRCookiesPage extends LidlBase {
    constructor(page: Page) {
      super(page)
    }

  //SK flow 
  //Locators
  SK_acceptAll_cs = () => this. page.getByRole('button', { name: 'POVOLIŤ' });
  SK_srejectAll_cs = () => this.page.locator('label').filter({ hasText: 'Štatistické' }).getByRole('switch', { name: 'Štatistické' });

  SK_preferences_cs = () => this.page.locator('label').filter({ hasText: 'Preferenčné' }).getByRole('switch', { name: 'Preferenčné' });
  SK_statistics_cs = () => this.page.locator('label').filter({ hasText: 'Štatistické' }).getByRole('switch', { name: 'Štatistické' });
  SK_marketing_cs = () => this.page.locator('label').filter({ hasText: 'Marketingové' }).getByRole('switch', { name: 'Marketingové' });
  SK_submitMoreCS = () => this.page.locator('label').filter({ hasText: 'Marketingové' }).getByRole('switch', { name: 'Marketingové' });;

  //Actions
 
  public async SK_clickOn_AcceptAllCS_btn() {
    await this.SK_acceptAll_cs().click();
  }

  public async SK_clickOn_RejectAllCS_btn() {
    await this.SK_srejectAll_cs().click();
  }

  
  public async SK_clickOn_Preferences_btn() {
    await this.SK_preferences_cs().click();
  }

  public async SK_clickOn_Statistics_btn() {
    await this.SK_statistics_cs().click();
  }

  public async SK_clickOn_Marketing_btn() {
    await this.SK_preferences_cs().click();
  }

    

  }
