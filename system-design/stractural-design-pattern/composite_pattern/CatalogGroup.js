class CatalogGroup {
    constructor(name,composite=[]){
        this.name=name;
        this.composite=composite;
    }

    get total(){
        return this.composite.reduce((acc,cur) => acc+cur.total,0)
    }

    print(){
        console.log(`\n ${this.name.toUpperCase()}`)
        this.composite.forEach((item) => item.print() )
    }
}
module.exports= CatalogGroup;