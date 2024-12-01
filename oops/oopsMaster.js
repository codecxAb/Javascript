let car = {
    make: "toyota",
    model: "Liva",
    year: 2011,

    start: function(){
        return `${this.make} car got started ${this.model}`
    }
}

console.log(car.start());


function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.gender = "male"; // Default gender

let John = new Person("John Doe", 20);
console.log(John.name);
console.log(John.gender); // Outputs: male

let Jane = new Person("Jane Doe", 22);
Jane.gender = "female"; // Override the gender for Jane
console.log(Jane.name);
console.log(Jane.gender); // Outputs: female

class Vehile{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start(){
        return `${this.make} car got started ${this.model}`
    }
}
const mercedes = new Vehile("Mercedes", "Benz", 2019);
console.log(mercedes.start());

// inheritance

class Car extends Vehile{
    drive(){
        return `${this.make} car is driving ${this.model}`
    }
}

const tata = new Car("Tata", "Safari", 2015);
console.log(tata.drive());