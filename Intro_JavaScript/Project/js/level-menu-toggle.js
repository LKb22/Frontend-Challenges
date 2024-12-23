/* Show or hide the levels menu when clicked
Create a function to show or hide the levels menu when clicked
  Prevent the level from propagating to the parent element
  Toggle the visible class to show or hide the menu
*/
// Create the toggle levels function
const sampleMenuLevels = (event) => {
  // Prevent the level from propagating to the parent element
  event.stopPropagation();
  // Toggle the visible class to show or hide the menu
  document.querySelector(".select-level").classList.toggle("visible");
};

/* Hide the levels menu
Create a function to hide the levels menu
  Remove the visible class to hide the menu
*/
// Create the hide levels function
const hideMenuLevels = () => {
  // Remove the visible class to hide the menu
  document.querySelector(".select-level").classList.remove("visible");
};

/* Hide menu if user clicks outside of it
Create a function to hide the menu if the user clicks outside of it
  Check if the click occurred inside the menu
    If so, do nothing
  Otherwise, hide the menu
*/
// Create the click outside menu function
const clickOutOfMenu = (event) => {
  // Check if the click occurred inside the menu
  if (event.target.closest(".select-level")) {
    // Do nothing if the click was inside the menu
    return;
  };
  // Otherwise, hide the menu
  document.querySelector(".select-level").classList.remove("visible");
};

/* Close the level menu when the escape key is pressed
Create a function to close the level menu when the escape key is pressed
  Log the key pressed for debugging purposes
  If the escape key is pressed, hide the menu
*/
// Create the escape key function
const EscKeyCloseMenu = (event) => {
  // Log the key pressed for debugging purposes
  console.log(event.key);
  // If the escape key is pressed, hide the menu
  if (event.key === "Escape") {
    hideMenuLevels();
  };
};
