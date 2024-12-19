/* Create a countdown timer
Create a countdown timer for each round of the game
  Create the start timer function
  Create the update timer function
    Use double digits
    Update the display
  Call the function to run the timer
*/

/* Create the start timer function
Create the start timer function
  The timer has both seconds and minutes
  Initialize the seconds and minutes variables
  Initialize the variables to display the time
*/
function startTimer() {
  let seconds = 10;
  let minutes = 0;
  let secondsText;
  let minutesText;
  /* Create the update timer function
  Create the update timer function
    Create a nested function to handle the logic of the timer
    The function can run every second to update the timer by subtracting one second
    Minus one second from the timer
    When seconds hits 0, reset the seconds to 59 and subtract one minute
    If minutes hits less than 0, stop the timer/end recurring calls to the function
    Create a function to handle what happends when the timer/function stops
  */
  function updateTimer() {
    seconds--;
    if (seconds < 0) {
      seconds = 59;
      minutes--;
      console.log("Minus one minute");
    }
    if (minutes < 0) {
      clearInterval(timer);
      console.log("Game Over");
      timeOver();
    }
    /* Use double digits
    Use double digits for the timer display
      Handle the formatting for a double-digit display
      If the seconds or minutes are less than 10, add a leading zero
      Use if statements to add the leading zero
      Update the minutes and seconds in the display using innerText
    */
    // Create the if statements
    if (seconds < 10) {
      secondsText = `0${seconds}`;
    }
    if (minutes < 10) {
      minutesText = `0${minutes}`;
    }
    // Update the minutes and seconds in the display
    document.querySelector("#seconds").innerText = secondsText;
    document.querySelector("#minutes").innerText = minutesText;
  }
  /* Run the timer
  Call the function to run the timer
    Use setInterval to call the function every second
    Store this in a variable to clear the interval later
  */
  timer = setInterval(updateTimer, 1000);
 }
