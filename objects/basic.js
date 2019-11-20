class Calculator {
  read() {
    this.a = prompt('first val', 0);
    this.b = prompt('second val', 0);
  }
  sum() {
    return Number(this.a) + Number(this.b);
  }
  mul() {
    return this.a * this.b;
  }
}

let calculator = new Calculator();
calculator.read();

console.log('sum = ', calculator.sum());
console.log('mul = ', calculator.mul());