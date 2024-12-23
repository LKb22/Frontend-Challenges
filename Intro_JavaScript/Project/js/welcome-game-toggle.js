/* Rest to welcome function
*/
// reset to welcome function
const resetToWelcome = () => {
  ["#endGame", "#timeOver", "#gameOver", "#nextLevel"].forEach(selector => {
    document.querySelector(selector).classList.remove("visible");
  });
};

/* Toggle header visibility
Create the toggleHeaderVisibility function to toggle the header visibility
  Get the header and welcome page elements
  If the welcome page is visible, hide the header
  Else, show the header
*/
// toggleHeaderVisibility function
const toggleHeaderVisibility = () => {
  // Get the header and welcome page elements
  const header = document.querySelector('.header');
  const welcomePage = document.querySelector('.welcome');
  // If the welcome page is visible, hide the header
  if (welcomePage.classList.contains('visible')) {
    header.classList.add('header-hidden');
  // Else, show the header
  } else {
    header.classList.remove('header-hidden');
  };
};
