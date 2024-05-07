// Async:: makes a function return a promise 
//  Await:: makes a function wait for a promise 

//Async/Await is a feature in JavaScript that allows you to write asynchronous code in a more synchronous-like manner.
//It's built on top of promises and provides a more concise and readable syntax for handling asynchronous operations.

//1.async function:

// The async keyword is used to define a function as asynchronous. 

// When you mark a function with async, it means the function will always return a promise.

// Inside an async function, you can use the await keyword to pause the execution of the function 

// until a promise is settled (either resolved or rejected). This makes it seem like the code is executing synchronously, 

// even though it's actually asynchronous under the hood.


//2.await expression:

// The await keyword can only be used inside an async function. It's placed before a promise, 

// and it pauses the execution of the async function until the promise is settled.

// When an async function encounters an await expression, it waits for the promise to resolve, 

// and then it resumes the execution of the function, returning the resolved value of the promise.

// If the promise is rejected, the await expression throws an error, which can be caught using a try...catch block.

// Function to simulate an asynchronous operation that resolves after a delay
function asyncOperation() {
    return new Promise(resolve => {
        setTimeout(() => {
            // Simulate a successful operation after 1 second
            resolve("Data from async operation");
        }, 1000);
    });
}

// Using async/await to perform asynchronous operations sequentially
async function performOperations() {
    try {
        const data = await asyncOperation();
        console.log("Async operation completed:", data);
    } catch (error) {
        console.error("Error:", error);
    }
}

// Call the async function
performOperations();

//flow ::

// Definition of asyncOperation Function:
// - The asyncOperation function is defined, which returns a promise.
// - Inside this function, a setTimeout is used to simulate an asynchronous operation that resolves after a delay of 1 second.

// Definition of performOperations Function:
// - The performOperations function is defined as an async function.
// - Inside this function, the asyncOperation function is called using the await keyword.
// - This await keyword pauses the execution of performOperations until the promise returned by asyncOperation resolves.
// - Once the promise resolves, the execution continues.

// Execution of performOperations Function:
// - The performOperations function is called.
// - Execution enters the function and reaches the await asyncOperation() line.
// - At this point, the execution of performOperations is paused, and the event loop is free to handle other tasks.
// - After 1 second (due to the delay in asyncOperation), the promise returned by asyncOperation resolves.
// - The resolved value of the promise (in this case, "Data from async operation") is returned by await, and the execution of performOperations continues.

// Logging the Result:
// - The resolved value from asyncOperation is stored in the data variable.
// - This value is then logged to the console, indicating that the asynchronous operation has completed successfully.
