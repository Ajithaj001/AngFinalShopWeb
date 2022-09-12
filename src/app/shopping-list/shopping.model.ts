export class ShoppingList{
    public productName: string;
    public price: string;
    public imagePath: string;
    public discountPrice:string;
    constructor( productName: string, price:string,discountPrice:string, imagePath:string){
        this.productName= productName;
        this.price= price;
        this.imagePath= imagePath;
        this. discountPrice =discountPrice;
    }
}