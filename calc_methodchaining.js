class Calculator {
  constructor(value) {
    this.result = value;
  }

  add(value) {
    this.result += value;
    return this;
  }

  subtract(value) {
    this.result -= value;
    return this;
  }
  multiply(value) {
    this.result *= value;
    return this;
  }

  divide(value) {
    if (value === 0) {
      throw new Error("Division by zero is not allowed");
    } else {
      this.result /= value;
      return this;
    }
  }

  power(value) {
    this.result **= value;
    return this;
  }

  getResult() {
    return this.result;
  }
}

const output = new Calculator(10).add(5).subtract(7).getResult();
console.log(output);
