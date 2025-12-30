export class Person {
    constructor(
        public name: string, 
        public address: string
    ){}
}

const ricardo = new Person('Ricardo', 'Jesus Maria');
const rosa = new Person('Rosa', 'La Perla');
console.log(ricardo);
console.log(rosa);