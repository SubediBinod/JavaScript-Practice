// callback= a function that is passed as an argument
// to another function

// used to handle asynchronous operations:
// 1.Reading a File
// 2.Network requests
// 3.Interacting with databases

// when you're done, call this next

// Defining a function that takes a callback
function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback(); // invoking the callback function
}

// Defining a callback function
function sayGoodbye() {
    console.log("Goodbye!");
}

// Using the greet function with the sayGoodbye callback
greet("Chester", sayGoodbye);
