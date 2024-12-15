class Employee {
    constructor(name, salary) {
        this.name = name;
        this._salary = salary; // Use the setter here to apply validation
    }

    get salary() {
        if (this._salary > 1000) {
            return this._salary;
        } else {
            return "Salary is too low";
        }
    }

    set salary(value) {
        if (value < 1000) {
            this._salary = 1000;
        } else {
            this._salary = value;
        }
    }
}

const emp = new Employee("John Doe", 900); // Constructor uses setter
console.log(emp.salary); 
emp.salary = 800;
console.log(emp.salary); // Output: 1000 (salary remains corrected by the setter)
emp.salary = 12000;
console.log(emp.salary); // Output: 12000
