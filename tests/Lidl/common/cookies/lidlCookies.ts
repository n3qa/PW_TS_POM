  import { Expect, Locator, Page, expect } from "@playwright/test";
  import { LidlBase } from "../../../../fixtures/lidlBase";

  export default class Cookies extends LidlBase {
    constructor(page: Page) {
      super(page)
    }
   
    acceptAll_cs_g = () => await this.page.waitForSelector('button#onetrust-accept-btn-handler');
    
    

  }
