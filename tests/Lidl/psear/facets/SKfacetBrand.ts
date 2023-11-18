import { expect, Page } from "@playwright/test";
import { LidlBase } from "../../../../fixtures/lidlBase";

export default class SKfacetBrand extends LidlBase{
  constructor(page: Page) {
    super(page)
  }

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
 

  public async end2end() {
     
 

    
 

    // Eintippen "Es" im Suchfeld
    await page.locator('[data-testselector="brand-facet-search-input-field"]').type("Es");
    console.log("'Es' is typed in the Brand Search")
    await page.waitForSelector('[for="facet_brand_Esmeyer"]')
    expect(await page.locator('[for="facet_brand_Esmeyer"]').isVisible()).toBeTruthy()
    console.log("Checkbox Esmeyer is checked")
    await page.locator('[data-testselector="brand-facet-search-input-field"]').selectText("Es");
    await page.keyboard.press('Backspace');
    console.log("'Es' is deleted in the Brand Search")
    expect(await page.locator('[for="facet_brand_Esmeyer"]').isVisible()).toBeFalsy()
    console.log("Checkbox Esmeyer is not checked")
    await page.waitForSelector('[for="facet_brand_LIVARNO_home"]')

    // Klicken auf "Marke Alles Anzeigen"
    await page.locator('[data-testselector="brand-facet-show-more-button"]').click();
    await page.waitForSelector('[for="facet_brand_zoofari"]')

    // Klicken auf erste Kontrollkästchen "-leer" + Auswahl löschen
    await page.locator('[for="facet_brand__"]').click();
    expect(await page.locator('[for="facet_brand__"]').isChecked()).toBeTruthy()
    console.log("Checkbox One is checked")

    await page.waitForSelector('[id="product_0"]')
    await page.waitForSelector('[id="product_1"]')
    console.log("Articles are displayed")

    await page.locator('[class="m-icon s-selection__x"]').click();
    const firstBrands = await page.locator('[data-testselector="brand-facet-show-more-button"]').textContent()
    expect(firstBrands.includes("Zobraziť všetko")).toBeTruthy()
    await page.waitForTimeout(500);

    await page.locator('[data-testselector="brand-facet-show-more-button"]').click();
    expect(await page.locator('[for="facet_brand_AquaPur"]').isChecked()).toBeFalsy()
    console.log("Checkbox One isn't checked")

    // Klicken auf zweites Kontrollkästchen "Parkside" + Auswahl löschen
    await page.waitForTimeout(500);
    await page.locator('[for="facet_brand_PARKSIDE"]').click();
    expect(await page.locator('[for="facet_brand_PARKSIDE"]').isChecked()).toBeTruthy()
    console.log("Checkbox Two is checked - 'Parkside Brand'")

    await page.waitForSelector('[id="product_0"]')
    await page.waitForSelector('[id="product_1"]')
    console.log("Articles are displayed")

    await page.locator('[data-testseletor="brand-facet-header-reset-option"]').click();
    const secondBrand = await page.locator('[data-testselector="brand-facet-show-more-button"]').textContent()
    expect(secondBrand.includes("Zobraziť všetko")).toBeTruthy()
    await page.waitForTimeout(500);

    await page.locator('[data-testselector="brand-facet-show-more-button"]').click();
    expect(await page.locator('[for="facet_brand_AURIOL"]').isChecked()).toBeFalsy()
    console.log("Checkbox Two isn't checked")
  }
}