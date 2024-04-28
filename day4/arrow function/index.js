// arrow function = it is a concise way to write function expressions good
// for simple functions that you use only once 

// (parameters) => some Code 

// Regular function declaration
function regularFunction(x, y) {
    return x + y;
}

  // Arrow function declaration
const arrowFunction = (x, y) => x + y;

  // Using the regular function
console.log("Regular function result:", regularFunction(3, 5));

  // Using the arrow function
console.log("Arrow function result:", arrowFunction(3, 5));



//example2


// An array of numbers
const numbers = [1, 2, 3, 4, 5];

// Regular function to square each number
const squaredNumbersRegular = numbers.map(function(num) {
  return num * num;
});

// Arrow function to square each number
const squaredNumbersArrow = numbers.map(num => num * num);

console.log("Squared numbers using regular function:", squaredNumbersRegular);
console.log("Squared numbers using arrow function:", squaredNumbersArrow);
