/* Variables: change them to the corresponding id and class */

/* id of the link that displays the menu */
const launcher = "#menu-link";

/* id of the menu that will be displayed */
const dropdown = "#menu";

/* class (without the dot) that shows the menu */
const displayClass = "display-menu";

/* we declare the functions */
function nav(){
	const launch = document.querySelector(launcher);
	launch.addEventListener("click", displayMenu, false);
}

function displayMenu(e){
	e.preventDefault();
	const display = document.querySelector(dropdown);
	display.classList.toggle(displayClass);
}

/* We add the js class to the html tag to know that JS is working */
document.querySelector("html").classList.add("js");


/* we execute the main function */
nav();
