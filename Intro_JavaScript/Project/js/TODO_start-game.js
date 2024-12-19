// Dynamically write the levels
writeLevels();

// Assign initial events
document.querySelectorAll(".restart").forEach(function(element) {
  element.addEventListener("click", restart);
});

document
  .querySelector("#normal-game")
  .addEventListener("click", startNormalGame);
document
  .querySelector("#relax-game")
  .addEventListener("click", startRelaxGame);

document
  .querySelector("#level-control")
  .addEventListener("click", showLevelMenu);
document
  .querySelector("#close-levels")
  .addEventListener("click", hideLevelMenu);

document.querySelectorAll(".level").forEach(function(element) {
  element.addEventListener("click", changeLevel);
});

document.querySelector("#next").addEventListener("click", loadNewLevel);

document.querySelector("body").addEventListener("click", clickOutsideMenu);

document.addEventListener("keydown", escapeKeyClosesMenu);

// Display the welcome screen
document.querySelector("#welcome").classList.add("visible");
