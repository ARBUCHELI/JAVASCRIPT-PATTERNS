/* 1. iNTRODUCTION 
//console.log('Hello!');

const calc = () => {
    //return 4 * 3;
    return 4 * 4;
}

const printCalc = (callback) => {
    console.log(callback());
}

printCalc(calc);
*/

/*2. CREATIONAL PATTERNS */
class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}

const civic = new Car(4, 'V6', 'grey');

console.log(civic);







