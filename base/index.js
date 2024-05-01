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

class SUV extends Car {
    constructor(doors, engine, color) {
        super(doors, engine, color);
        this.wheels = 4; //The default value is 4
    }
}

const civic = new Car(4, 'V6', 'grey');
console.log(civic);

const cx5 = new SUV(4, 'V8', 'red');
console.log(cx5);








