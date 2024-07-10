// Module exports
import * as headerHelper from "./header";
import * as sidebar from "./sidebar.js";
import * as main from "./main-content.js";

// CSS imports
import "../styles/modern-normalise.css";
import "../styles/reset.css";
import "../styles/app.css";

const app = document.querySelector("#app");

function draw() {
  
}

sidebar.updateProjectListDiv();
draw();