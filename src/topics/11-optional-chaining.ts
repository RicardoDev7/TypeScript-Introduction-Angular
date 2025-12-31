export interface Passenger {
    name: string;
    children?: string[];
}

const passenger : Passenger = {
    name: 'Ricardo'
}

const passenger2 : Passenger = {
    name: 'Rosa',
    children: ['Alvaro', 'Fabricio']
}

console.log(passenger);
console.log(passenger2);

const printChildren = (passenger : Passenger) => {
    const howManyChildren = passenger.children?.length ?? 0;
    console.log(`El pasajero ${passenger.name} tiene ${howManyChildren} hijos`);
}

printChildren(passenger);
printChildren(passenger2);