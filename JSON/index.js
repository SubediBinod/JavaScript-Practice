// JSON stands for JavaScript Object Notation.

// JSON is often used for transmitting data between a server and a web application, 
// as it is language-independent and supported by many programming languages.

// JSON files {key:value} OR[{},{},{}]  OR [value1,value2,value3] are encoded


// JSON.stringify() =converts a JS objects or an array to a JSON string

// JSON.parse()= converts a JSON string to a JSON object


// Syntax:
// Data is enclosed in curly braces {}.

// Key/value pairs are separated by commas ,.

// Keys and string values are enclosed in double quotes "".

// Numeric values do not have quotes.

// Arrays are ordered lists of values enclosed in square brackets [].

// Define an object
const person = {
    name: "John",
    age: 30,
    city: "New York",
    isStudent: false,
    friends: ["Alice", "Bob", "Charlie"]
};

// Convert the object to a JSON string using JSON.stringify()
const jsonString = JSON.stringify(person);
console.log("JSON String:", jsonString);

// Parse the JSON string back into an object using JSON.parse()
const parsedPerson = JSON.parse(jsonString);
console.log("Parsed Object:", parsedPerson);
