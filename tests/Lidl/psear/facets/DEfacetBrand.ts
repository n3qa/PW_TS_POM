import { expect, Page } from "@playwright/test";
import { LidlBase } from "../../../../fixtures/lidlBase";

export default class SKfacetBrand extends LidlBase{
  constructor(page: Page) {
    super(page)
  }

   //  >>> >>>> >>>>   START REGRESION SUPPORT  <<< <<<, <<<< 

  public async debugTestCase1() {

    await this.page.goto('https://www.lidl.sk/q/search?variant=a&productsOnly=false&idsOnly=false');
    await this.page.getByRole('button', { name: 'Filtrovať podľa Cena' }).click();
    await this.page.getByRole('button', { name: 'Filtrovať podľa Cena' }).click();
  }

  public async debugTestCase2() {
    await this.page.goto('https://www.lidl.sk/q/search?variant=a&productsOnly=false&idsOnly=false');
    await this.page.getByPlaceholder('Hľadať', { exact: true }).click();
  }
  
  public async debugTestCase3() {
    await this.page.goto('https://www.lidl.sk/q/search?variant=a&productsOnly=false&idsOnly=false');
    await this.page.locator('label').filter({ hasText: 'LIVARNO home' }).click();
    await this.page.locator('.s-facet__reset').click();
  }

  public async debugTestCase4() {
    await this.page.goto('https://www.lidl.sk/q/search?variant=a&productsOnly=false&idsOnly=false');
    await this.page.locator('label').filter({ hasText: 'PARKSIDE' }).click();
    await this.page.getByRole('link', { name: 'PARKSIDE', exact: true }).click();
  }
  
  public async debugTestCase5() {
    await this.page.goto('https://www.lidl.sk/q/search?variant=a&productsOnly=false&idsOnly=false');
    await this.page.getByPlaceholder('Hľadať', { exact: true }).click();
    await this.page.getByPlaceholder('Hľadať', { exact: true }).fill('par');
    await this.page.locator('#brand').getByRole('button').click();
  }

  public async debugTestCase6() {
    await this.page.goto('https://www.lidl.sk/q/search?variant=a&productsOnly=false&idsOnly=false');
    await this.page.locator('#brand').getByRole('button', { name: 'Zobraziť všetko' }).click();
    await this.page.getByRole('button', { name: 'Zobraziť menej' }).click();
  }

  public async debugTestCase7() {
    await this.page.goto('https://www.lidl.sk/q/search?variant=a&productsOnly=false&idsOnly=false');
    await this.page.locator('label').filter({ hasText: 'Playtive' }).click();
  }

  public async debugTestCase8() {
    await this.page.goto('https://www.lidl.sk/q/search?variant=a&productsOnly=false&idsOnly=false');
    await this.page.locator('label').filter({ hasText: 'CRIVIT' }).click();
    await this.page.locator('label').filter({ hasText: 'esmara' }).click();
    await this.page.locator('label').filter({ hasText: 'lupilu' }).click();
  } 
  //  >>> >>>> >>>>   END REGRESION SUPPORT  <<< <<<, <<<< 

  
  //END 2 END scenario
  //Step 1: Verify brand name for SK
  public async verifyBrandFacetLabel() {
    console.log("The user verifies that the brand label is per requirments")
    await this.page.locator('[data-testselector="brand-facet"]').click();
    const brandName = await this.page.locator('[data-testselector="brand-facet"]').textContent()
    expect(brandName.includes("Značka")).toBeTruthy()
    console.log('CONFIRM: Brand facet label for SK is with label: '+brandName);
    
    await this.page.locator('[data-testselector="brand-facet"]').click();
    await this.page.waitForSelector('[data-testselector="brand-facet"]')
  }

  //Check brand search functionality  
   public async veryfyBrandSearchInputBoxCanBeActivatedWithBasicSearch(){
    await this.page.waitForSelector('[data-testselector="brand-facet-search-input-field"]')
    await this.page.locator('[data-testselector="brand-facet-search-input-field"]').fill('Parkside')
    await this.page.locator('[data-testselector="brand-facet-search-input-field"]').selectText('Parkside');
    await this.page.keyboard.press('Backspace');
   }

   //Check buttons for show more / show less brand options
   public async verifyBrandFacetShowMoreAndShowLessButtonsFunctionality(){
    const moreBrands = await this.page.locator('[data-testselector="brand-facet-show-more-button"]').textContent()
    expect(moreBrands.includes("Zobraziť všetko")).toBeTruthy()
    await this.page.locator('[data-testselector="brand-facet-show-more-button"]').click();
    const lessBrands = await this.page.locator('[data-testselector="brand-facet-show-less-button"]').textContent()
    expect(lessBrands.includes("Zobraziť menej")).toBeTruthy()
    await this.page.locator('[data-testselector="brand-facet-show-less-button"]').click();
   }

