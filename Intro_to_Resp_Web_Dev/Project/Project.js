/* Variables: change them to the corresponding id and class */

/* id of the link that displays the menu */
var launcher = "#menu-link";

/* id of the menu that will be displayed */
var dropdown = "#menu";

/* class (without the dot) that shows the menu */
var displayClass = "display-menu";
	
/* we declare the functions */
function nav(){
	var launch = document.querySelector(launcher);	
	launch.addEventListener("click", displayMenu, false);
}

function displayMenu(e){
	e.preventDefault();
	var display = document.querySelector(dropdown);
	display.classList.toggle(displayClass);
}

/* We add the js class to the html tag to know that JS is working */
document.querySelector("html").classList.add("js");


/* we execute the main function */
nav();