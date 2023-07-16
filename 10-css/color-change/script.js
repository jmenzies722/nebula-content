// Get the DOM element with the ID 'square'
const square = document.getElementById('square');

// Add a click event listener to the square element
square.addEventListener('click', function() {
  // Generate a random color using the generateRandomColor function
  const randomColor = generateRandomColor();

  // Set the background color of the body to the random color
  document.body.style.backgroundColor = randomColor;
});

// Function to generate a random color
function generateRandomColor() {
  // Define the available characters for generating a color
  const letters = '0123456789ABCDEF';

  // Initialize the color variable with a '#' symbol
  let color = '#';

  // Generate a random color by looping 6 times
  for (let i = 0; i < 6; i++) {
    // Select a random character from the letters string
    color += letters[Math.floor(Math.random() * 16)];
  }

  // Return the generated random color
  return color;
}
