/* Dynamic level menu function
Create a dynamic level menu function to display the levels
  Select the unordered list inside the level menu
  Loop through the levels array
    Create a list item for each level
    Create a button for each level using innerHTML
      add a data level attribute and a level name
    Append the button to the unordered list
*/
// Create the dynamic level menu function
const writeLevels = () => {
  // Select the unordered list inside the level menu
  const menuLevels = document.querySelector(".select-level ul");
  // Loop through the levels array
  levels.forEach((element, index) => {
    // Create a new list item for the level
    const controlLevel = document.createElement("li");
    // Create a new button for the level
    const button = document.createElement("button");
    button.classList.add("level"); // Add the class 'level'
    button.setAttribute("data-level", index); // Set the data-level attribute
    button.textContent = `Level ${index + 1}`; // Set the button text
    // Append the button to the list item
    controlLevel.appendChild(button);
    // Append the button to the unordered list
    menuLevels.appendChild(controlLevel);
  });
};

/* Menu Button
Function to go back to welcome screen
Create a function to go back to the welcome screen when the menu button is clicked
  Use the menu button in the modals and in the levels menu

*/
// Back to welcome function
const backToWelcome = () => {
  // Select the welcome element
  const welcomeElement = document.querySelector("#welcome");
  // Add the class "visible" to the welcome element
  welcomeElement.classList.add("visible");
  // Call the hideMenuLevels function to hide the levels menu
  hideMenuLevels();
  // Clear the interval for the stopwatch
  clearInterval(stopwatch);
  // Call the resetLevel function to reset the level to 0
  resetLevel()
  // Remove the class "visible" from the modals
  document.querySelector("#gameOver").classList.remove("visible");
  document.querySelector("#timeOver").classList.remove("visible");
  document.querySelector("#endGame").classList.remove("visible");
  document.querySelector("#nextLevel").classList.remove("visible");
  // Add the class "hidden" to the table element
  document.querySelector("#table").classList.add("hidden");
};

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
