// Get the button element by ID
const button = document.getElementById('increase');

// Add an event listener for the button click
button.addEventListener('click', () => {
  // Add the animation class to the button
  button.classList.add('animate-in');
  console.log("hej");
  
  // Optionally remove the animation class after it ends to allow replay
  button.addEventListener('animationend', () => {
    button.classList.remove('animate-in');
  });
});



//decrease button
// Get the button element by ID
const button_de = document.getElementById('decrease');

// Add an event listener for the button click
button_de.addEventListener('click', () => {
  // Add the animation class to the button
  button_de.classList.add('animate-de');
  
  // Optionally remove the animation class after it ends to allow replay
  button_de.addEventListener('animationend', () => {
    button_de.classList.remove('animate-de');
  });
});