class Tyre {
  constructor(brand, size) {
    this.brand = brand;
    this.size = size;
  }
}

class Car {
  constructor(model, year, seats, doors, warranty, tyre) {
    this.model = model;
    this.year = year;
    this.sn = this.generateSerialNumber(); // Nomor seri acak
    this.tyre = tyre;
    this.seats = seats;
    this.doors = doors;
    this.warranty = warranty;
  }

  generateSerialNumber() {
    return `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
  }

  newTyre(tyre) {
    this.tyre = tyre; // menetapkan nilai ke ke property "tyre"
  }

  information() {
    return {
      model: this.model,
      sn: this.sn,
      year: this.year,
      tyre: `${this.tyre.brand} ${this.tyre.size}`,
      seats: this.seats,
      doors: this.doors,
      warranty: `${this.warranty} year`,
    };
  }

  warrantyCheck(checkYear) {
    return checkYear <= +this.year + this.warranty;
  }
}

class Agya extends Car {
  constructor(year) {
    super("Agya", year, 5, 5, 1);
    this.newTyre(new Tyre("Dunlop", "15 inch"));
  }
}

class Rush extends Car {
  constructor(year) {
    super("Rush", year, 5, 5, 3);
    this.newTyre(new Tyre("Bridgestone", "17 inch"));
  }
}

class CarFactory {
  constructor() {
    this.cars = []; // array kosong untuk cars
  }

  static randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  produce(year) {
    const count = 12; //
    for (let i = 0; i < count; i++) {
      let car;
      if (i === 4 || i == 9 || i == 10 || i == 11) {
        car = new Rush(year); //
      } else {
        car = Math.random() < 0.5 ? new Agya(year) : new Rush(year);
      }
      this.cars.push(car);
    }
  }

  result() {
    console.log(`Hasil Produksi: \n`);
    this.cars.forEach((car, index) => {
      const details = car.information();
      console.log(`no. ${index + 1}`);
      console.log(`varian   : ${details.model}`);
      console.log(`sn       : ${details.sn}`);
      console.log(`door     : ${details.doors}`);
      console.log(`seat     : ${details.seats} seater`);
      console.log(`tyre     : ${details.tyre}`);
      console.log(`year     : ${details.year}`);
      console.log(`warranty : ${details.warranty}`);
      console.log("\n");
    });
  }

  guaranteeSimulation(Year) {
    console.log(`Hasil Simulasi Garansi Semua Mobil Pada Tahun ${Year}: \n`);
    this.cars.forEach((car, index) => {
      const details = car.information();
      console.log(`no. ${index + 1}`);
      console.log(`varian  : ${details.model}`);
      console.log(`sn      : ${details.sn}`);
      console.log(`door    : ${details.doors}`);
      console.log(`seat    : ${details.seats} seater`);
      console.log(`tyre    : ${details.tyre}`);
      console.log(`year    : ${details.year}`);
      console.log(`warranty: ${details.warranty}`);

      if (car.warrantyCheck(Year)) {
        console.log(`status on ${Year} this guarantee status active`);
      } else {
        console.log(`status on ${Year} this guarantee status expired`);
      }
      console.log(" ");
    });
  }
}

const toyota = new CarFactory();
toyota.produce(2022); // Hanya panggil sekali untuk menghasilkan total 12 mobil
toyota.result();
toyota.guaranteeSimulation(2025);
