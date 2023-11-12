import { Page } from "@playwright/test";
 
 
export class LidlBase {
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

    public async waitForNumberOfSeconds(timeInSeconds: number){
        await this.page.waitForTimeout(timeInSeconds * 1000);
    }

    public async takePageScreenShot (path: string) {
        await this.page.screenshot({path: 'screenshots/'+path+'.png'})
    }

}