import { Page } from "playwright"
import { Locator } from "playwright"
import CartPOM from "./cartPom"
import { expect } from "playwright/test"

export default class ProductPOM{
        private color: string
        private qtyTB: Locator
        private addToCartBtn: Locator
        private viewCartBtn: Locator
        private page: Page
        
        constructor(page:Page){
            this.page = page
           this.color = "//button[text()='$$']"
           this.qtyTB = this.page.locator("#field-qty")
           this.addToCartBtn = this.page.locator("//button[text()='ADD TO CART']")
           this.viewCartBtn = this.page.locator("//button[contains(text(), 'View Cart')]")
        }

        public async fillProductDetails(colorType:string,qty:string){
                await this.selectColor(colorType)
                await this.page.waitForTimeout(3000)
                await this.fillQuantity(qty)
                await this.page.waitForTimeout(3000)
                await this.clickAddToCartButton()
                await this.page.waitForTimeout(3000)
                return this.clickViewCartButton()
        }

        private createColorLocator(colorType: string){
                let colorLocator: Locator = this.page.locator(this.color.replace('$$',colorType))
                return colorLocator
        }

        public async selectColor(colorType: string):Promise<ProductPOM>{
                await this.page.waitForLoadState("load")
                let colorTypeLocator = this.createColorLocator(colorType)
                await colorTypeLocator.click()
                colorTypeLocator.locator("//parent::li[@class='group selected']").waitFor({state:"visible"})
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

        public async clickViewCartButton():Promise<CartPOM>{
                await this.viewCartBtn.click()
                return new CartPOM(this.page)
        }
        


}