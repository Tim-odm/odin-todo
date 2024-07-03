// Icon imports
import calIcon from "../assets/icons/calendar-today-outline.svg";
import inboxIcon from "../assets/icons/inbox.svg";
import projectsIcon from "../assets/icons/hammer-wrench.svg";

// Draw sidebar DOM elements
export function drawSideBar() {
  const sidebarDiv = document.createElement("div");
  sidebarDiv.classList.add("sidebar");

  const sidebarOptions = document.createElement("ul");
  sidebarOptions.classList.add("sidebar-options");
  const inboxOption = document.createElement("li");
  inboxOption.innerHTML = `${inboxIcon} <p>Inbox</p>`;
  const todayOption = document.createElement("li");
  todayOption.innerHTML = `${calIcon} <p>Today</p>`;
  const projectsOption = document.createElement("li");
  projectsOption.innerHTML = `${projectsIcon} <p>Projects</p>`;
  const projectListDiv = document.createElement("div");
  sidebarOptions.append(inboxOption, todayOption, projectsOption, projectListDiv);
  for (let i = 0; i < sidebarOptions.childElementCount - 1; i++) {
    sidebarOptions.children[i].children[0].classList.add("icon");
  }

  sidebarDiv.appendChild(sidebarOptions);
  document.querySelector("#app").appendChild(sidebarDiv);
}

drawSideBar();