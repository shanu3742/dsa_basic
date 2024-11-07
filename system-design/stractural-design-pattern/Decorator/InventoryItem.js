class InventoryItem {
    constructor(name,price){
        this.name=name;
        this.price=price;
    }

    print(){
        console.log(`${item.name} costs ${item.price}`)
    }
}

class GoldenInventoryItem {
    constructor(baseItem){
        this.name=`Golden ${baseItem.name}`;
        this.price= baseItem.price+1000;
    }

    print(){
        console.log(`${item.name} costs ${item.price}`)
    }
}
class DiamondInventoryItem {
    constructor(baseItem){
        this.name=`Diamon ${baseItem.name}`;
        this.price= baseItem.price+1000;
    }

    print(){
        console.log(`${item.name} costs ${item.price}`)
    }
}

module.exports ={InventoryItem,GoldenInventoryItem,DiamondInventoryItem}