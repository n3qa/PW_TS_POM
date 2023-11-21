import { expect, Page } from "@playwright/test";
import { LidlBase } from "../../../../fixtures/lidlBase";

export default class DEfacetCategory extends LidlBase {
  constructor(page: Page) {
    super(page)
  }

  public async goto(url:string) {
    const currnetURL = url;
    await this.page.goto('www.lidl.de');
    console.log ('CONFIRM: The user has navigated to URL: '+currnetURL)
  }

  //Locators
  searchBar = () => this.searchInputField().getAttribute('#search-input-hook');
  searchInputField = () => this.page.locator('#s-search-input-field');
  searchSubmitButton = () => this.page.locator('button.s-search-input__button');
  //Search input field = abbreaviation -> SIF
  SIFplaceHolder = () => this.searchInputField().getAttribute('placeholder');

  //Actions
  public async clickOnSearchInputField () {
    await this.searchInputField().click();
  } 

  public async submitSearchQuery(searchTerm: string) {
    await this.searchInputField().fill(searchTerm);
    await this.searchInputField().press("Enter");
  }

  //Support DEBUG
  public async debugTestCase1() {

    await this.page.goto('https://www.lidl.de/');
    await this.page.getByRole('button', { name: 'Zustimmen' }).click();
    await this.page.goto('https://www.lidl.de/q/search?q=*');
    await this.page.getByRole('button', { name: 'Filtern nach Kategorie' }).click();
    await this.page.getByRole('button', { name: 'Filtern nach Kategorie' }).click();
  }

  public async debugTestCase2() {
    await this.page.goto('https://www.lidl.de/q/search?q=*');
    await this.page.locator('#category').getByRole('button', { name: 'Alles anzeigen' }).click();
    await this.page.getByRole('button', { name: 'Weniger anzeigen' }).click();
  }

  public async debugTestCase3() {
    await this.page.goto('https://www.lidl.de/q/search?q=*');
    await this.page.getByRole('link', { name: 'Garten & Balkon' }).click();
    await this.page.getByRole('link', { name: 'Gartenmöbel & Balkonmöbel' }).click();
  }

  public async debugTestCase4() {
    await this.page.goto('https://www.lidl.de/q/search?variant=a&category=Garten+%26+Balkon%2FGartenm%C3%B6bel+%26+Balkonm%C3%B6bel&idsOnly=false&productsOnly=false');
    await this.page.getByRole('link', { name: 'Gartenmöbelsets' }).click();
  }

  public async debugTestCase5() {
    await this.page.goto('https://www.lidl.de/q/search?variant=a&category=Garten+%26+Balkon%2FGartenm%C3%B6bel+%26+Balkonm%C3%B6bel%2FGartenm%C3%B6belsets&idsOnly=false&productsOnly=false');
    await this.page.getByRole('link', { name: 'Gartenmöbel & Balkonmöbel' }).click();
  }

  public async debugTestCase6() {
    await this.page.goto('https://www.lidl.de/q/search?variant=a&category=Garten+%26+Balkon%2FGartenm%C3%B6bel+%26+Balkonm%C3%B6bel&idsOnly=false&productsOnly=false');
    await this.page.getByRole('link', { name: 'Garten & Balkon' }).click();
  }

  public async debugTestCase7() {
    await this.page.goto('https://www.lidl.de/q/search?variant=a&productsOnly=false&idsOnly=false');
    await this.page.getByRole('link', { name: 'Garten & Balkon' }).click();
    await this.page.getByRole('link', { name: 'Gartenmöbel & Balkonmöbel' }).click();
    await this.page.getByRole('link', { name: 'Gartenmöbelsets' }).click();
  }

  public async debugTestCase8() {
    await this.page.goto('https://www.lidl.de/q/search?variant=a&category=Garten+%26+Balkon%2FGartenm%C3%B6bel+%26+Balkonm%C3%B6bel%2FGartenm%C3%B6belsets&idsOnly=false&productsOnly=false');
    await this.page.getByRole('link', { name: 'Gartenmöbel & Balkonmöbel' }).click();
    await this.page.getByRole('link', { name: 'Garten & Balkon' }).click();
  }

