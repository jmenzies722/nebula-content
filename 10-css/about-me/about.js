// script.js
const modeButton = document.getElementById('modeButton');
const body = document.body;

let isDarkMode = false;

modeButton.addEventListener('click', function() {
  isDarkMode = !isDarkMode;
  
  if (isDarkMode) {
    body.classList.add('dark-mode');
    modeButton.innerHTML = '<i class="button-icon">💡 </i>Light Mode';
  } else {
    body.classList.remove('dark-mode');
    modeButton.innerHTML = '<i class="button-icon">🌙 </i>Dark Mode';
  }
});

// Enable smooth scrolling
window.onload = function() {
    document.querySelector('body').style.scrollBehavior = 'smooth';
  };


  const scrollToTopButton = document.getElementById('scrollToTopButton');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document
scrollToTopButton.addEventListener('click', function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});


const coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
