let myDate = new Date();

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

let createdDate = new Date(2024, 0, 1);
let createdDate1 = new Date("12-03-2025");
// console.log(createdDate.toString());
// console.log(createdDate1.toString());

console.log(Math.floor(Date.now()/1000));

console.log(myDate.getDay( ) + " Day");
console.log(myDate.getFullYear( ));
console.log(myDate.getMonth( )+1);