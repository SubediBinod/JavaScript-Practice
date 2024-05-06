// The classList property in JavaScript provides methods for 
// adding, removing, toggling, and checking for the presence of CSS classes on an element.


const box = document.getElementById("box");
const addButton = document.getElementById("addButton");
const removeButton = document.getElementById("removeButton");
const replaceButton = document.getElementById("replaceButton");
const toggleButton = document.getElementById("toggleButton");

// Add event listener to add red color
addButton.addEventListener("click", function() {
    box.classList.add("red");
});

// Add event listener to remove red color
removeButton.addEventListener("click", function() {
    box.classList.remove("red");
});

// Add event listener to replace color
replaceButton.addEventListener("click", function() {
    if (box.classList.contains("red")) {
        box.classList.replace("red", "green");
    } else {
        box.classList.replace("green", "red");
    }
});

// Add event listener to toggle red color
toggleButton.addEventListener("click", function() {
    box.classList.toggle("red");
});

// Add event listener for mouseover (hover) to change color
box.addEventListener("mouseover", function() {
    box.classList.add("hover");
});

// Add event listener for mouseout to revert color
box.addEventListener("mouseout", function() {
    box.classList.remove("hover");
});

// Add event listener for mouseup to toggle color
box.addEventListener("mouseup", function() {
    box.classList.toggle("red");
});


