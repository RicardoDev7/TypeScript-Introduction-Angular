import { taxCalculation, type Product } from "./06-function-desestructuring";

const shoppingCart: Product[] = 
[
    {
        description: 'Nokia',
        price: 100 
    },
    {
        description: 'Ipad',
        price: 150
    }
];

const [total, tax] = taxCalculation({products: shoppingCart, tax: 0.15});
console.log({total});
console.log({tax});