const arr = [4,5,6,7,8,9];

// function double(a){
//     return a*2;
// }

// const doubles = arr.map(double)

// console.log(doubles)

function isOdd(a){
    return a%2;
}
function isEven(a){
    return a%2===0;
}

console.log(arr.filter(isOdd));
console.log(arr.filter(isEven))



