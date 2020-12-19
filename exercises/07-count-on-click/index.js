//This is a global variable
var counter = 0;

window.onload = function loadFunction() {
	//here I set the screen to the initial value when the website is fully loaded.
	document.getElementById("screen").innerHTML = "The counter value is " + counter;
	let el = document.querySelectorAll("button");

    el[1].addEventListener("click", decreaseCounter);
};

//called when the user clicks
window.increaseCounter = function increaseCounter() {
	//increase the global counter in one
	counter++;
	//update the screen with the new value
	document.getElementById("screen").innerHTML = "The counter value is " + counter;
};

function decreaseCounter() {
	//decrease the global counter in one
	if (counter > 0) counter--;
	//update the screen with the new value
	document.getElementById("screen").innerHTML = "The counter value is " + counter;
}
