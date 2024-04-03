//Object.create - this constructor gives a singleton object

//object literals 

const mySym = Symbol("key1");

const userInfo = {
    name: "codex",
    [mySym] : "uniqueKey1",
    age : 20,
    email: "codex@google.com",
    domain: ["frontend", "ui/ux", "backend", "AI/ML"],
    isLoggedIn : false
}

// console.log(userInfo.email);
// console.log(userInfo["domain"]);
// console.log(userInfo[mySym]);
// console.log(userInfo);

//Freeze  makes the object unchangeable 

// Object.freeze(userInfo)
// userInfo.email = "codex@microsoft.com"
// console.log(userInfo);

userInfo.greeting = function(){
    console.log(`hello, ${this.name}`);
}

//console.log(userInfo.greeting());

const target = { a: 1, b: 2 };
const source = { b: 4, d: 5 };
const source1 = { e: 6, f: 7};

let returnedTarget = Object.assign(target, source);
returnedTarget = Object.assign({},target, source, source1);


console.log(returnedTarget);
// Expected output: Object { a: 1, b: 4, c: 5 }

// Sample object
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    country: 'USA',
  };
  
  // Object destructuring
  const { firstName, lastName, age } = person;
  
  // Accessing the extracted variables
  console.log(firstName); // Output: John
  console.log(lastName);  // Output: Doe
  console.log(age);       // Output: 30
  