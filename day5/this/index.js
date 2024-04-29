// this= reference to the object where THIS is used
// (the object depends on the immediate context)
// person.name=this.name;

// this doesnot works with arrow functions 

// Define an object
const person = {
    firstName: "Ram",
    lastName: "kumar",
    fullName: function() {
      // 'this' refers to the current object (person)
    return this.firstName + " " + this.lastName;
    }
};

  // Call the fullName method of the person object
  console.log(person.fullName()); // Output: Ram kumar