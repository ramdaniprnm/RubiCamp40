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
    this.sn = this.generateSerialNumber(); // Nomor seri acak dibuat di sini
    this.tyre = tyre;
    this.seats = seats;
    this.doors = doors;
    this.warranty = warranty;
  }

  generateSerialNumber() {
    return `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
  }

  addTyre(tyre) {
    this.tyre = tyre;
  }

  getDetails() {
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
    this.addTyre(new Tyre("Dunlop", "15 inch"));
  }
}

class Rush extends Car {
  constructor(year) {
    super("Rush", year, 5, 5, 3);
    this.addTyre(new Tyre("Bridgestone", "17 inch"));
  }
}

class CarFactory {
  constructor() {
    this.cars = [];
  }

  static getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  produce(year) {
    const productionCount = 12; // Tetapkan jumlah produksi menjadi 12
    for (let i = 0; i < productionCount; i++) {
      let car;
      if ([4, 9, 10, 11].includes(i)) {
        car = new Rush(year); // Mobil Rush dengan garansi 3 tahun
      } else {
        car = Math.random() < 0.5 ? new Agya(year) : new Rush(year);
      }
      this.cars.push(car);
    }
  }

  result() {
    console.log(`Hasil Produksi: \n`);
    this.cars.forEach((car, index) => {
      const details = car.getDetails();
      console.log(`no. ${index + 1}`);
      console.log(`varian     : ${details.model}`);
      console.log(`sn         : ${details.sn}`);
      console.log(`door       : ${details.doors}`);
      console.log(`seat       : ${details.seats} seater`);
      console.log(`tyre       : ${details.tyre}`);
      console.log(`year       : ${details.year}`);
      console.log(`warranty   : ${details.warranty}`);
      console.log("\n");
    });
  }

  guaranteeSimulation(simulationYear) {
    console.log(
      `Hasil Simulasi Garansi Semua Mobil Pada Tahun ${simulationYear}: \n`
    );
    this.cars.forEach((car, index) => {
      const details = car.getDetails();
      console.log(`no. ${index + 1}`);
      console.log(`varian     : ${details.model}`);
      console.log(`sn         : ${details.sn}`);
      console.log(`door       : ${details.doors}`);
      console.log(`seat       : ${details.seats} seater`);
      console.log(`tyre       : ${details.tyre}`);
      console.log(`year       : ${details.year}`);
      console.log(`warranty   : ${details.warranty}`);

      if (car.warrantyCheck(simulationYear)) {
        console.log(
          `\nstatus on ${simulationYear} this guarantee status active`
        );
      } else {
        console.log(
          `\nstatus on ${simulationYear} this guarantee status expired`
        );
      }
      console.log(" ");
    });
  }
}

// Contoh penggunaan
const toyota = new CarFactory();
toyota.produce(2022); // Hanya panggil sekali untuk menghasilkan total 12 mobil
toyota.result();
toyota.guaranteeSimulation(2025);
