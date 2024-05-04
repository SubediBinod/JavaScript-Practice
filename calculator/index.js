// Global variable to store the expression
let expression = '';

// Function to append input to the expression
function appendTo(inp) {
    expression += inp;
    updateScreen();
}

// Function to clear the expression
function clearScreen() {
    expression = '';
    updateScreen();
}

// Function to calculate the result of the expression
function calculateResult() {
    try {
        const result = eval(expression); // Using eval for simplicity (not recommended for production)
        clearScreen();
        appendTo(result);
    } catch (error) {
        console.error('Error:', error.message);
        clearScreen();
        appendTo('Error');
    }
}


// Function to update the display screen with the current expression
function updateScreen() {
    document.getElementById('screen').value = expression;
}
