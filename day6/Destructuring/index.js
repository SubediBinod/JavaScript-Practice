// Destructuring in JavaScript is a convenient way of extracting multiple values 
// from data stored in objects or arrays and assigning them to variables in a more 
// concise and readable manner.
//  [] to perform array Destructuring
//  {} to perform objects Destructuring


//1. to swap values of two variables 
console.log("first example")
let a=1;
let b=2;
[a,b] =[b,a];
console.log(a,b);

//output::  2 1

//2. swap two elements in array
console.log("second example")
const fruit= ["apple", "orange", "banana", "litchi","lapsi"];


[fruit[0],fruit[3]]= [ fruit[3], fruit[0]];
console.log(fruit)


//3 assign array element to variable
console.log("third example")
const arr=['apple', 'orange', 'banana', 'litchi', 'lapsi', 'pineapple', 'dragonfruit']

const[var1,var2,var3,...var4]=arr;
//const[var1,var2,var3,...var4,var5]=arr;
//this will throw an error as  A rest element must be last in a destructuring pattern
console.log(var1);
console.log(var2);
console.log(var3);
console.log(var4);

//4 extract values from objects
console.log("fourth example")


const football_club={
    name:"Los Blancos ",
    country:"Spain",
    president:"Papa Perez",
    ucl:"till 2k24season 14 Title won",
    top_scorer:"Cristiano Ronaldo ",
}

//const{var_1,var_2,...var_4}=football_club; this will throw an error
//const { originalPropertyName: newVariableName } = object;
// or else const{originalPropertyName1,originalPropertyName2}
const { name: var_1, country: var_2, ...var_3 } = football_club;

console.log(var_1)
console.log(var_2)
console.log(var_3)


//5 Destructure in function parameters

console.log("fifth example ")
function displayDetails({name, country,president,ucl,top_scorer}){
    console.log("name: " + name)
    console.log("country: " + country)
    console.log("president:"+president)
    console.log("top_scorer:"+ top_scorer)
}
displayDetails(football_club);