//console.log('Hello!');

const calc = () => {
    //return 4 * 3;
    return 4 * 4;
}

const printCalc = (callback) => {
    console.log(callback());
}

printCalc(calc);