  public async debugTestCase9() {
    await this.page.goto('https://www.lidl.de/q/search?variant=a&productsOnly=false&idsOnly=false');
    await this.page.getByRole('link', { name: 'Garten & Balkon' }).click();
    await this.page.locator('.s-facet__reset').click();
    await this.page.getByRole('link', { name: 'Baumarkt' }).click();
  }

  public async debugTestCase10() {
    await this.page.goto('https://www.lidl.de/');
    await this.page.getByRole('button', { name: 'Zustimmen' }).click();
    await this.page.goto('https://www.lidl.de/q/search?variant=a&category=Garten+%26+Balkon&idsOnly=false&productsOnly=false');
    await this.page.getByRole('link', { name: 'Gartenmöbel & Balkonmöbel' }).click();
    await this.page.locator('.s-facet__reset').click();
}

   public async debugTestCase11() {
    await this.page.goto('https://www.lidl.de/q/search?variant=a&category=Garten+%26+Balkon%2FGartenm%C3%B6bel+%26+Balkonm%C3%B6bel&idsOnly=false&productsOnly=false');
    await this.page.getByRole('link', { name: 'Gartenmöbelsets' }).click();
    await this.page.locator('.s-facet__reset').click();
}

public async debugTestCase12() {
  await this.page.goto('https://www.lidl.de/q/search?variant=a&category=Garten+%26+Balkon%2FGartenm%C3%B6bel+%26+Balkonm%C3%B6bel%2FGartenm%C3%B6belsets&idsOnly=false&productsOnly=false');
  await this.page.getByRole('link', { name: 'Gartenmöbel & Balkonmöbel' }).click();
  await this.page.locator('.s-facet__reset').click();
}

public async debugTestCase13() {
  await this.page.goto('https://www.lidl.de/q/search?variant=a&category=Garten+%26+Balkon%2FGartenm%C3%B6bel+%26+Balkonm%C3%B6bel&idsOnly=false&productsOnly=false');
  await this.page.getByRole('link', { name: 'Garten & Balkon' }).click();
  await this.page.locator('.s-facet__reset').click();
}

public async debugTestCase14() {
  await this.page.goto('https://www.lidl.de/q/search?variant=a&category=Garten+%26+Balkon&idsOnly=false&productsOnly=false');
  await this.page.locator('.s-facet__reset').click();
  await this.page.locator('#category').getByRole('button', { name: 'Alles anzeigen' }).click();
}

public async debugTestCase15() {
  await this.page.goto('https://www.lidl.de/q/search?variant=a&productsOnly=false&idsOnly=false');
  await this.page.getByRole('link', { name: 'Garten & Balkon' }).click();
  await this.page.getByRole('link', { name: 'Gartenmöbel & Balkonmöbel' }).click();
  await this.page.getByRole('link', { name: 'Gartenmöbelsets' }).click();
  await this.page.getByRole('link', { name: 'Garten & Balkon' }).click();
  await this.page.locator('.s-facet__reset').click();
}

public async debugTestCase16() {
  await this.page.goto('https://www.lidl.de/');
  await this.page.getByRole('button', { name: 'Zustimmen' }).click();
  await this.page.goto('https://www.lidl.de/q/search?variant=a&productsOnly=false&idsOnly=false');
  await this.page.getByRole('link', { name: 'Garten & Balkon' }).click();
  await this.page.getByRole('link', { name: 'Gartenmöbel & Balkonmöbel' }).click();
  await this.page.getByRole('link', { name: 'Gartenmöbelsets' }).click();
  await this.page.locator('.s-facet__reset').click();
}


public async debugTestCase17() {
  await this.page.goto('https://www.lidl.de/q/search?variant=a&category=Garten+%26+Balkon%2FGartenm%C3%B6bel+%26+Balkonm%C3%B6bel%2FGartenm%C3%B6belsets&idsOnly=false&productsOnly=false');
  await this.page.getByRole('link', { name: 'Gartenmöbel & Balkonmöbel' }).click();
  await this.page.getByRole('link', { name: 'Garten & Balkon' }).click();
  await this.page.locator('.s-facet__reset').click();
}

public async debugTestCase18() {
  await this.page.goto('https://www.lidl.de/');
  await this.page.getByRole('button', { name: 'Zustimmen' }).click();
  await this.page.goto('https://www.lidl.de/q/search?variant=a&productsOnly=false&idsOnly=false');
  await this.page.getByRole('link', { name: 'Garten & Balkon' }).click();
  await this.page.locator('.s-facet__reset').click();
  await this.page.getByRole('link', { name: 'Baumarkt' }).click();
}


public async debugTestCase19() {
  await this.page.goto('https://www.lidl.de/q/search?variant=a&productsOnly=false&idsOnly=false');
  await this.page.getByRole('link', { name: 'Garten & Balkon' }).click();
  await this.page.getByRole('link', { name: 'Gartenmöbel & Balkonmöbel' }).click();
  await this.page.getByRole('link', { name: 'Gartenmöbel & Balkonmöbel' }).click();
}

public async debugTestCase20() {
  await this.page.goto('https://www.lidl.de/q/search?variant=a&category=Garten+%26+Balkon%2FGartenm%C3%B6bel+%26+Balkonm%C3%B6bel&idsOnly=false&productsOnly=false');
  await this.page.getByRole('link', { name: 'Gartenmöbelsets' }).click();
  await this.page.getByRole('link', { name: 'Gartenmöbelsets' }).click();
}

public async debugTestCase21() {
  await this.page.goto('https://www.lidl.de/q/search?variant=a&category=Garten+%26+Balkon%2FGartenm%C3%B6bel+%26+Balkonm%C3%B6bel%2FGartenm%C3%B6belsets&idsOnly=false&productsOnly=false');
  await this.page.getByRole('link', { name: 'Gartenmöbel & Balkonmöbel' }).click();
  await this.page.getByRole('link', { name: 'Gartenmöbel & Balkonmöbel' }).click();
}

public async debugTestCase22() {
  await this.page.goto('https://www.lidl.de/q/search?variant=a&category=Garten+%26+Balkon%2FGartenm%C3%B6bel+%26+Balkonm%C3%B6bel&idsOnly=false&productsOnly=false');
  await this.page.getByRole('link', { name: 'Garten & Balkon' }).click();
  await this.page.getByRole('link', { name: 'Garten & Balkon' }).click();
}

public async debugTestCase23() {
  await this.page.goto('https://www.lidl.de/q/search?variant=a&category=Garten+%26+Balkon&idsOnly=false&productsOnly=false');
  await this.page.getByRole('link', { name: 'Garten & Balkon' }).click();
}

public async debugTestCase24() {
  await this.page.goto('https://www.lidl.de/q/search?variant=a&productsOnly=false&idsOnly=false');
  await this.page.getByRole('link', { name: 'Garten & Balkon' }).click();
  await this.page.getByRole('link', { name: 'Gartenmöbel & Balkonmöbel' }).click();
  await this.page.getByRole('link', { name: 'Gartenmöbelsets' }).click();
  await this.page.getByRole('link', { name: 'Garten & Balkon' }).click();
  await this.page.getByRole('link', { name: 'Garten & Balkon' }).click();
}

public async debugTestCase25() {
  await this.page.goto('https://www.lidl.de/q/search?variant=a&productsOnly=false&idsOnly=false');
  await this.page.getByRole('link', { name: 'Garten & Balkon' }).click();
  await this.page.getByRole('link', { name: 'Gartenmöbel & Balkonmöbel' }).click();
  await this.page.getByRole('link', { name: 'Gartenmöbelsets' }).click();
  await this.page.getByRole('link', { name: 'Gartenmöbelsets' }).click();
}

public async debugTestCase26() {
  await this.page.goto('https://www.lidl.de/q/search?variant=a&category=Garten+%26+Balkon%2FGartenm%C3%B6bel+%26+Balkonm%C3%B6bel%2FGartenm%C3%B6belsets&idsOnly=false&productsOnly=false');
  await this.page.getByRole('link', { name: 'Gartenmöbel & Balkonmöbel' }).click();
  await this.page.getByRole('link', { name: 'Garten & Balkon' }).click();
  await this.page.getByRole('link', { name: 'Garten & Balkon' }).click();
}

public async debugTestCase27() {
  await this.page.goto('https://www.lidl.de/q/search?variant=a&productsOnly=false&idsOnly=false');
  await this.page.getByRole('link', { name: 'Garten & Balkon' }).click();
  await this.page.getByRole('link', { name: 'Garten & Balkon' }).click();
  await this.page.getByRole('link', { name: 'Baumarkt' }).click();
}


}