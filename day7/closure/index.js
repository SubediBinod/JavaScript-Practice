// closure= A function defined inside another function the inner 
// function has access to the variables and scope of the outer function 
// Allow for private variables and state maintenence  
// used frequently in JS frameworks: Reach, Vue, Angular 

// ex1:: Currying::
// currying is a functional programming technique that involves the transformation of a function 
// with multiple arguments into a sequence of functions each taking a single argument.
function foo(outer_arg) {

    function inner(inner_arg) {
        return outer_arg + inner_arg;
    }
    return inner;
}
//When you call foo(5), you're setting outer_arg to 5.
//foo then returns the inner function
//inner still has access to outer_arg even after foo has finished executing. 
//This retained access is what we refer to as a "closure." inner "closes over" or captures outer_arg.
let get_func_inner = foo(5);//The function returned by foo(5), which is inner, is stored in get_func_inner
// This stored function still has access to outer_arg which is 5.


console.log(get_func_inner(4));
// When you call get_func_inner(4), you are actually calling inner(4)
console.log(get_func_inner(3));
// hen you call get_func_inner(3), similarly, you are calling inner(3). inner still remembers outer_arg as 5


// output :: 9
// 8



//-----ex2----
//Data Encapsulation and Creating Private Variables
function createCounter() {
    let count = 0;
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getValue: function() {
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment());  // 1
console.log(counter.increment());  // 2
console.log(counter.decrement());  // 1
console.log(counter.getValue());   // 1
// console.log(counter.count);      // undefined (count is not accessible)

