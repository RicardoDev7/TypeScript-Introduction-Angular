//! Traditional Function
function addNumber (a : number, b : number) : number {
    return a + b;
}

//! Función de flecha
const addNumberArrow = (a: number, b: number) => a + b;

//! Funciones con argumentos opcionales
function multiply(firstNumber: number, secondNumber?: number, base: number = 2){
    return firstNumber * base;
}

const healCharacter = (character : Character, amount : number) => {
    character.hp += amount;
}

interface Character {
    name: string;
    hp: number;
    showHP : () => void;
}

const strider : Character = {
    name: 'Strider',
    hp: 50,
    showHP(){
        console.log(`Puntos de vida ${this.hp}`);
    }
}

strider.showHP();

healCharacter(strider, 10);

strider.showHP();

//console.log(addNumber(1, 2));
//console.log(addNumberArrow(3, 4));
//console.log(multiply(10))

export {};