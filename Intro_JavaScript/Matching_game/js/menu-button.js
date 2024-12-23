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
  resetToWelcome();
  // Add the class "hidden" to the table element
  document.querySelector("#table").classList.add("hidden");
};
