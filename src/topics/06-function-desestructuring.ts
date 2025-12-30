export interface Product {
    description: string;
    price: number;
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

const phone : Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet : Product = {
    description: 'IPad Air',
    price: 250.0
}

const shoppingCart: Product[] = [phone, tablet];

export function taxCalculation(options: TaxCalculationOptions): [number, number]{
    const {tax, products} = options;
    let total: number = 0;
    products.forEach( ( { price } ) => { total += price; });
    return [total, total * tax];
}

const optionsRequest: TaxCalculationOptions = {
    products: shoppingCart,
    tax: 0.15
}

const [totalPrice, totalTax] = taxCalculation(optionsRequest);

console.log({totalPrice});
console.log({totalTax});

export {};