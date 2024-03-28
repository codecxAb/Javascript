let score = "33";
console.log(typeof score);

// Number(), String() and others are use to typecast or convert daatatypes of the variables
let numberScore = Number(score);
console.log(typeof (numberScore));

let name = "code123";

let numName = Number(name);
console.log(numName);
//it will print numnName as a NaN because its not a number but will not give error so check berfore converting

let unDefined = undefined;

let checkunDefined = Number(unDefined);
console.log(typeof checkunDefined);

let bool  = true;
console.log(Number(bool));
console.log(typeof String(bool));
console.log(String(bool));

