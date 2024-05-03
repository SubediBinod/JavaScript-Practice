// setTimeout() = function in js allows you to schedule 
// the execution of a function after an amount of time (milliseconds)
// Times are approximate (varies based on the workload of the javascript runtime env)

// setTimeout(callback,delay)


// Define a function to introduce Harry Potter
function introduceHarry() {
    console.log("Harry Potter: I'm Harry Potter, the Boy Who Lived!");
}

// Define a function to introduce Hermione Granger
function introduceHermione() {
    console.log("Hermione Granger: I'm Hermione Granger, the brightest witch of my age!");
}

// Call setTimeout to introduce Harry after 0 seconds
setTimeout(introduceHarry, 0);

// Call setTimeout to introduce Hermione after a delay of 2 seconds (2000 milliseconds)
setTimeout(introduceHermione, 2000);

// This message will be printed immediately
console.log("Introducing Harry Potter and Hermione Granger...");

// Syntax
// setTimeout(function, milliseconds, param1, param2, ...)

// Parameters
// - function (Required): The function to execute.
// - milliseconds (Optional): Number of milliseconds to wait before executing. Default value is 0.
// - param1, param2, ... (Optional): Parameters to pass to the function. Not supported in IE9 and earlier.
