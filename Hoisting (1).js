
// We can access funtions and variables before they are defined .
// Variables will show undefined and not notdefined
// Functions will show the functions because the whole function is copied in the executional context.
console.log(a);

b();
var d = c;
console.log(d)

var a = 100;

function b(){
    console.log("Hello Javascript");
}


var c = function(){
    console.log("print Hello Javascript");
}
