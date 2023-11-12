import { Page , Browser } from "@playwright/test";
 
 
export class LidlBase {
    readonly page: Page;
    readonly browser:Browser;

    constructor(page: Page, browser: Browser){
        this.page = page;
    }

    public async waitForNumberOfSeconds(timeInSeconds: number){
        await this.page.waitForTimeout(timeInSeconds * 1000);
    }

    public async takePageScreenShot (path: string) {
        const picPath = 'screenshots/'+path+'.png';
        await this.page.screenshot({path: picPath})
    }

    public async getPageTitle(){
        
    }

}