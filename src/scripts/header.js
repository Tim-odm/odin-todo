// Icon imports
import menuIcon from "../assets/icons/menu.svg";
import homeIcon from "../assets/icons/home-outline.svg";
import plusIcon from "../assets/icons/plus.svg";


// Draw header to DOM
export function drawHeader() {
  const domHeader = document.createElement("header");
  const headerDiv = document.createElement("div");
  domHeader.appendChild(headerDiv);
  const headerLeftSideDiv = document.createElement("div");
  headerDiv.appendChild(headerLeftSideDiv)

  headerLeftSideDiv.innerHTML = `${menuIcon}${homeIcon}${plusIcon}`;
  for (let i = 0; i < headerLeftSideDiv.childElementCount; i++) {
    headerLeftSideDiv.children[i].classList.add("icon");
  }

  document.querySelector("#app").appendChild(domHeader);
}

drawHeader();