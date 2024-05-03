function divide(dividend, divisor) {
    try {
        let result = dividend / divisor;
        // Checking if the result is NaN
        if (isNaN(result)) {
            throw new Error("Result is not a number.");
        }
        return result;
    } catch (error) {
        console.error("Error:", error.message);
        // You can also throw the error again to propagate it to the caller
        // throw error;
    }
}

// Example usage
console.log("Result:", divide(10, 2));  // Output: Result: 5
console.log("Result:", divide(8, 0));   // Output: Error: Infinity
console.log("Result:", divide(10, "a")); // Output: Error: Result is not a number.
