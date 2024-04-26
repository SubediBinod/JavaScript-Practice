// spread operator = .. allows an iterable such as an
//array or string to be expanded into separate elements
//unpacks the elements 

let arr1=['apple', 'banana', 'cat', 'dog']
let ar2=['elephant', 'fox', 'ghost'];
let arr3=[...arr1,...ar2,"horse","ice"]
console.log(arr3)
console.log("using for each loop::")
arr3.forEach(element => {
    console.log(element)
});