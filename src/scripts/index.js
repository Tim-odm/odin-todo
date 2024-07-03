// Module exports
import * as headerHelper from "./header";

// CSS imports
import "../styles/modern-normalise.css";
import "../styles/reset.css";
import "../styles/app.css";

const app = document.querySelector("#app");

function draw() {
  app.appendChild(headerHelper.drawHeader())
}

draw()