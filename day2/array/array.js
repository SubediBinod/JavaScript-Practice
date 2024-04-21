// Creating an array
let fruits = ['apple', 'banana', 'cherry', 'date'];

// 1. Length property
console.log("Length of the array:", fruits.length);

// 2. Accessing elements
console.log("First fruit:", fruits[0]);
console.log("Last fruit:", fruits[fruits.length - 1]);

// 3. push() method - Adds elements to the end of an array
fruits.push('elderberry');
console.log("After push:", fruits);

// 4. pop() method - Removes the last element from an array
let removedFruit = fruits.pop();
console.log("Removed fruit:", removedFruit);
console.log("After pop:", fruits);

// 5. shift() method - Removes the first element from an array
let shiftedFruit = fruits.shift();
console.log("Shifted fruit:", shiftedFruit);
console.log("After shift:", fruits);

// 6. unshift() method - Adds elements to the beginning of an array
fruits.unshift('apricot');
console.log("After unshift:", fruits);

// 7. indexOf() method - Returns the first index at which a given element can be found in the array
console.log("Index of 'cherry':", fruits.indexOf('cherry'));

// 8. slice() method - Extracts a section of an array and returns a new array
let citrusFruits = fruits.slice(1, 3);
console.log("Citrus fruits:", citrusFruits);


//*********************************************************** */
// 9. splice() method - Changes the contents of an array by removing or replacing existing elements and/or adding new elements
//The line fruits.splice(1, 1, 'blueberry', 'coconut'); in the code modifies the fruits array by removing one element 
//starting at index 1 and then inserting 'blueberry' and 'coconut' at that position.
fruits.splice(1, 1, 'blueberry', 'coconut');
console.log("After splice:", fruits);
//So, if the original fruits array was ['apple', 'banana', 'cherry', 'date'],
// after executing this line, the fruits array will become ['apple', 'blueberry', 'coconut', 'cherry', 'date'].

//******************************************************** */



// 10. forEach() method - Executes a provided function once for each array element
fruits.forEach(function(fruit, index) {
  console.log(`Fruit ${index + 1}: ${fruit}`);
});
/*
Fruit 1: apple
Fruit 2: banana
Fruit 3: cherry
Fruit 4: date
*/


// 11. includes() method - Determines whether an array includes a certain value among its entries
console.log("Does the array include 'banana'?", fruits.includes('banana'));

// 12. join() method - Joins all elements of an array into a string
let fruitSentence = fruits.join(' and ');
console.log("Fruit sentence:", fruitSentence);
