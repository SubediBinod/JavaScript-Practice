// The sort() method in JavaScript is primarily designed to sort arrays
// It directly sorts the elements of an array in place and returns the sorted array.


var people = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 }
];

people.sort((a, b)=> a.age - b.age
);

console.log(people);
// Output:
// [ 
//    { name: 'Alice', age: 25 },
//   { name: 'John', age: 30 },
//   { name: 'Bob', age: 35 } 
// ]
