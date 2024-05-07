// CallBack Hell :: Situtation in js where callbacks are 
// nested within callbacks to the degree where the code is difficult to Read. 

// CallBack hell is old pattern to handle asynchronous function 
//  use promises+async/await to avoid callback hell 


// Callback hell, also known as "pyramid of doom" or "callback spaghetti"

function func1(callback) {
    setTimeout(() => {
        console.log("this is func1");
        callback();
    }, 3000);
}

function func2(callback) {
    setTimeout(() => {
        console.log("this is func2");
        callback();
    }, 3000);
}

function func3(callback) {
    setTimeout(() => {
        console.log("this is func3");
        callback();
    }, 3000);
}

function func4(callback) {
    setTimeout(() => {
        console.log("this is func4");
        callback();
    }, 3000);
}

func1(() => {
    func2(() => {
        func3(() => {
            func4(() => {
                console.log("All functions executed");
            });
        });
    });
});

// flow of execution:: 

// Execution starts with func1:
// We call func1.

// We pass an anonymous function () => { ... } as an argument to func1. This anonymous function acts as a callback.
// Execution inside func1:

// Inside func1, a setTimeout is set for 3 seconds.
// After 3 seconds, "this is func1" is logged to the console.

// Then, the provided callback () => { ... } is invoked.
// Execution moves to the callback provided to func1:

// Inside this callback, func2 is called in the same manner as func1 was called.
// func2 executes similarly to func1, with its own setTimeout and invocation of its provided callback.

// Execution continues in a similar manner for func3 and func4:
// func3 is called inside the callback provided to func2.

// func4 is called inside the callback provided to func3.
// Final callback:

// The last callback provided to func4 contains console.log("All functions executed").
// After func4 completes and its callback is invoked, this log statement is executed, indicating that all functions have been executed.