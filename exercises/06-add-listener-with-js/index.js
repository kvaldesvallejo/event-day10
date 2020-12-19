window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	//some code here
	let button = document.getElementById("theGreen");
	button.addEventListener("click", buttonClicked);
};

//the listener function here

function buttonClicked() {
	alert("wuju");
}
