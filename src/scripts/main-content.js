

function drawMainContent() {
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("main-content");

  const projectHeader = document.createElement("h3");
  projectHeader.classList.add("project-header");
  projectHeader.innerText = "Project Header";
  mainDiv.appendChild(projectHeader);

  document.querySelector("#app").appendChild(mainDiv);
}

drawMainContent()