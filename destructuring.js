const numbers = [1, 2, 3, 4, 5, 6];

const [first, second, ...rest] = numbers;

console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4,  5, 6]

// Object Destructuring Assignment
let person = {
  name: "John Doe",
  age: 30,
  city: "New York",
};

let { name, age } = person;
console.log(name); // John Doe
console.log(age); // 3

