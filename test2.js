class Tyre {
  constructor(brand, size) {
    this.brand = brand;
    this.size = size;
  }
}

class SmallTyre extends Tyre {
  // inheritance
  constructor(brand) {
    super(brand, 15); // SmallTyre 15 inch
  }
}

class LargeTyre extends Tyre {
  // inheritance
  constructor(brand) {
    super(brand, 17); // LargeTyre 17 inch
  }
}

class Car {
  constructor(variant, tyre, doors, seats, year, warranty) {
    this.variant = variant;
    this.tyre = tyre;
    this.doors = doors;
    this.seats = seats;
    this.year = year;
    this.sn = CarFactory.generateSerialNumber();
    this.warranty = this.calculateWarranty(); // Menghitung garansi
  }

  // Method untuk menghitung garansi berdasarkan ukuran ban
  calculateWarranty() {
    return this.tyre.size === 17 ? 3 : 1;
  }
  tyreType(tyre) {
    this.tyre = tyre;
  }
}
class Agya extends Car {
  constructor(year) {
    super("Agya", new SmallTyre("dunlop"), 5, 5, year);
  }
}

class Rush extends Car {
  constructor(year) {
    super("Rush", new LargeTyre("bridgestone"), 5, 5, year);
  }
}

class CarFactory {
  constructor() {
    this.cars = []; // List untuk menyimpan mobil yang sudah diproduksi
  }

  // Static method untuk menghasilkan serial number
  static generateSerialNumber() {
    let serial = "";
    for (let i = 0; i < 4; i++) {
      if (i > 0) serial += "-";
      serial += Math.random().toString(36).substring(2, 6);
    }
    return serial;
  }

  produce(year) {
    const variants = [Agya, Rush];

    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * variants.length);
      const SelectedCar = variants[randomIndex]; // Pilih kelas varian mobil

      const car = new SelectedCar(year); // Buat objek mobil dari kelas varian
      this.cars.push(car);
    }
  }

  result() {
    console.log(`Hasil Produksi :`);
    this.cars.forEach((car, index) => {
      console.log(`no. ${index + 1}`);
      console.log(`varian: ${car.variant}`);
      console.log(`sn: ${car.sn}`);
      console.log(`door: ${car.doors}`);
      console.log(`seat: ${car.seats} Seater`);
      console.log(`tyre: ${car.tyre.brand} ${car.tyre.size} inch`);
      console.log(`year: ${car.year}`);
      console.log(`warranty: ${car.warranty} year\n`);
    });
  }

  guaranteeSimulation(simulationYear) {
    console.log(
      `\nHasil Simulasi Garansi Semua Mobil pada Tahun ${simulationYear} :\n`
    );
    this.cars.forEach((car, index) => {
      const carAge = simulationYear - car.year;
      const warrantyStatus = carAge > car.warranty ? "Expired" : "Active";

      console.log(`no. ${index + 1}`);
      console.log(`varian: ${car.variant}`);
      console.log(`sn: ${car.sn}`);
      console.log(`door: ${car.doors}`);
      console.log(`seat: ${car.seats} Seater`);
      console.log(`tyre: ${car.tyre.brand} ${car.tyre.size} inch`);
      console.log(`year: ${car.year}`);
      console.log(`warranty: ${car.warranty} year`);
      console.log(
        `status on ${simulationYear}: this guarantee status is ${warrantyStatus}\n`
      );
    });
  }
}

const toyota = new CarFactory();
toyota.produce(2020);
toyota.produce(2022);
toyota.result();
toyota.guaranteeSimulation(2025);
