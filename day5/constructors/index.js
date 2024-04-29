// constructor :: is a special method for defining
// the properties and method of objects

// Define a constructor function for creating Person objects
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function() {
    return this.firstName + " " + this.lastName;
    };
}

  // Create new Person objects using the constructor
const person1 = new Person("Hari ", "Bahadur");
const person2 = new Person("Madan ", "Bahadur");

  // Access properties and methods of the created objects
  console.log(person1.fullName()); // Output: Hari  Bahadur
  console.log(person2.fullName()); // Output: Madan  Bahadur
