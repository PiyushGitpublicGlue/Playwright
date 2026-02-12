import { Locator, Page } from "playwright";
import SuccessOutputDao from "../doa/outputDao/successOutputDao";

export default class SuccessPOM{
    private emailID:Locator
    private page:Page
    
    constructor(page:Page){
        this.page = page
        this.emailID = this.page.locator(".text-textSubdued").nth(1)
    }

    public async getSuccessOutput():Promise<SuccessOutputDao>{
        return new SuccessOutputDao(await this.emailID.innerText())
    }
}