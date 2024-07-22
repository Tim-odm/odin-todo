// Module imports
import * as todoManager from "./todo-manager.js";
// Style imports

export function drawNewTodoModal() {
  const newtodoModalDiv = document.createElement("dialog");
  newtodoModalDiv.classList.add("new-todo-modal");

  const header = document.createElement("h2");
  header.innerText = "New Todo";
  newtodoModalDiv.appendChild(header);

  newtodoModalDiv.appendChild(createForm())

  const closeButton = document.createElement("button");
  closeButton.innerText = "Close";
  closeButton.addEventListener("click", (e) => {
    newtodoModalDiv.close();
  });
  newtodoModalDiv.appendChild(closeButton);


  const openButton = document.createElement("button");
  openButton.innerText = "Open";
  openButton.addEventListener("click", (e) => {
    newtodoModalDiv.showModal();
  });

  document.querySelector("#app").append(openButton, newtodoModalDiv);
  newtodoModalDiv.showModal();
}

function createForm() {
  const form = document.createElement("form");

  const titleLabel = document.createElement("label");
  titleLabel.classList.add("label");
  titleLabel.setAttribute("for", "title")
  titleLabel.innerText = "Title";

  const titleInput = document.createElement("input");
  titleInput.classList.add("form-input");
  titleInput.setAttribute("id", "title");
  titleInput.setAttribute("name", "title");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("required", "");

  form.append(titleLabel, titleInput);

  const descLabel = document.createElement("label");
  descLabel.classList.add("label");
  descLabel.setAttribute("for", "desc")
  descLabel.innerText = "Todo Description";

  const descInput = document.createElement("textarea");
  descInput.classList.add("form-input");
  descInput.setAttribute("id", "desc");
  descInput.setAttribute("name", "desc");
  descInput.setAttribute("type", "text");
  descInput.setAttribute("required", "");

  form.append(descLabel, descInput);

  const projectLabel = document.createElement("label");
  projectLabel.classList.add("label");
  projectLabel.setAttribute("for", "project")
  projectLabel.innerText = "Select Project";

  const projectInput = document.createElement("select");
  projectInput.setAttribute("id", "project");
  projectInput.setAttribute("name", "project");
  const inboxOption = document.createElement("option");
  inboxOption.value = todoManager.inbox.name;
  inboxOption.text = todoManager.inbox.name;
  projectInput.appendChild(inboxOption);
  const todayOption = document.createElement("option");
  todayOption.value = todoManager.today.name;
  todayOption.text = todoManager.today.name;
  projectInput.appendChild(todayOption);

  todoManager.projectList.forEach(todo => {
    const option = document.createElement("option");
    option.value = todo.name;
    option.innerText = todo.name;
    projectInput.appendChild(option);
  })

  form.append(projectLabel, projectInput);


  const submitButton = document.createElement("input");
  submitButton.setAttribute("type", "submit");
  submitButton.value = "Submit";

  form.appendChild(submitButton);

  return form;
}

drawNewTodoModal();