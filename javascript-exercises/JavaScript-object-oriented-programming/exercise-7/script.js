class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  details() {
    console.log(`title : ${this.title}, author : ${this.author}, year : ${this.year}`);
  }
}

class Ebook extends Book {
  constructor(title, author, year, price) {
    super(title, author, year);
    this.price = price;
  }
  details() {
    super.details();
    console.log(`price : ${this.price}`);
  }
}

const newEbook = new Ebook("Jobs", "Isaacson", "2011", 19.99);
console.log(newEbook.details());