import { Expect, Locator, Page, expect } from "@playwright/test";

export default class Cookies {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

    // Weblocators initialization 
    // UI MAP
    // 1: GENERAL WEB ELEMENTS
    


    // 2: COMMON WEB ELEMENTS 
    // 2.1. OneTrust
    readonly fastDecisionCookiesBotProceedButton: Locator;

    //3: COUNTRY SPEC WEB ELEMENTS
 

  public async goto() {
  await this.page.goto("https://www.lidl.sk/?tab=Online");
    
     
    // UI MAP
    // 1: GENERAL WEB ELEMENTS



    // 2: COMMON WEB ELEMENTS 
    // 2.1. OneTrust

    // 3: COUNTRY SPEC WEB ELEMENTS
    //Locators for CookieBot
     this.fastDecisionCookiesBotProceedButton =  this.page.locator('xpath=(//button[@data-controller="cookie-alert/extended/button/accept"])[1]')

  }

  async clickOn_cookieBot_FastDecisionProceed_BTN () {
    await this.fastDecisionCookiesBotProceedButton.check();
  }
   
  fastDecisionPopUpDetailsButton = () =>
    this.page.locator(
      'xpath=//button[@data-controller="cookie-alert/extended/detail-link"]'
    );
  fastDecisionPopUpCloseButton = () =>
    this.page.locator(
      'xpath=//button[@data-controller="cookie-alert/extended/button/close'
    );

  //CookiesBot checkBoxes   'xpath=(//button[@data-controller="cookie-alert/extended/button/accept"])[1]'
  necessaryCookiesCheckBox = () => this.page.locator('css=#necessary');
  statisticsCookiesCheckBox = () => this.page.locator('xpath=//input[contains(@id,"statistics")]/..//label');
  preferencesCookiesCheckBox = () => this.page.locator('xpath=//input[contains(@id,"preferences")]/..//label');
  marketingCookiesCheckBox = () => this.page.locator('xpath=//input[contains(@id,"marketing")]/..//label');
 
  //CookiesBot decision window
  cookiesBotAcceptButton = () =>
    this.page.locator(
      'xpath=(//button[contains(@data-controller,"cookie-alert/extended/button/accept")])[2]'
    );
  cookiesBotConfigurationButton = () =>
    this.page.locator(
      'data-controller="cookie-alert/extended/button/configuration"'
    );

  //OneTrust fast decision Locators
  acceptOneTrustFastDecisionButton = () =>
    this.page.locator("#onetrust-accept-btn-handler");
  rejectOneTrustFastDecisionButton = () =>
    this.page.locator("#onetrust-reject-all-handler");
  configureOneTrustButton = () => this.page.locator("#onetrust-pc-btn-handler");

  //Actions
  //CookiesBot and OneTrust fast decision pop-up
  public async acceptCookiesSettings() {
    await this.page.pause();
    //define cookies or onetrust flow appears for the user
    var isCookiesBootShown = "";

    try {
      await expect.soft(this.fastDecisionCookiesProceedButton()).toBeVisible();
      var isCookiesBootShown = "cookiesBot shown";
    } catch (error) {
      isCookiesBootShown = "not shown";
      console.log("No Cookie popup");
    }

    if (isCookiesBootShown === "cookiesBot shown") {
      try {
        await this.fastDecisionCookiesProceedButton().click();
      } catch (error) {
        console.log("No Cookie popup");
      }
    }
  }

  public async selectSpecificCookieSettings(cookiesType: string) {
    
    //define cookies or onetrust flow appears for the user
    var isCookiesBootShown = "";

    try {
      await expect.soft(this.fastDecisionPopUpDetailsButton()).toBeVisible();
      var isDetailsButton = "details button shown";
      await this.fastDecisionPopUpDetailsButton().click();
      console.log("Fast decision details button is shown and cliked");
    } catch (error) {
      isCookiesBootShown = "not shown";
      console.log("Fast decition details button is NOT SHOWN and not clicked");
    }

    if (isDetailsButton === "details button shown") {
      try {
        switch (cookiesType) {
          case "necessary":
            try {
             await this.necessaryCookiesCheckBox().click();         
              const message = `The ${cookiesType} cookies check box is selected `;
              console.log(message);
            } catch (error) {
              const message = `The ${cookiesType} cookies check box is NOT SELECTED !`;
              console.log(message);
            }
            break;

          case "statistics":
            try {
              await this.statisticsCookiesCheckBox().click();
              const message = `The ${cookiesType} cookies check box is selected `;
              console.log(message);
            } catch (error) {
              const message = `The ${cookiesType} cookies check box is NOT SELECTED !`;
              console.log(message);
            }
            break;

          case "preferences":
            try {
              await this.preferencesCookiesCheckBox().click();
              const message = `The ${cookiesType} cookies check box is selected `;
              console.log(message);
            } catch (error) {
              const message = `The ${cookiesType} cookies check box is NOT SELECTED !`;
              console.log(message);
            }
            break;

          case "marketing":
            try {
              await this.marketingCookiesCheckBox().click();
              const message = `The ${cookiesType} cookies check box is selected `;
              console.log(message);
            } catch (error) {
              const message = `The ${cookiesType} cookies check box is NOT SELECTED !`;
              console.log(message);
            }
            break;
        }

        //Confirm selected cookie settings
        await this.cookiesBotAcceptButton().click();
      } catch (error) {
        console.log(
          `There was an error when the user tried to select ${cookiesType} coockies settings.`
        );
      }
    }
  }

  //Verifications
}
