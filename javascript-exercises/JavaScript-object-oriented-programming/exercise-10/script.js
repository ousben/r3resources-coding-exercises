class Product {
  constructor(productID, name, price) {
    this.productID = productID;
    this.name = name;
    this.price = price;
  }
  calculatePrice(quantity) {
    return this.price * quantity;
  }
}

class PersonalCareProduct extends Product {
  constructor(productID, name, price, warrantyPeriod) {
    super(productID, name, price);
    this.warrantyPeriod = warrantyPeriod;
  }
  calculatePrice(quantity) {
    return this.price * quantity + this.warrantyPeriod * 22;
  }
}

const product1 = new PersonalCareProduct("098765", "gloss", 45.98, 2);
console.log(product1.calculatePrice(34));