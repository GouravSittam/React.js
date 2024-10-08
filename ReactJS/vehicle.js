function createVehicleClasses() {
  class Vehicle {
    #make;
    #model;

    constructor(make, model) {
      this.#make = make;
      this.#model = model;
    }

    getDetails() {
      return ` Make: ${this.#make}, Model: ${this.#model}`;
    }

    static compareVehicles(vehicle1, vehicle2) {
      return (
        vehicle1.#make === vehicle2.#make && vehicle1.#model === vehicle2.#model
      );
    }
  }

  class Car extends Vehicle {
    constructor(make, model, year, mileage) {
      super(make, model);
      this.year = year;
      this.mileage = mileage;
    }

    getDetails() {
      return `${super.getDetails()}, Year: ${this.year}, Mileage: ${
        this.mileage
      }`;
    }

    drive(distance) {
      this.mileage += distance;
    }
  }

  // Create an instance of Car
  const myCar = new Car("Toyota", "Corolla", 2020, 15000);

  // Log the details to the console
  console.log(myCar.getDetails());

  // Use the static method to compare two Car instances
  const car1 = new Car("Toyota", "Corolla", 2020, 15000);
  const car2 = new Car("Honda", "Civic", 2019, 20000);

  console.log(Car.compareVehicles(car1, car2)); // false
  console.log(Car.compareVehicles(myCar, car1)); // true

  // Drive the car and log the updated details
  myCar.drive(500);
  console.log(myCar.getDetails());
}

// Call the function to create the classes and run the example
createVehicleClasses();
