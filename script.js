// Get references to the container where the grid will go
// and the button that allows resizing the grid
const container = document.getElementById('container');
const button = document.getElementById('resizeBtn');

// Function to create a grid of size x size
function createGrid(size) {
    // Clear any existing grid before creating a new one
    container.innerHTML = "";

    // Calculate the size of each square so the grid fits within 960x960 pixels
    const squareSize = 960 / size;

    // Create size * size number of square divs
    for (let i = 0; i < size * size; i++) {
        // Create a new div element to represent a square
        const square = document.createElement('div');
        square.classList.add('grid-square'); // Add a class for styling

        // Set the width and height of the square dynamically
        square.style.height = `${squareSize}px`;
        square.style.width = `${squareSize}px`;

        // Add an event listener so the square changes color on hover
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black'; // You "draw" by hovering
        });

        // Add the square to the container
        container.appendChild(square);
    }
}

// Initially create a default 16x16 grid
createGrid(16);

// When the button is clicked, prompt the user for a new grid size
button.addEventListener('click', () => {
    let newSize = prompt("Enter the new grid size (max 100)");
    newSize = parseInt(newSize); // Convert the input from string to number

    // Validate the input and create a new grid if it's within range
    if (newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else {
        // If the input is invalid, show an alert
        alert("Please enter a number between 1 to 100");
    }
});
