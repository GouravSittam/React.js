function createVehicleClasses() {
    class Vehicle {
        #make;
        #model;

        constructor(make, model) {
            this.#make = make;
            this.#model = model;
        }

        getDetails() {
            return Make: ${this.#make}, Model: ${this.#model};
        }