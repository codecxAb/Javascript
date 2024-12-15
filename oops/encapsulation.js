// encapsulation - data hiding and data protection
//  data cannot be accessed directly from outside the class or object

class BankAccount {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
        return this.#balance;
    }

    getBalance() {
        return this.#balance;
    }


}

const Myaccount = new BankAccount();
console.log(Myaccount.getBalance());
console.log(Myaccount.deposit(100));
console.log(Myaccount.balace); // undefined
console.log(Myaccount.getBalance()); // 100

