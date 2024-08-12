// Module import
import * as todoManager from "./todo-manager.js";
import * as mainContHelper from "./main-content.js";
import * as modal from "./modal.js";

// Icon imports
import calIcon from "../assets/icons/calendar-today-outline.svg";
import inboxIcon from "../assets/icons/inbox.svg";
import projectsIcon from "../assets/icons/hammer-wrench.svg";
import menuUp from "../assets/icons/menu-up.svg";

// Draw sidebar DOM elements
export function drawSideBar() {
  const sidebarDiv = document.createElement("div");
  sidebarDiv.classList.add("sidebar");

  const sidebarOptions = drawSidebarOptions();

  const projectListDiv = document.createElement("div");
  projectListDiv.id = "project-list-div";
  const projectOl = document.createElement("ol");
  projectOl.classList.add("project-ol");
  projectListDiv.appendChild(projectOl);
  sidebarOptions.appendChild(projectListDiv);

  // Give icon class to svgs
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
  inboxOption.addEventListener("click", () => {
    todoManager.setCurrentProject(0);
    mainContHelper.updateHeader();
    mainContHelper.updateTodoListDiv();
  });
  const todayOption = document.createElement("li");
  todayOption.innerHTML = `${calIcon} <p>Today</p>`;
  todayOption.addEventListener("click", () => {
    todoManager.setCurrentProject(1);
    mainContHelper.updateHeader();
    mainContHelper.updateTodoListDiv();
  });
  const projectsOption = document.createElement("li");
  projectsOption.innerHTML = `${projectsIcon} <p>Projects</p>${menuUp}`;
  projectsOption.children[2].classList.add("icon", "arrow-icon", "up");
  projectsOption.addEventListener("click", () => {
    const projectListDiv = document.querySelector("#project-list-div");
    if (projectListDiv.classList.toggle("hidden")) {
      projectListDiv.style.height = "0px";
    } else {
      projectListDiv.style.height = projectListDiv.scrollHeight + "px";
    }
    projectsOption.children[2].classList.toggle("down");
  });
  sidebarOptions.append(inboxOption, todayOption, projectsOption);

  return sidebarOptions;
}

// Update projectListDiv
export function updateProjectListDiv() {
  const orderdedList = document.querySelector(".project-ol");
  orderdedList.innerHTML = "";
  todoManager.projectList.forEach((project) => {
    const listItem = document.createElement("li");
    listItem.textContent = project.name;
    listItem.addEventListener("click", () => {
      todoManager.setCurrentProject(project.id);
      mainContHelper.updateHeader();
      mainContHelper.updateTodoListDiv();
    });
    orderdedList.appendChild(listItem);
  });
  // Add project option
  const listItem = document.createElement("li");
  listItem.textContent = "Add Project";
  listItem.addEventListener("click", () => {
    // Add new project modal opens here
    modal.drawNewProjectModal();
  });
  orderdedList.appendChild(listItem);

  // Get height for transitions
  const projectListDiv = document.getElementById("project-list-div");
  projectListDiv.style.height = projectListDiv.scrollHeight + "px";
}

drawSideBar();
