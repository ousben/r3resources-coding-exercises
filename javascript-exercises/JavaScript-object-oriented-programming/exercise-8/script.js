class Animal {
  constructor(species, sound) {
    this.species = species;
    this.sound = sound;
  }
  animalSound() {
    console.log(this.sound);
  }
}

class Dog extends Animal {
  constructor(species, sound, color) {
    super(species, sound);
    this.color = color;
  }
  animalSound() {
    super.animalSound();
    console.log("the dog's color is : " + this.color);
  }
}

const newDog = new Dog("labrador", "bark! bark!", "brown");
console.log(newDog.animalSound());