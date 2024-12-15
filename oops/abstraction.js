//Abstraction - Hiding the implementation details and
// showing only the functionality to the user.

class BootPc {
   getOs() {
      return "Windows";
   }
   getProcessor() {
      return "Intel i5";
   }
   getKernal() {
      return "5.4.0";
   }
   getDriver() {
      return "Nvidia";
   }

   greet() {
      return `Welcome to ${this.getOs()} PC with ${this.getProcessor()} processor and ${this.getKernal()} kernal and ${this.getDriver()} driver.`;
}
}

const myPc = new BootPc();
console.log(myPc.greet());