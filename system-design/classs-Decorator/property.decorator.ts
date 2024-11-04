interface ElectronicComponent {
    getPrice: () => number;
}

function Discount(discount: number) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value; // store original getPrice method

        descriptor.value = function () {
            const originalPrice = originalMethod.apply(this); // call the original getPrice
            const discountedPrice = originalPrice - (originalPrice * discount) / 100;
            return discountedPrice; // return the discounted price
        };

        return descriptor; // return the updated descriptor
    };
}

class MobileAndriodPhone implements ElectronicComponent {
    private name: string;
    private price: number;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    @Discount(10) // Applying a 10% discount
    getPrice() {
        return this.price;
    }
}

type MonitorType = "Smart Tv" | "Normal Tv" | "Andriod Tv";

class Tv implements ElectronicComponent {
    private name: string;
    private price: number;
    private type: MonitorType;
    constructor(name: string, price: number, type: MonitorType) {
        this.name = name;
        this.price = price;
        this.type = type;
    }

    getPrice() {
        return this.price;
    }
}

interface ProductContainerComponent {
    add: (product: ElectronicComponent) => void;
}

class ProductInBag implements ProductContainerComponent, ElectronicComponent {
    private productList: ElectronicComponent[] = [];
    constructor() {}

    add(product: ElectronicComponent) {
        this.productList.push(product);
    }

    getPrice() {
        return this.productList.reduce((accum, current) => accum + current.getPrice(), 0);
    }
}

const mobileInBag = new MobileAndriodPhone('Oppo', 12000);
const monitorInBag = new Tv('samsung', 20000, 'Normal Tv');

const productInBag = new ProductInBag();
productInBag.add(mobileInBag); // This will apply the discount via the @Discount decorator
productInBag.add(monitorInBag); // No discount applied

console.log(productInBag.getPrice()); // Should print the total price with mobile discounted
