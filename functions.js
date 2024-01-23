// function statement
// A function is declared using the keyword "function" followed by a name for the function.
// a();
// b();
function a(){
    console.log("a is called");
}

// function expression
// Function expressions are created without a specific name and can be assigned to variables or used in statements like
var b = function(){
    console.log("b is called");
}

// name function expression

var c = function d(){
    console.log("c is called via:");
    console.log(d());
}
// c();

// first class functions-
// 1) can be assigned to variables, array values, object properties, and even passed as
// arguments or returned from other functions.
// 2) can be anonymous (without a name), or named (given a name).
// The ability to use a function as a value that can be passed as argument and can be returned from onather functions

//callback function

setTimeout(function(){
    console.log("I am callback function")
},2000)

function x(y){
    console.log("x");
    y();
}

x(function y(){
    console.log("y");
})
// higher order functions

