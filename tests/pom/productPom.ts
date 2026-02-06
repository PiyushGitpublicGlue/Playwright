import { Page } from "playwright"
import { Locator } from "playwright"

export default class ProductPOM{
        private color: string
        private qtyTB: Locator
        private addToCartBtn: Locator
        private page: Page
        
        constructor(page:Page){
            this.page = page
           this.color = "//button[text()='$$']"
           this.qtyTB = this.page.locator("#field-qty")
           this.addToCartBtn = this.page.locator("//button[text()='ADD TO CART']")
        }

        private createColorLocator(colorType: string){
                let colorLocator: Locator = this.page.locator(this.color.replace('$$',colorType))
                return colorLocator
        }

        public async selectColor(colorType: string):Promise<ProductPOM>{

                await this.createColorLocator(colorType).click()
                return this
        }

        public async fillQuantity(qty: string):Promise<ProductPOM>{
                await this.qtyTB.fill(qty)
                return this
        }

        public async clickAddToCartButton():Promise<ProductPOM>{
                await this.addToCartBtn.click()
                return this
        }


}