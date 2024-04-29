// Class= ECMAScript 2015 (ES6) provides a more structured and cleaner way to Work 
// with objects compared to traditional construction functions 

// eg:: static keywords, encapsulation , inheritance


// Define a class called HogwartsStudent
class HogwartsStudent {
    // Constructor method to initialize object properties
    constructor(name, house, year) {
    this.name = name;
    this.house = house;
    this.year = year;
    }
    // Method defined within the class 
    //function शब्दको प्रयोग गर्नुपर्दैन class भित्र method बनाउनको लागि। 

    introduce() {
    return `Hi, I'm ${this.name}, a ${this.year}th year student from ${this.house} house at Hogwarts.`;
    }
}

  // Create new instances of the HogwartsStudent class
const harry = new HogwartsStudent("Harry Potter", "Gryffindor", 1);
const hermione = new HogwartsStudent("Hermione Granger", "Gryffindor", 1);
const draco = new HogwartsStudent("Draco Malfoy", "Slytherin", 1);

  // Access methods of the created objects
  console.log(harry.introduce()); // Output: Hi, I'm Harry Potter, a 1th year student from Gryffindor house at Hogwarts.
  console.log(hermione.introduce()); // Output: Hi, I'm Hermione Granger, a 1th year student from Gryffindor house at Hogwarts.
  console.log(draco.introduce()); // Output: Hi, I'm Draco Malfoy, a 1th year student from Slytherin house at Hogwarts.
