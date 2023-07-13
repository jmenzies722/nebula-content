// script.js
const modeButton = document.getElementById('modeButton');
const body = document.body;

let isDarkMode = false;

modeButton.addEventListener('click', function() {
  isDarkMode = !isDarkMode;
  
  if (isDarkMode) {
    body.classList.add('dark-mode');
    modeButton.innerHTML = '<i class="button-icon">💡 </i>Switch to Light Mode';
  } else {
    body.classList.remove('dark-mode');
    modeButton.innerHTML = '<i class="button-icon">🌙 </i>Switch to Dark Mode';
  }
});
