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

/* Class and constructor patterns
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
*/

/* Singleton Patter */

let instance = null;

class Car {
    constructor(doors, engine, color) {
        if (!instance) {
            this.doors = doors;
            this.engine = engine;
            this.color = color;
            instance = this;
        } else {
            return instance;
        }
    }
}

const civic = new Car(4, 'V6', 'grey');
const honda = new Car(2, 'V8', 'red');

console.log(civic);
console.log(honda);






