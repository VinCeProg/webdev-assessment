// selects the menu toggle button and menu
const menuToggle = document.querySelector('.burger-toggle');
const menu = document.querySelector('.menu');

// listens to toggle
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active'); // toggles menu
  navbar.classList.toggle('menu-active');
  
  // Change icon
  if (menu.classList.contains('active')) {
    menuToggle.innerHTML = '&#10005;'; // changes to x icon
  } else {
    menuToggle.innerHTML = '&#9776;'; // returns to menu icon
  }
});