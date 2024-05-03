// Error= an object that is created to represent a 
// problem that occurs often with user input or establishing a connection 


// try{}= encloses the code that might potentially cause an error 

// catch{}= cathc and handle thrown errors from try{}

// finally{}= (optional) always executes. Used mostly for clean up 
// Ex : close FileSystem,close connection ,releases resources 


//-------------Example 1-----------------------
function divideNumbers() {
    try {
        const dividendInput = Number(window.prompt("Enter the dividend:"));
        if (isNaN(dividendInput)) {
            throw new Error("Invalid dividend. Please enter a valid number.");
        }
        const divisorInput = Number(window.prompt("Enter the divisor:"));
        if (isNaN(divisorInput)) {
            throw new Error("Invalid divisor. Please enter a valid number.");
        }
        if (divisorInput === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        const result = dividendInput / divisorInput;
        console.log("Result:", result);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

// Call the function to start the division process
divideNumbers();
