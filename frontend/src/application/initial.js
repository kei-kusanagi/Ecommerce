import * as app from './app.js';


app.initialSetup();

window.console.log("dom ready!, adding event listener on click");
var btn = document.getElementById("themeToggleButton");
btn.addEventListener("click", app.toggleTheme, false);