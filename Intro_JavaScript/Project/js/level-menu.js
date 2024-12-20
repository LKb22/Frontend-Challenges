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
function writeLevels() {
  // Select the unordered list inside the level menu
  let levelsMenu = document.querySelector(".select-level ul");
  // Loop through the levels array
  levels.forEach(function(level, index) {
    // Create a new list item for the level
    let levelControl = document.createElement("li");
    // Create a new button for the level
    let button = document.createElement("button");
    button.classList.add("level"); // Add the class 'level'
    button.setAttribute("data-level", index); // Set the data-level attribute
    button.textContent = `Level ${index + 1}`; // Set the button text
    // Append the button to the list item
    levelControl.appendChild(button);
    // Append the button to the unordered list
    levelsMenu.appendChild(levelControl);
  });
}

/* Level change function
Create a function to change the current level
  Retrieve the level number from the button data attribute
  Update the current level to the selected level
  Update the level display
  Start the game with the new level
*/
// Create the level change function
function changeLevel() {
  // Retrieve the level number from the button data attribute
  let level = parseInt(this.dataset.level);
  // Update the current level to the selected level
  currentLevel = level;
  // Update the level display
  updateLevel();
  // Start the game with the new level
  start();
}

/* Show or hide the levels menu when clicked
Create a function to show or hide the levels menu when clicked
  Prevent the level from propagating to the parent element
  Toggle the visible class to show or hide the menu
*/
// Create the toggle levels function
function showLevelsMenu(event) {
  // Prevent the level from propagating to the parent element
  event.stopPropagation();
  // Toggle the visible class to show or hide the menu
  document.querySelector("#level-control").classList.toggle("visible");
}

/* Hide the levels menu
Create a function to hide the levels menu
  Remove the visible class to hide the menu
*/
// Create the hide levels function
function hideLevelsMenu() {
  // Remove the visible class to hide the menu
  document.querySelector(".select-level").classList.remove("visible");
}

/* Hide menu if user clicks outside of it
Create a function to hide the menu if the user clicks outside of it
  Check if the click occurred inside the menu
    If so, do nothing
  Otherwise, hide the menu
*/
// Create the click outside menu function
function clickOutsideMenu(event) {
  // Check if the click occurred inside the menu
  if (event.target.closest(".select-level")) {
    return; // Do nothing if the click was inside the menu
  }
  // Otherwise, hide the menu
  document.querySelector(".select-level").classList.remove("visible");
}

/* Close the level menu when the escape key is pressed
Create a function to close the level menu when the escape key is pressed
  Log the key pressed for debugging purposes
  If the escape key is pressed, hide the menu
*/
// Create the escape key function
function escapeKeyClosesMenu(event) {
  // Log the key pressed for debugging purposes
  console.log(event.key);
  // If the escape key is pressed, hide the menu
  if (event.key === "Escape") {
    hideLevelsMenu();
  }
}
