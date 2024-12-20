// Dynamically write the levels
writeLevels();

// Assign initial events
document.querySelectorAll(".restart").forEach(function(element) {
  element.addEventListener("click", restart);
});

document
  .querySelector("#normal-mode")
  .addEventListener("click", startNormalMode);
document
  .querySelector("#relax-mode")
  .addEventListener("click", startRelaxMode);

document
  .querySelector("#level-control")
  .addEventListener("click", showLevelsMenu);
document
  .querySelector("#close-levels")
  .addEventListener("click", hideLevelsMenu);

document.querySelectorAll(".levels").forEach(function(element) {
  element.addEventListener("click", changeLevel);
});

document.querySelector("#nextLevel").addEventListener("click", loadNewLevel);

document.querySelector("body").addEventListener("click", clickOutsideMenu);

document.addEventListener("keydown", escapeKeyClosesMenu);

// Display the welcome screen
document.querySelector("#welcome").classList.add("visible");
