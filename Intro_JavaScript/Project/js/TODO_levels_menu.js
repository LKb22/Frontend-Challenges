// Function to write levels dynamically into the menu
function writeLevels() {
  // Select the unordered list inside the level selection menu
  var levelsMenu = document.querySelector(".select-level ul");
  
  // Loop through each level in the levels array
  levels.forEach(function(element, index) {
    // Create a new list item for the level
    var levelControl = document.createElement("li");
    
    // Set the inner HTML to a button with a data-level attribute and level name
    levelControl.innerHTML =
      "<button class='level' data-level=" +
      index +
      ">Level " +
      (index + 1) +
      "</button>";
    
    // Append the new list item to the levels menu
    levelsMenu.appendChild(levelControl);
  });
}

// Function to change the current level
function changeLevel() {
  // Retrieve the level number from the button's data attribute
  var level = parseInt(this.dataset.level);
  
  // Update the current level to the selected level
  currentLevel = level;
  
  // Update the displayed level information
  updateLevel();
  
  // Start the game with the new level
  start();
}

// Function to show or hide the levels menu when clicked
function showLevelsMenu(event) {
  // Prevent the event from propagating further
  event.stopPropagation();
  
  // Toggle the visibility of the level selection menu
  document.querySelector(".select-level").classList.toggle("visible");
}

// Function to hide the levels menu
function hideLevelsMenu() {
  // Remove the 'visible' class to hide the levels menu
  document.querySelector(".select-level").classList.remove("visible");
}

// Function to hide the menu if the user clicks outside of it
function clickOutsideMenu(event) {
  // Check if the click occurred inside the menu
  if (event.target.closest(".select-level")) {
    return; // Do nothing if the click was inside the menu
  }
  
  // Otherwise, hide the menu
  document.querySelector(".select-level").classList.remove("visible");
}

// Function to close the levels menu when the Escape key is pressed
function escapeKeyClosesMenu(event) {
  // Log the key pressed for debugging purposes
  console.log(event.key);
  
  // If the Escape key is pressed, hide the levels menu
  if (event.key === "Escape") {
    hideLevelsMenu();
  }
}
