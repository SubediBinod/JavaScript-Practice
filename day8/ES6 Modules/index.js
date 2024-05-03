// ES6 module= 
// An external file that contains reusable code that can 
// be imported into other JavaScript files. 
// Write reusable codes for many different apps. 

// can contain variables,classes,functions ...and more 
// Introduced as part of ECMAScript 2015 update 


// index.js
import { calculateRectangleArea, calculateRectanglePerimeter, calculateBoxVolume } from './rectangle.js';

// Example usage of functions from rectangle.js module
const length = 5;
const width = 3;
const height = 4;

const area = calculateRectangleArea(length, width);
const perimeter = calculateRectanglePerimeter(length, width);
const volume = calculateBoxVolume(length, width, height);

console.log(`Rectangle Area: ${area}`);
console.log(`Rectangle Perimeter: ${perimeter}`);
console.log(`Box Volume: ${volume}`);
