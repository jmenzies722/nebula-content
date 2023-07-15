// Enables Dark Mode
const modeButton = document.getElementById('modeButton'); // Selects the modeButton element
const body = document.body; // Selects the body element

let isDarkMode = false; // Initializes a variable to track the dark mode state

modeButton.addEventListener('click', function() {
  isDarkMode = !isDarkMode; // Toggles the dark mode state

  // If dark mode is enabled
  if (isDarkMode) {
    body.classList.add('dark-mode'); // Adds the 'dark-mode' class to the body element
    modeButton.innerHTML = '<i class="button-icon">💡 </i>The Light'; // Updates the button text to indicate light mode
  } else { // If dark mode is disabled
    body.classList.remove('dark-mode'); // Removes the 'dark-mode' class from the body element
    modeButton.innerHTML = '<i class="button-icon">🌙 </i>The Dark Side'; // Updates the button text to indicate dark mode
  }
});

// Enable smooth scrolling
window.onload = function() {
  document.querySelector('body').style.scrollBehavior = 'smooth'; // Sets the scroll behavior of the body element to 'smooth'
};

const scrollToTopButton = document.getElementById('scrollToTopButton'); // Selects the scrollToTopButton element

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopButton.style.display = "block"; // Sets the display property of the scrollToTopButton element to 'block'
  } else {
    scrollToTopButton.style.display = "none"; // Sets the display property of the scrollToTopButton element to 'none'
  }
};

// When the user clicks on the button, scroll to the top of the document
scrollToTopButton.addEventListener('click', function() {
  document.body.scrollTop = 0; // Scrolls the body to the top
  document.documentElement.scrollTop = 0; // Scrolls the document element to the top
});

const coll = document.getElementsByClassName("collapsible"); // Selects elements with the 'collapsible' class
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active"); // Toggles the 'active' class on the clicked element
    let content = this.nextElementSibling; // Selects the next sibling element

    if (content.style.maxHeight) { // If the maxHeight style property exists
      content.style.maxHeight = null; // Resets the maxHeight to null, collapsing the content
    } else {
      content.style.maxHeight = content.scrollHeight + "px"; // Sets the maxHeight to the scroll height of the content, expanding it
    }
  });
}
