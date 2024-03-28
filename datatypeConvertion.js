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

let islogin = 0;
let boolisLogin = Boolean(islogin);
console.log(boolisLogin);

let islogin1 = 1;
let boolisLogin1 = Boolean(islogin1);
console.log(boolisLogin1);

// Booleans are returned as-is.
// undefined turns into false.
// null turns into false.
// 0, -0, and NaN turn into false; other numbers turn into true.
// 0n turns into false; other BigInts turn into true.
// The empty string "" turns into false; other strings turn into true.
// Symbols turn into true.
// All objects become true.
