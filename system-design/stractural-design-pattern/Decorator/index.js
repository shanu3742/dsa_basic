const { InventoryItem, GoldenInventoryItem, DiamondInventoryItem } = require("./InventoryItem");
const Shopper = require("./Shopper");


let alex = new Shopper('Alex',10000);
let walkman = new InventoryItem('walkman',100);
let neclace = new InventoryItem('neclace',100);

let goldenNeclace = new GoldenInventoryItem(neclace);
let diamondNeclace = new DiamondInventoryItem(goldenNeclace);

let diamondWalkman =  new DiamondInventoryItem(walkman);
alex.purchase(diamondNeclace);
alex.purchase(diamondWalkman);

alex.printStatus();