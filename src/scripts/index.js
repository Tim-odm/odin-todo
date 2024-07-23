// Module exports
import * as headerHelper from "./header.js";
import * as sidebar from "./sidebar.js";
import * as main from "./main-content.js";
import * as modal from "./modal.js"

// CSS imports
import "../styles/modern-normalise.css";
import "../styles/reset.css";
import "../styles/app.css";
import "../styles/header.css";
import "../styles/sidebar.css";
import "../styles/main-content.css";
import "../styles/modal.css";

const app = document.querySelector("#app");

sidebar.updateProjectListDiv();