// element selector:: methods used to target and manipulate html elements  
// They allow you to select one or multiple HTML elements 
// from the DOM (Document Object Model)

//                                    
// 1.document.getElementById() ::
//This is perhaps the most common and straightforward 
//method to select an element by its unique ID.

// 2.document.getElementsByClassName()::
//This method returns a live HTMLCollection of all 
//elements with the specified class names.

// 3.document.getElementsByTagName() ::
//This method returns a live HTMLCollection of elements 
//with the given tag name.


// 4.document.querySelector() :: 
// This method returns the first element that matches 
//a specified CSS selector(s).


// 5.document.querySelectorAll()  ::
//  This method returns a static NodeList representing a list of 
//the document's elements that match the specified group of selectors.


//1. 
var greeting = document.getElementById('greeting');
console.log(greeting.textContent);  // Outputs: Hello, everyone!


//2. 
var notes = document.getElementsByClassName('note');
for (let i = 0; i < notes.length; i++) {
    console.log(notes[i].textContent);  // Outputs each note's text
}
// Alternatively using Array methods
Array.from(notes).forEach(note => console.log(note.textContent));


//3.
var paragraphs = document.getElementsByTagName('p');
console.log(paragraphs[1].textContent);  // Outputs: Second paragraph


//4 

var firstEntry = document.querySelector('.entry');
console.log(firstEntry.textContent);  // Outputs: Entry 1


//5.

var spans = document.querySelectorAll('.container span');
spans.forEach((span, index) => {
    console.log(`Span ${index + 1}: ${span.textContent}`);
});
// Outputs:
// Span 1: First
// Span 2: Second

