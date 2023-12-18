class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }
  details() {
    return `The name is : ${this.name}, the age is : ${this.age}, the country is : ${this.country}`;
  }
}

const person1 = new Person("John", "Dupont", "France");
const person2 = new Person("James", "Windsor", "England");

console.log(person1.details());
console.log(person2.details());