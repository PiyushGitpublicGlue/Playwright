import { Locator, Page } from "playwright";

export default class HomePom{

    private page: Page
    private productLink: Locator
    

    constructor(page:Page){
        this.page = page
        this.productLink = page.locator(".product__list__name.h5.font-medium").first()
    }

    public async clickProductLink(){
        await this.productLink.click()
    }
}