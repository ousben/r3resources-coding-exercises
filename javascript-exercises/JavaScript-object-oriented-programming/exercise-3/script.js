class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

class Car extends Vehicle {
  constructor(make, model, year, numOfDoors) {
    super(make, model, year);
    this.numOfDoors = numOfDoors;
  }
  displayDoors() {
    return "the number of doors is " + this.numOfDoors;
  }
}

const firstCar = new Car("toyota", "yaris", 2013, 4);
console.log(firstCar.displayDoors());