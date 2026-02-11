import { Locator, Page } from "playwright";
import SuccessPOM from "./successPom";

export default class CheckoutPOM{

    private page:Page
    private fullNameTB: Locator
    private telephoneTB: Locator
    private addressTB: Locator
    private cityTB: Locator
    private countryDD: Locator
    private provinceDD: Locator
    private postcodeTB: Locator
    private shippingMethodRB : Locator
    private paymentTypeRB:Locator
    private placeOrderBtn:Locator

    constructor(page:Page){
        this.page = page
        this.fullNameTB = page.locator("input[name='shippingAddress.full_name']")
        this.telephoneTB = page.locator("input[name='shippingAddress.telephone']")
        this.addressTB = page.locator("input[name='shippingAddress.address_1']")
        this.cityTB = page.locator("input[name='shippingAddress.city']")
        this.countryDD = page.locator("[id='field-shippingAddress.country']")
        this.provinceDD = page.locator("[id='field-shippingAddress.province']")
        this.postcodeTB = page.locator("input[name='shippingAddress.postcode']")
        this.shippingMethodRB = page.locator("//label[text()='Express']")
        this.paymentTypeRB = page.locator("//span[text()='Cash On Delivery']")
        this.placeOrderBtn = page.locator("//span[text()='Place Order']")

    }

    public async fillAddressDetails(fullName:string,telephone:string,address:string,city:string,countryName:string,province:string,postcode:string,shippingMehod:string ):Promise<SuccessPOM>{
        await this.page.waitForTimeout(3000)
        await this.fullNameTB.fill(fullName)
        await this.page.waitForTimeout(3000)
        await this.telephoneTB.fill(telephone)
        await this.page.waitForTimeout(3000)
        await this.addressTB.fill(address)
        await this.page.waitForTimeout(3000)
        await this.cityTB.fill(city)
        await this.page.waitForTimeout(3000)
        //await this.countryDD.selectOption({label:countryName})
        //await this.page.locator({labl})
        await this.countryDD.click()
        await this.page.locator(`//div[text()='${countryName}']`).click()
        await this.page.waitForTimeout(3000)
        await this.provinceDD.click()
        await this.page.locator(`//div[text()='${province}']`).click()
        await this.page.waitForTimeout(3000)
        await this.postcodeTB.fill(postcode)
        await this.page.waitForTimeout(3000)
        await this.shippingMethodRB.click()
        await this.page.waitForTimeout(3000)
        await this.paymentTypeRB.click()
        await this.page.waitForTimeout(3000)
        await this.placeOrderBtn.click()
        await this.page.waitForTimeout(3000)
        return new SuccessPOM(this.page)


    }

    
}