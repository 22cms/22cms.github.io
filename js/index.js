var newLogo = document.getElementById("svg-logo");
var oldLogo = document.getElementById("oldlogo");

var jokescription = document.getElementById("jokescription");


var colorList = {
	'francesco' : {
		'color' : "#FFB100", 'phrase' : '',
	},
	'telegram' : {
		'phrase' : "Do you wanna spam me and get blocked? That's the right button!",
		'color' : "#2CA5E0",
	},
	'homepage' : {
		'phrase' : "My personal Browser Homepage, clearly not copied from Zorin's one",
		'color' : "#1E6AFF",
	},
	'catMaker' : {
		'phrase' : "Color Timmy as your Likes! Rigorously in Spaghetti Code",
		'color' : "#D35757",
	},
	'avicii' : {
		'phrase' : "\"My dreams are Made of Gold\"",
		'color' : "#FFFFFF00",
	},
	'lastFM' : {
		'phrase' : "Why is this even there? Even a deaf would scrobble more than me .-.",
		'color' : "#CE0000",
	},
	'github' : {
		'phrase' : "100% Italian Spaghetti (Code)",
		'color' : "#5151EE",
	},
}

//If the browser is in light mode, switch to white theme
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
	toggleDarkMode();
}

//Function: rolls Francesco (hides the newLogo and shows the oldLogo, applying to it the same color as the icon which got selected)
function francescoRoll(iconObj) {
	document.documentElement.style.setProperty('--second-color', iconObj.color);
	newLogo.classList.add("new-logo-hover");
	oldLogo.classList.add("oldstyle-hover");
	if (jokescription != null) {
		jokescription.classList.remove("oHidden");
		jokescription.innerText = iconObj.phrase;
	}
}

//Function: unrolls Francesco (hides the oldLogo and shows the newLogo)
function francescoUnroll() {
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
