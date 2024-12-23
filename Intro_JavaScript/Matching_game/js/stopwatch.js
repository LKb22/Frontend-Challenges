/* Create a countdown timer
Create a countdown timer for each round of the game
  Create the start timer function
    The timer has both seconds and minutes
    Initialize the seconds and minutes variables
    Initialize the variables to display the time
    Create the update timer function
      Decrement the seconds by 1 each second
      If the seconds reach 0
        Reset them to 59 and decrement the minutes by 1
      If the minutes reach less than 0
        Stop the timer (clearInterval)
        Call the timeOver function
    Use double digits
    Update the display

*/
// Create the start timer function
const initiateStopwatch = () => {
  // Seconds can start at 10
  let seconds = 10;
  // Minutes
  let minutes = 0;
  // Initialize the variables to display the time
  // Seconds
  let secondsText;
  // Minutes
  let minutesText;
  // Create the update timer function
  const updateStopwatch = () => {
    // Decrement the seconds by 1
    seconds--;
    // If the seconds reach 0
    if (seconds < 0) {
      // Reset them to 59
      seconds = 59;
      // Decrement the minutes by 1
      minutes--;
      // Log
      if (Game.debug) console.log("Minus 1 minute");
    };
    // If the minutes reach less than 0
    if (minutes < 0) {
      // Reset the seconds and minutes to 0
      seconds = 0;
      minutes = 0;
      // Stop the timer
      clearInterval(stopwatch);
      // Log
      if (Game.debug) console.log("Time over");
      // Call the timeOver function
      timeOver();
    };
    // Set the seconds and minutes to the text variables
    secondsText = seconds;
    minutesText = minutes;
    // Use double digits with if statements
    if (seconds < 10) {
      secondsText = "0" + seconds;
    }
    if (minutes < 10) {
      minutesText = "0" + minutes;
    };
    // Update the display
    // Update the inner text of the elements
    document.querySelector("#minutes").innerText = minutesText;
    document.querySelector("#seconds").innerText = secondsText;
  };
  // Call the update timer function every second
  stopwatch = setInterval(updateStopwatch, 1000);
};
