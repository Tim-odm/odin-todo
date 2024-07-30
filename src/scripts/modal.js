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

  createForm();

  newtodoModalDiv.showModal();
}

function createForm() {
  const form = document.createElement("form");
  form.id = "new-todo-form";
  form.method = "dialog";

  const fieldsetList = [];

  for(let x = 0; x < 4; x++) {
    fieldsetList.push(document.createElement("fieldset"));
  }

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

  fieldsetList[0].append(titleLabel, titleInput);

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

  fieldsetList[1].append(descLabel, descInput);

  const projectLabel = document.createElement("label");
  projectLabel.classList.add("label");
  projectLabel.setAttribute("for", "project")
  projectLabel.innerText = "Select Project";

  const projectInput = createProjectOptions();

  fieldsetList[2].append(projectLabel, projectInput);

  const dateTimeDiv = document.createElement("div");
  dateTimeDiv.classList.add("date-time-div");

  const dateDiv = document.createElement("div");
  dateDiv.classList.add("date-div");

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

  dateDiv.append(dateLabel, dateInput)

  const timeDiv = document.createElement("div");
  timeDiv.classList.add("time-div");

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

  timeDiv.append(timeLabel, timeInput);
  dateTimeDiv.append(dateDiv, timeDiv);
  fieldsetList[3].appendChild(dateTimeDiv);

  fieldsetList.forEach(set => {
    form.appendChild(set);
  });

  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("new-todo-button-div");

  const submitButton = document.createElement("button");
  submitButton.innerText = "Submit";
  submitButton.addEventListener("click", () => {
    console.log(projectInput.value);
    todoManager.addNewTodo(Number(projectInput.value), titleInput.value, descInput.value, "low");
    newtodoModalDiv.innerHTML = "";
    newtodoModalDiv.close();
  });

  const closeButton = document.createElement("button");
  closeButton.innerText = "Close";
  closeButton.addEventListener("click", () => {
    newtodoModalDiv.innerHTML = "";
    newtodoModalDiv.close();
  });
  buttonDiv.append(submitButton, closeButton);

  newtodoModalDiv.appendChild(form);

  newtodoModalDiv.appendChild(buttonDiv);
}

function createProjectOptions() {
  const projectInput = document.createElement("select");
  projectInput.setAttribute("id", "project");
  projectInput.setAttribute("name", "project");
  projectInput.setAttribute("required", "");
  projectInput.value = todoManager.currentProject.name;

  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.text = "Select a Project";
  defaultOption.setAttribute("disabled", "");
  defaultOption.setAttribute("selected", "");
  projectInput.appendChild(defaultOption);

  const inboxOption = document.createElement("option");
  inboxOption.value = todoManager.inbox.id;
  inboxOption.text = todoManager.inbox.name;
  projectInput.appendChild(inboxOption);

  const todayOption = document.createElement("option");
  todayOption.value = todoManager.today.id;
  todayOption.text = todoManager.today.name;
  projectInput.appendChild(todayOption);

  todoManager.projectList.forEach(todo => {
    const option = document.createElement("option");
    option.value = todo.id;
    option.innerText = todo.name;
    projectInput.appendChild(option);
  });

  return projectInput;
}