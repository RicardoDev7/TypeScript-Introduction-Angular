export class Person {
    //! Propiedades
    public name: string = '';
    private address: string = '';
    constructor(){
        this.name = 'Ricardo';
        this.address = 'San Miguel'
    }
}

const ricardo = new Person();
console.log(ricardo);