var newLogo = document.getElementById("svg-logo");
var oldLogo = document.getElementById("oldlogo");

var jokescription = document.getElementById("jokescription");


//If the browser is in light mode, switch to white theme
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
	toggleDarkMode();
}

//Create event listeners for every Link
var iconClassList = document.getElementsByClassName("rollable")
for (let i = 0; i < iconClassList.length; i++) {
	iconClassList[i].addEventListener("mouseenter", function(e){ 
		francescoRoll(e.originalTarget.attributes); 
	});
	iconClassList[i].addEventListener("touchstart", function(e){ 
		francescoRoll(e.originalTarget.attributes); 
	});
	iconClassList[i].addEventListener("mouseleave", function(){ 
		francescoUnroll(); 
	});
} 

//Function: rolls Francesco (hides the newLogo and shows the oldLogo, applying to it the same color as the icon which got selected)
function francescoRoll(iconObj) {
	document.documentElement.style.setProperty('--second-color', iconObj.fcolor.value);
	newLogo.classList.add("new-logo-hover");
	oldLogo.classList.add("oldstyle-hover");
	if (jokescription != null) {
		jokescription.classList.remove("oHidden");
		jokescription.innerText = iconObj.phrase.value;
	}
}

//Function: unrolls Francesco (hides the oldLogo and shows the newLogo)
function francescoUnroll() {
	/*document.documentElement.style.setProperty('--second-color', "#FFB100");*/
	newLogo.classList.remove("new-logo-hover");
	oldLogo.classList.remove("oldstyle-hover");
	if (jokescription != null) {
		jokescription.classList.add("oHidden");
		jokescription.innerText = "";
	}
}

//Function: Toggles the Dark Theme (on by default)
function toggleDarkMode() {
	document.body.classList.toggle("white-scheme");
}
