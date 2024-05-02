// sort() = method is used to sort elements of an array
// in place.
// Sorts element as string in lexicographic ondragover, not 
// alphabetical 
// lexicographic means =(alphabet+numbers+symbols) as string 

// By default, the sort() method sorts the elements as strings in alphabetical and ascending order. 

// However, you can provide a custom sorting function to define the sorting order based on your specific requirements.


// ------------ ex1 --------------------
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits); // Output: ["Apple", "Banana", "Mango", "Orange"]



// ------------ ex2 --------------------
var numbers = [40, 100, 1, 5, 25, 10];
numbers.sort();
console.log(numbers); // Output: [1, 10, 100, 25, 40, 5]

// However, when sorting numbers, the default behavior of sort() may not produce
// the expected result because it sorts elements as strings. To sort numbers correctly, you need 
// to provide a compare function:


// so it  can be written as 
var numbers = [40, 100, 1, 5, 25, 10];
numbers.sort((a, b)=> {
    return a - b;
});
console.log(numbers); // Output: [1, 5, 10, 25, 40, 100]


//how the compare function (a, b) => a - b works ???

// So, when sort() uses (a, b) => a - b as the compare function:

// If a is less than b, a - b will yield a negative value, indicating that a should come before b.
// If a is greater than b, a - b will yield a positive value, indicating that b should come before a.
// If a is equal to b, a - b will yield zero, indicating that the order of a and b doesn't matter.
