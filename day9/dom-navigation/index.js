// DOM NAVIGATION: the process of navigating throught the structure of
// an html document using javascript 


// .firstElementChild
// .lastElementChild
//.netElementSibling 
//.previousElementSibling 
//.parentElement 
//.children


//1. firstElementChild and lastElementChild

var myList = document.getElementById('myList');
var firstItem = myList.firstElementChild;
var lastItem = myList.lastElementChild;

console.log(firstItem.textContent);  // Outputs: First Item
console.log(lastItem.textContent);   // Outputs: Third Item


//2. nextElementSibling and previousElementSibling

var banana = document.querySelector('li:nth-child(2)');
var nextFruit = banana.nextElementSibling;
var prevFruit = banana.previousElementSibling;

console.log(nextFruit.textContent);  // Outputs: Orange
console.log(prevFruit.textContent);  // Outputs: Apple


//3. parentElement

var childPara = document.querySelector('#childDiv p');
var parentDiv = childPara.parentElement;
console.log(parentDiv.id);  // Outputs: childDiv


//4. children
var parentDiv = document.getElementById('parentDiv');
var childCount = parentDiv.children.length;

console.log(childCount);  // Outputs: 3

for (var i = 0; i < childCount; i++) {
  console.log(parentDiv.children[i].textContent); // Outputs each paragraph's text
}


