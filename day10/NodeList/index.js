// NodeList = Static collection of HTML elements ByteLengthQueuingStrategy(id,class,element)

// can be created by using querySelectorAll()
// Similar to an Array, but no (map,filter,reduce)
// NodeList won't update to automatically reflect changes 
// script.js
// Select all <li> elements within the <ul>
const listItems = document.querySelectorAll("#list li");

// Display the number of items in the NodeList
console.log("Number of items:", listItems.length);

// Loop through the NodeList and log the text content of each <li> element
listItems.forEach(item => {
    console.log(item.textContent);
});

// Access individual items in the NodeList by index
console.log("First item:", listItems[0].textContent);
console.log("Second item:", listItems[1].textContent);
