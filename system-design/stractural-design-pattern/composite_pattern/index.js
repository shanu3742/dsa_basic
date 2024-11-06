const CatalogGroup = require("./CatalogGroup");
const CatlogItem = require("./catlogItem.pattern");

let boots = new CatlogItem('Leather Bots',79);
let sneakers =  new CatlogItem('kicks',39.89);
let flipFlops=  new CatlogItem('california boots',9.89);


let group_shoes = new CatalogGroup('shoes and such',[boots,sneakers,flipFlops]);
console.log(group_shoes.total)
group_shoes.print()
let food_items = new CatalogGroup('food',[new CatlogItem('apple',19),new CatlogItem('banana',10),new CatlogItem('orange',22)])

let unique_item  = new CatlogItem('unique item',9.89);

let combine_all = new CatalogGroup('order_list',[unique_item,food_items,group_shoes]);


console.log('total item price', combine_all.total);
combine_all.print()
