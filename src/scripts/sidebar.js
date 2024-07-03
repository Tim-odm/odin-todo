export function drawSideBar() {
  const sidebarDiv = document.createElement("div");
  sidebarDiv.classList.add("sidebar");

  const sidebarOptions = document.createElement("ul");
  sidebarOptions.classList.add("sidebar-options");
  const inboxOption = document.createElement("li");
  inboxOption.textContent = "Inbox";
  const todayOption = document.createElement("li");
  todayOption.textContent = "Today";
  const projectsOption = document.createElement("li");
  projectsOption.textContent = "Projects";
  const projectListDiv = document.createElement("div");
  sidebarOptions.append(inboxOption, todayOption, projectsOption, projectListDiv);
  sidebarDiv.appendChild(sidebarOptions);

  document.querySelector("#app").appendChild(sidebarDiv);
}

drawSideBar();