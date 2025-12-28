const name: string = 'Ricardo';
let hpPoints: (number | string) = 95;
const isAlive: boolean = true;

console.log(name);
console.log(hpPoints);

hpPoints = 'Full';

console.log(hpPoints);

console.log({
    name, hpPoints, isAlive
})

export {};