export class Person {
    constructor(
        public name: string, 
        private address: string = 'No Address'
    ){
        this.name = name;
        this.address = address;
    }
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

export class Hero2 {
    constructor(
        public person: Person,
        public alerEgo: string,
        public age: number,
        public realName: string
    ){
        this.person = person
    }
}

const ricardo = new Person('Ricardo', 'Jesus Maria');
const rosa = new Person('Rosa', 'La Perla');
const ironMan = new Hero('Iron Man', 45, 'Tony Stark');
const person = new Person('Tony Stark', 'Malibu NYC');
const ironMan2 = new Hero2(person, 'Iron Man', 45, 'Tony Stark');
console.log(ricardo);
console.log(rosa);
console.log(ironMan);
console.log(ironMan2);