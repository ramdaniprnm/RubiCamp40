const PI = 22 / 7;

class constructor {
  constructor() {
    this.x = 1;
  }

  add(value) {
    this.x += value;
    return this;
  }

  substract(value) {
    this.x -= value;
    return this;
  }

  multiply(value) {
    this.x *= value;
    return this;
  }

  divide(value) {
    if (value == 0) {
      this.x /= value;
    } else {
      console.log("tidak bisa dibagi 0");
    }
    return this;
  }

  square() {
    this.x *= Math.pow(this.x, 2);
    return this;
  }

  exponent(value) {
    this.x = Math.pow(this.x, value);
    return this;
  }

  squareRoot() {
    this.x = Math.sqrt(this.x);
    return this;
  }

  result() {
    console.log(this.x);
    return this.x;
  }
}
