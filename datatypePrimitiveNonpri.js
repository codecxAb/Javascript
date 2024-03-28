//Datatypes are classified in 2 categories on basis how they r stored in memory Nd how we call them ( call by value and call by reference)

//Primitive datatype
// 7 types - String, Number, Boolean, null, Undefined, Symbol, BigInt

//Non Primitive Or Reference datatype
// arrays, Objects, functions

let num1 = 100;
let num2 = num1;
num2 = 200;
console.log(num1, num2);

let arr1 = [1,2,3,4];
let arr2 = arr1;
arr2.pop();
arr2.push(5);
console.log(arr1, arr2);
//changes done in arr2 is also changing the arr1 because arr2 is taking the same memory location that is allocated for arr1 so the changes is gone on the parent array

//stack(primitive datatypes sotred here) and Heap memory(non Primitive datatypes stored here)

let user1 ={
    mail: "abcd@gmail.com",
    id: 1

}

let user2 = user1;

user2.mail = "dcba@gmail.com";

console.log(user1);
