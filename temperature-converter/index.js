function calculate() {
    const value = document.getElementById('value').value;
    const cel_to_far = document.getElementById("cel-to-far");
    const far_to_cel = document.getElementById("far-to-cel");
    let result = 0;

    if (far_to_cel.checked) {
        // Convert Fahrenheit to Celsius
        result = (value - 32) * (5/9);
        document.getElementById("display").textContent = result.toFixed(1) + " Celsius";
    } else if (cel_to_far.checked) {
        // Convert Celsius to Fahrenheit
        result = (value * (9/5)) + 32;
        document.getElementById("display").textContent = result.toFixed(1) + " Fahrenheit";
    } else {
        document.getElementById("display").textContent = "Please select any option.";
        return;
    }
}
