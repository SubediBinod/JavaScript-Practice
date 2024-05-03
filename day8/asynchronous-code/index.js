// synchronous : Executes line by  line consequently in a sequential manner 
// code that waits for an operation to complete 


// asynchronous: allows multiple operation to be performed concurrently without waiting 
// doesn't block the execution flow and allows program to continue 
// (I/O operations,network requests, fetching data)
// Handled with:callbacks, promises,Async/Await 


// Synchronous code
console.log("Start of synchronous code");

function synchronousFunction() {
  return "This is synchronous code";
}

console.log(synchronousFunction());

console.log("End of synchronous code");

// Asynchronous code
console.log("Start of asynchronous code");

function asynchronousFunction(callback) {
    setTimeout(callback, 2000, "This is asynchronous code");// see  day7 setTimeout() 
}

asynchronousFunction(function(result) {
console.log(result); //Here, an anonymous function is passed as an argument to asynchronousFunction. 
});

console.log("End of asynchronous code");
