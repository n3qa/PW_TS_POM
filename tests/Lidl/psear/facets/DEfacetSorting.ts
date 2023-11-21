import { expect, Page } from "@playwright/test";
import { LidlBase } from "../../../../fixtures/lidlBase";

export default class DEfacetSorting extends LidlBase{
  constructor(page: Page) {
    super(page)
  }

   //  >>> >>>> >>>>   START REGRESION SUPPORT  <<< <<<, <<<< 
 public async debugTestCase1(){
  await this.page.goto('https://www.lidl.de/');
  await this.page.getByRole('button', { name: 'Zustimmen' }).click();
  await this.page.goto('https://www.lidl.de/q/search?q=*');
  await this.page.getByRole('link', { name: 'Preis aufsteigend' }).click();
  await this.page.getByRole('button', { name: 'Nächste Seite Weitere Produkte laden' }).click();
  await this.page.getByRole('button', { name: 'Nächste Seite Weitere Produkte laden' }).click();
  await this.page.getByRole('button', { name: 'Nächste Seite Weitere Produkte laden' }).click();
 }
}