   public async verifyBasicBrandSearchWithTermA() {
    await this.page.locator('[data-testselector="brand-facet-search-input-field"]').fill("A");
    console.log("CONFIRM: 'A' is typed in the Brand Search")

    await this.page.waitForSelector('[for="facet_brand_AquaPur"]')
    expect(await this.page.locator('[for="facet_brand_AquaPur"]').isVisible()).toBeTruthy()
    console.log("CONFIRM: Checkbox AquaPur is checked")
   
    await this.page.locator('[data-testselector="brand-facet-search-input-field"]').selectText("A");
    await this.page.keyboard.press('Backspace');
    console.log("CONFIRM: 'A' is deleted in the Brand Search")
    expect(await this.page.locator('[for="facet_brand_AquaPur"]').isVisible()).toBeFalsy()
    console.log("Checkbox AquaPur is not checked")
    await this.page.waitForSelector('[for="facet_brand_LIVARNO_home"]')
   }
   
   public async verifyBasicBrandSearchWithTermEs(){
    await this.page.locator('[data-testselector="brand-facet-search-input-field"]').type("Es");
    console.log("CONFIRM: 'Es' is typed in the Brand Search")
    await this.page.waitForSelector('[for="facet_brand_Esmeyer"]')
    expect(await this.page.locator('[for="facet_brand_Esmeyer"]').isVisible()).toBeTruthy()
    console.log("CONFIRM: Checkbox Esmeyer is checked")
    await this.page.locator('[data-testselector="brand-facet-search-input-field"]').selectText("Es");
    await this.page.keyboard.press('Backspace');
    console.log("'Es' is deleted in the Brand Search")
    expect(await this.page.locator('[for="facet_brand_Esmeyer"]').isVisible()).toBeFalsy()
    console.log("CONFIRM: Checkbox Esmeyer is not checked")
    await this.page.waitForSelector('[for="facet_brand_LIVARNO_home"]')
   }

   public async clickOn_showMoreBrands_button() {
    await this.page.locator('[data-testselector="brand-facet-show-more-button"]').click();
    await this.page.waitForSelector('[for="facet_brand_zoofari"]')
   }

   // click on first checkbox '-empty' & delete selection
   public async clickOn_firstCheckbox_and_deleteSelection() {
    await this.page.locator('[for="facet_brand__"]').click();
    expect(await this.page.locator('[for="facet_brand__"]').isChecked()).toBeTruthy()
    console.log("CONFIRM: Checkbox One is checked")

    await this.page.waitForSelector('[id="product_0"]')
    await this.page.waitForSelector('[id="product_1"]')
    console.log("CONFIRM: Articles are displayed")

    await this.page.locator('[class="m-icon s-selection__x"]').click();
    const firstBrands = await this.page.locator('[data-testselector="brand-facet-show-more-button"]').textContent()
    expect(firstBrands.includes("Zobraziť všetko")).toBeTruthy()
    await this.page.waitForTimeout(500);

    await this.page.locator('[data-testselector="brand-facet-show-more-button"]').click();
    expect(await this.page.locator('[for="facet_brand_AquaPur"]').isChecked()).toBeFalsy()
    console.log("CONFIRM: Checkbox One isn't checked")
   }

   public async clickOn_secondCheckBox_for_Parkside_and_delete_Selection(){
    await this.page.waitForTimeout(500);
    await this.page.locator('[for="facet_brand_PARKSIDE"]').click();
    expect(await this.page.locator('[for="facet_brand_PARKSIDE"]').isChecked()).toBeTruthy()
    console.log("CONFIRM: Checkbox Two is checked - 'Parkside Brand'")

    await this.page.waitForSelector('[id="product_0"]')
    await this.page.waitForSelector('[id="product_1"]')
    console.log("CONFIRM: Articles are displayed")

    await this.page.locator('[data-testseletor="brand-facet-header-reset-option"]').click();
    const secondBrand = await this.page.locator('[data-testselector="brand-facet-show-more-button"]').textContent()
    expect(secondBrand.includes("Zobraziť všetko")).toBeTruthy()
    await this.page.waitForTimeout(1500);

    await this.page.locator('[data-testselector="brand-facet-show-more-button"]').click();
    expect(await this.page.locator('[for="facet_brand_AURIOL"]').isChecked()).toBeFalsy()
    console.log("CONFIRM: Checkbox Two isn't checked")
   }

  public async end2end() {
    
 

    // Klicken auf zweites Kontrollkästchen "Parkside" + Auswahl löschen
   
  }
}