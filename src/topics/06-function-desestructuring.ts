interface Product {
    description: string;
    price: number;
}

const phone : Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet : Product = {
    description: 'IPad Air',
    price: 250.0
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

function taxCalculation(options: TaxCalculationOptions): number[]{
    let total: number = 0;
    options.products.forEach(x => {
        total += x.price;
    });
    return [total, total * options.tax];
}

const shoppingCart: Product[] = [phone, tablet];
const tax: number = 0.15;
const optionsRequest: TaxCalculationOptions = {
    products: shoppingCart,
    tax: tax
}

const result = taxCalculation(optionsRequest);

console.log(result);

export {};