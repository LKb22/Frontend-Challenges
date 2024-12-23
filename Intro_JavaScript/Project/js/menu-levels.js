/* Levels Menu
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
