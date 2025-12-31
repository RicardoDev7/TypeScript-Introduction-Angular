export class Person {
    constructor(
        public name: string, 
        private address: string = 'No Address'
    ){}
}

export class Hero extends Person {
    constructor(
        public alerEgo: string,
        public age: number,
        public realName: string
    ){
        super(realName, 'Malibu');
    }
}

const ricardo = new Person('Ricardo', 'Jesus Maria');
const rosa = new Person('Rosa', 'La Perla');
const ironMan = new Hero('Iron Man', 45, 'Tony Stark');
console.log(ricardo);
console.log(rosa);
console.log(ironMan);