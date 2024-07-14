// Module import
import { projectList } from "./todo-manager.js";

// Icon imports
import calIcon from "../assets/icons/calendar-today-outline.svg";
import inboxIcon from "../assets/icons/inbox.svg";
import projectsIcon from "../assets/icons/hammer-wrench.svg";

// Draw sidebar DOM elements
export function drawSideBar() {
  const sidebarDiv = document.createElement("div");
  sidebarDiv.classList.add("sidebar");

  const sidebarOptions = drawSidebarOptions();

  const projectListDiv = document.createElement("div");
  projectListDiv.id = "project-list-div";
  sidebarOptions.appendChild(projectListDiv);
  for (let i = 0; i < sidebarOptions.childElementCount - 1; i++) {
    sidebarOptions.children[i].children[0].classList.add("icon");
  }

  sidebarDiv.appendChild(sidebarOptions);
  document.querySelector("#app").appendChild(sidebarDiv);
}

// Drow the sidebar options div
function drawSidebarOptions() {
  const sidebarOptions = document.createElement("ul");
  sidebarOptions.classList.add("sidebar-options");
  const inboxOption = document.createElement("li");
  inboxOption.innerHTML = `${inboxIcon} <p>Inbox</p>`;
  inboxOption.addEventListener("click", (e) => {
    const projectHeader = document.querySelector(".main-content>.project-header");
    projectHeader.innerHTML = "Inbox";
  });
  const todayOption = document.createElement("li");
  todayOption.innerHTML = `${calIcon} <p>Today</p>`;
  todayOption.addEventListener("click", (e) => {
    const projectHeader = document.querySelector(".main-content>.project-header");
    projectHeader.innerHTML = "Today";
  });
  const projectsOption = document.createElement("li");
  projectsOption.innerHTML = `${projectsIcon} <p>Projects</p>`;
  projectsOption.addEventListener("click", (e) => {
    const projectListDiv = document.querySelector("#project-list-div");
    if (projectListDiv.classList.toggle("hidden")) {
      projectListDiv.style.height = "0px";
    } else {
      projectListDiv.style.height = projectListDiv.scrollHeight + "px";
    }
  });
  sidebarOptions.append(inboxOption, todayOption, projectsOption)

  return sidebarOptions;
}

// Update projectListDiv
export function updateProjectListDiv() {
  const orderdedList = document.createElement("ol");
  for (let i = 0; i < projectList.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = projectList[i].name;
    listItem.addEventListener("click", (e) => {
      const projectHeader = document.querySelector(".main-content>.project-header");
      projectHeader.innerHTML = projectList[i].name;
    });
    orderdedList.appendChild(listItem);
  }
  const projectListDiv = document.getElementById("project-list-div");
  projectListDiv.appendChild(orderdedList)
  // Get height for transitions
  projectListDiv.style.height = projectListDiv.scrollHeight + "px";
}

drawSideBar();