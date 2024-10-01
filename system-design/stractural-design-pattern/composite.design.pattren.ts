interface ProductComponent{
    getPrice:() => number
}
class Phone implements ProductComponent{
    private name:string;
    private price:number;
    constructor(name:string,price:number){
       this.name = name;
       this.price=price;
    }
    getPrice(){
        return this.price
    }
}

type DekstopType = "Smart Tv" | "Normal Tv" | "Andriod Tv"
class Dekstop implements ProductComponent{
    private name:string;
    private price:number;
    private type:DekstopType;
    constructor(name:string,price:number,type:DekstopType){
        this.name=name;
        this.price=price;
        this.type=type;
    }
    getPrice(){
        return this.price;
    };
}

interface ProductContainerComponent{
    add:(product:ProductComponent) => void
}

class ProductContainer implements ProductContainerComponent, ProductComponent{
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

const mobile = new Phone('Oppo',12000);
const dekstop = new Dekstop('samsung',20000,'Normal Tv');


const products= new ProductContainer();
products.add(mobile);
products.add(dekstop);

console.log(products.getPrice())

