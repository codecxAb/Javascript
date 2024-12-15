//static instance inside class
// static methods are called on the class itself, not on the instance of the class.

class Calculator {
    static add(a, b) {
        return a + b;
    }
}

const newCal = new Calculator();
console.log(newCal.add(5, 10)); // TypeError: newCal.add is not a function

console.log(Calculator.add(5, 10)); // 15
