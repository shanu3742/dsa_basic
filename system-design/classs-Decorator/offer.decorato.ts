interface ProductComponent{
    getPrice:() => number
}

interface IProduct extends ProductComponent{
    updatePrice:(price:number) => void
}

class MobilePhone implements IProduct{
    private name:string;
    private price:number;
    constructor(name:string,price:number){
       this.name = name;
       this.price=price;
    }
    getPrice(){
        return this.price
    }
    updatePrice(price:number){
        this.price = price; 
    }
}

type TvType = "Smart Tv" | "Normal Tv" | "Andriod Tv"
class Monitaor implements IProduct{
    private name:string;
    private price:number;
    private type:TvType;
    constructor(name:string,price:number,type:TvType){
        this.name=name;
        this.price=price;
        this.type=type;
    }
    getPrice(){
        return this.price;
    };
    updatePrice(price:number){
        this.price = price; 
    }
}

interface ProductContainerComponent{
    add:(product:ProductComponent) => void
}

class ProductBag implements ProductContainerComponent, ProductComponent{
    private productList:ProductComponent[]=[]
    constructor(){

    }
    add(product:ProductComponent){
        this.productList.push(product);
    }

    getPrice(){
        return this.productList.reduce((accum,current) => accum+current.getPrice(),0);
    };
}

const mobileData = new MobilePhone('Oppo',12000);
const monitor = new Monitaor('samsung',20000,'Normal Tv');

class Offer  {
    constructor(){

    }
    getDisscountPrice(product:IProduct,discount:number){
      let discountPrice = product.getPrice() -  (product.getPrice() *discount)/100
       product.updatePrice(discountPrice);
       return product;
    }
}

const product= new ProductBag();
const offer = new Offer();
const mobileOnOffer = offer.getDisscountPrice(mobileData,10)
product.add(mobileOnOffer);
product.add(monitor);
console.log(product.getPrice())

