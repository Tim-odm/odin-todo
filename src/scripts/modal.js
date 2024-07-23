// Module imports
import * as todoManager from "./todo-manager.js";

const newtodoModalDiv = document.createElement("dialog");
newtodoModalDiv.classList.add("new-todo-modal");
document.querySelector("#app").append(newtodoModalDiv);

export function drawNewTodoModal() {
  newtodoModalDiv.innerHTML = "";
  
  const header = document.createElement("h2");
  header.innerText = "New Todo";
  newtodoModalDiv.appendChild(header);

  newtodoModalDiv.appendChild(createForm());

  const closeButton = document.createElement("button");
  closeButton.innerText = "Close";
  closeButton.addEventListener("click", (e) => {
    newtodoModalDiv.innerHTML = "";
    newtodoModalDiv.close();
  });
  newtodoModalDiv.appendChild(closeButton);

  newtodoModalDiv.showModal();
}

function createForm() {
  const form = document.createElement("form");
  form.id = "new-todo-form";
  form.method = "dialog";

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
  descInput.setAttribute("required", "");

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

  const dateLabel = document.createElement("label");
  dateLabel.classList.add("label");
  dateLabel.setAttribute("for", "date");
  dateLabel.innerText = "Due by:";

  const dateInput = document.createElement("input");
  dateInput.setAttribute("type", "date");
  dateInput.setAttribute("id", "date");
  dateInput.setAttribute("name", "date");
  descInput.setAttribute("required", "");
  const date = new Date().toISOString().substring(0, 10);
  console.log(date);
  dateInput.value = date;

  form.append(dateLabel, dateInput)

  const timeLabel = document.createElement("label");
  timeLabel.classList.add("label");
  timeLabel.setAttribute("for", "time");
  timeLabel.innerText = "Time:";

  const timeInput = document.createElement("input");
  timeInput.setAttribute("type", "time");
  timeInput.setAttribute("id", "time");
  timeInput.setAttribute("name", "time");
  timeInput.setAttribute("required", "");
  timeInput.value = "09:00";

  form.append(timeLabel, timeInput);

  const submitButton = document.createElement("input");
  submitButton.setAttribute("type", "submit");
  submitButton.value = "Submit";

  form.appendChild(submitButton);

  return form;
}