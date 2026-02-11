import { Locator, Page } from "playwright";
import CheckoutPOM from "./checkoutPom";

export default class CartPOM{


    private columns : Locator
    private rows : Locator
    private page : Page
    private productName : string
    private productPrice : string
    private productQty : string
    private totalPrice : string
    private checkOutBtn : Locator

    constructor(page:Page){
        this.page = page
        this.columns = page.locator("table thead tr th")
        this.rows = page.locator("table tbody tr")
        this.productName = ".font-semibold.break-words.w-full"
        this.productQty = ".min-w-\[3rem\].text-center"
        this.productPrice = "span.font-bold"
        this.totalPrice = ".summary__row.grand-total div:last-child"
        this.checkOutBtn = this.page.locator("//button[contains(text(), 'CHECKOUT')]")
        
    }

    public async clickCheckoutBtn():Promise<CheckoutPOM>{
        await this.page.waitForTimeout(3000)
        await this.checkOutBtn.click()
        return new CheckoutPOM(this.page)
    }

    public async getColumnCount():Promise<number>{
        return await this.columns.count()
    }

    public async getColumnName():Promise<string[]>{
        let columns = await this.columns.all()
        let columnNames : string[] = []

        for(const column of columns){
            let columnName = await column.locator("span").innerText()
            columnNames.push(columnName)
        }

        return columnNames
    }

    public async getRowCount():Promise<number>{
        return await this.rows.count()
    }

    public async getProducts():Promise<string[][]>{
        let rows = await this.rows.all()
        let rowsContent: string[][] = []
        for(const row of rows){
            let rowContent:string[] =[]

            rowContent.push(await row.locator(this.productName).innerText())
            rowContent.push(await row.locator(this.productPrice).innerText())
            rowContent.push(await row.locator(this.productQty).innerText())
            rowContent.push(await row.locator(this.totalPrice).nth(2).innerText())
            rowsContent.push(rowContent)
        }

        return rowsContent
    }
}