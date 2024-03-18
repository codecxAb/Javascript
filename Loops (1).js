// -----------------------forEach---------------------------------
// let a = [1,2,3,4,5,6,7,8,9,10];
// let b = []

// a.forEach(element => {
//     console.log(element+5);
//     b.push(element+10);

// });

// console.log(b);
// console.log(a); //forEach do not modify the base array, it just copy the element and modify it without altering the base array.

//----------------------for in --------------------------------

var book = {
    name: "javascript",
    pages: 100,
    price: 500
}

for(let key in book){
    // console.log(key);
    console.log(key, ":" ,book[key]);
}
