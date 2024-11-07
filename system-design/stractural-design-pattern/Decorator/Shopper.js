class Shopper {

    constructor(name,account=0){
        this.name= name;
        this.account = account;
        this.item = []
    }
    purchase(item){
        if(item.price>this.account){
            console.log(`don't have  enough ammount to purched`)
        }else{
            console.log(`purchasing item ${item.name}`)
            this.account -=item.price;
            this.item.push(item) 
        }
    }

    printStatus(){
        console.log(`${this.name} has purchased ${this.item.length} items:`)
        this.item.forEach((item) => {
        console.log(`${item.name}-${item.price}`)
        })
    }
}

module.exports=Shopper;