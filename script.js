// script.js

// Function to toggle the spinner visibility
function toggleSpinner() {
    const spinner = document.querySelector('.spinner');
    spinner.style.display = spinner.style.display === 'none' ? 'block' : 'none';
}

// Function to calculate the area of a rectangle
function calculateArea(length, width) {
    return length * width;
}

// Example of using the calculateArea function
const area = calculateArea(5, 10);
console.log(`Area of rectangle: ${area}`); // Outputs: Area of rectangle: 50

// Event listener for button click
document.querySelector('button').addEventListener('click', () => {
    toggleSpinner();
});
