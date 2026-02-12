import { promises } from "node:dns";
import { Locator, Page } from "playwright";
import HomePom from "./homePom";
import LoginInputDao from "../doa/inputDao/loginInputDao";

export default class LoginPom{
    //instance variables

    private userNameTB: Locator
    private userPasswordTB: Locator
    private submitBtn: Locator
    private page: Page
    
    constructor(page:Page){
        this.page = page
       this.userNameTB = this.page.locator("#field-email")
       this.userPasswordTB = this.page.locator("#field-password")
       this.submitBtn = this.page.locator("button[type='button']").last()
    }

    // methods

    public async goto(){
        await this.page.goto("account/login")
    }

    public async fillUserName(userName:string):Promise<LoginPom>{
        await this.userNameTB.fill(userName)
        return this
    }

    public async fillPassword(password:string):Promise<LoginPom>{
        await this.userPasswordTB.fill(password)
        return this
    }

    public async submit(): Promise <HomePom>{
        await this.submitBtn.click()
        return new HomePom(this.page)
    }

    public async submitCredentials(loginInputDao:LoginInputDao):Promise <HomePom>{
        await this.fillUserName(loginInputDao.getUserName())
        await this.fillPassword(loginInputDao.getPassword())
        return await this.submit()
    }
}