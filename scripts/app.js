// Select the menu toggle button and the menu
const menuToggle = document.querySelector('.burger-toggle');
const menu = document.querySelector('.menu');

// Add a click event listener to toggle the menu visibility
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active'); // Toggles 'active' class to show/hide the menu
});