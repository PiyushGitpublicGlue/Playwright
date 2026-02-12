import { ProductDataLayer } from "../../datacontrollerLayer/productDataLayer";

export default class ProductInoutDao{


    private color:string
    private quantity:string

    constructor(productDataLayer: ProductDataLayer) {
        this.color= productDataLayer.color
        this.quantity= productDataLayer.quantity
    }

    public getColor(){
        return this.color
    }

    public getQty(){
        return this.quantity
    }
}