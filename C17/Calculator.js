const PI = 22 / 7;

export default class Calculator {
  constructor() {
    this.x = 1;
  }

  add(value) {
    this.x += value; // tambahan
    return this;
  }

  substract(value) {
    this.x -= value; // pengurangan
    return this;
  }

  multiply(value) {
    this.x *= value; // pengkalian
    return this;
  }

  divide(value) {
    if (value !== 0) {
      this.x /= value; // pembagian
    } else {
      console.log("tidak bisa dibagi 0");
    }
    return this;
  }

  square() {
    this.x = Math.pow(this.x, 2); // bilangan kuadrat
    return this;
  }

  exponent(value) {
    this.x = Math.pow(this.x, value); // angka yang dikalikan dengan sendirinya
    return this;
  }

  squareRoot() {
    this.x = Math.sqrt(this.x); // akar kuadrat
    return this;
  }

  result() {
    console.log(this.x); // hasil
    return this.x;
  }
}

export { PI };
