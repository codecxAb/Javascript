// javascript is prototype based language  and not object oriented programming, finally the objects are lastly converted into prototypes


// const lenovo = { cpu:12}

// const laptop = {
//     display: "led",
//     __proto__:lenovo
// };

// console.log(laptop.__proto__)

const car = { tyre : 4}

const toyota = {
    engine : "petrol"
}

Object.setPrototypeOf(toyota, car);

console.log(`toyota`, Object.getPrototypeOf(toyota));