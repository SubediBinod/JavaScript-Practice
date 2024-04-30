// inheritance= allows a new class to inherit the properties and 
// methods from an existing class (parent -> child)
// helps with code reusability


// Parent class
class Character {
    constructor(name, house) {
    this.name = name;
    this.house = house;
    }
    introduce() {
    console.log(`My name is ${this.name} and I belong to ${this.house} house.`);
    }
} 
  // Child class inheriting from Character
class Wizard extends Character {
    constructor(name, house, wand) {
        super(name, house); // Call parent constructor
        this.wand = wand;
    }
    castSpell(spell) {
    console.log(`${this.name} casts ${spell} with their wand: ${this.wand}`);
    }
}

  // Create instances
const harryPotter = new Wizard("Harry Potter", "Gryffindor", "Holly and Phoenix Feather, 11 inches");
const hermioneGranger = new Wizard("Hermione Granger", "Gryffindor", "Vine and Dragon Heartstring, 10 ¾ inches");

  // Call methods
harryPotter.introduce(); // Output: My name is Harry Potter and I belong to Gryffindor house.
harryPotter.castSpell("Expelliarmus"); // Output: Harry Potter casts Expelliarmus with their wand: Holly and Phoenix Feather, 11 inches

hermioneGranger.introduce(); // Output: My name is Hermione Granger and I belong to Gryffindor house.
hermioneGranger.castSpell("Lumos"); // Output: Hermione Granger casts Lumos with their wand: Vine and Dragon Heartstring, 10 ¾ inches
