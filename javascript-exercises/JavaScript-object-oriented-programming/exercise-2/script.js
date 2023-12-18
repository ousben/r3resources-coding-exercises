class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
  perimeter() {
    return (this.width * 2) + (this.height * 2);
  }
}

const firstRectangle = new Rectangle(10, 20);
console.log(firstRectangle.area());
console.log(firstRectangle.perimeter());