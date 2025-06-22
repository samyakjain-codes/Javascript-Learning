const number = 333
console.log(number);

const value = new Number(333.3333)     // Specify that the value contains a strict number
console.log(value);

console.log(value.toString().length);
console.log(value.toFixed(2));        // return to 2 decimal value only

const calulations = 67.9875535
console.log(calulations.toPrecision(3));  // gives round of up to the input valur in the function 

const hundred = 1000000000
console.log(hundred.toLocaleString('en-IN'));   // places comma b/w the zeros according to indian numeric syste,


//***********************************MATHS******************************************** */


console.log(Math);
console.log(Math.abs(-7));
console.log(Math.round(9.99));
console.log(Math.ceil(5.6));
console.log(Math.floor(2.1));
console.log(Math.min(2,4,44,3,1,0));
console.log(Math.max(1,4,9,2,7,3));

console.log(Math.random());          // used to generate random numbers b/w 0 and 1
console.log((Math.random() *10) + 1);

const max = 6
const min = 1

console.log(Math.floor(Math.random() *(max - min + 1) + min)); // formula to genrate numbers in a dice game
