// Get elements
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

let currentInput = ""; // Store the current input
let calculation = []; // Store the calculation steps

// Add event listeners to buttons
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        // Handle different button types
        if (value === "=") {
            if (currentInput !== "") {
                calculation.push(currentInput);
                const result = eval(calculation.join(" "));
                display.value = result;
                currentInput = result;
                calculation = [];
            }
        } else if (value === "C") {
            currentInput = "";
            calculation = [];
            display.value = "";
        } else {
            currentInput += value;
            display.value += value;
        }
    });
});
