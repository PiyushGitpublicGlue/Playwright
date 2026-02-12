import { Locator, Page } from "playwright";
import ProductPOM from "./productPom";

export default class HomePom{

    private page: Page
    private productLink: Locator
    

    constructor(page:Page){
        this.page = page
        this.productLink = page.locator("//h3[text()='Ceramic Candy Bowl - Yellow']")
    }

    public async clickProductLink():Promise<ProductPOM>{
        await this.productLink.click()
        return new ProductPOM(this.page)
    }
}