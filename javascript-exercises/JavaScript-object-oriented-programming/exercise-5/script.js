class Shape {
  calculateArea() {
    console.log("this is not a real Class");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  calculateArea() {
    return Math.PI * (this.radius ** 2);
  }
}

class Triangle extends Shape {
  constructor(baseValue, heightValue) {
    super();
    this.baseValue = baseValue;
    this.heightValue = heightValue;
  }
  calculateArea() {
    return (this.baseValue * this.heightValue) / 2;
  }
}

const firstShape = new Shape();
firstShape.calculateArea();

const triangle = new Triangle(20, 98);
console.log(triangle.baseValue);
console.log(triangle.heightValue);
console.log(triangle.calculateArea());

const circle = new Circle(45);
console.log(circle.radius);
console.log(circle.calculateArea());