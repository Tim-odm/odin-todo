// Module imports
import * as todoManager from "./todo-manager.js";
import * as mainContent from "./main-content.js";
import * as sidebar from "./sidebar.js";

// Icon imports
import closeIcon from "../assets/icons/close.svg";

const newtodoModalDiv = document.createElement("dialog");
newtodoModalDiv.classList.add("new-todo-modal");

const newProjectModal = document.createElement("dialog");
newProjectModal.classList.add("new-project-modal");

document.querySelector("#app").append(newtodoModalDiv);
document.querySelector("#app").append(newProjectModal);

export function drawNewTodoModal() {
  newtodoModalDiv.innerHTML = "";

  const header = document.createElement("h2");
  header.innerText = "New Todo";
  newtodoModalDiv.appendChild(header);

  createNewTodoForm();

  newtodoModalDiv.showModal();
}

function createNewTodoForm() {
  const form = document.createElement("form");
  form.id = "new-todo-form";
  form.method = "dialog";
  form.setAttribute("novalidate", "");

  const fieldsetList = [];

  for (let x = 0; x < 5; x++) {
    fieldsetList.push(document.createElement("fieldset"));
  }

  const titleLabel = document.createElement("label");
  titleLabel.classList.add("label");
  titleLabel.setAttribute("for", "title");
  titleLabel.innerText = "Title";

  const titleInput = document.createElement("input");
  titleInput.classList.add("form-text-input");
  titleInput.setAttribute("id", "title");
  titleInput.setAttribute("name", "title");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("required", "");
  titleInput.addEventListener("invalid", () => {
    titleInput.classList.toggle("invalid");
  });
  titleInput.addEventListener("blur", () => {
    if (!titleInput.validity.valueMissing) {
      titleInput.classList.toggle("invalid");
    }
  });

  fieldsetList[0].append(titleLabel, titleInput);

  const descLabel = document.createElement("label");
  descLabel.classList.add("label");
  descLabel.setAttribute("for", "desc");
  descLabel.innerText = "Todo Description";

  const descInput = document.createElement("textarea");
  descInput.classList.add("form-text-input");
  descInput.setAttribute("id", "desc");
  descInput.setAttribute("name", "desc");
  descInput.setAttribute("type", "text");
  descInput.setAttribute("required", "");
  descInput.addEventListener("invalid", () => {
    descInput.classList.toggle("invalid");
  });
  descInput.addEventListener("blur", () => {
    if (!descInput.validity.valueMissing) {
      descInput.classList.toggle("invalid");
    }
  });

  fieldsetList[1].append(descLabel, descInput);

  const priorityLabel = document.createElement("label");
  priorityLabel.classList.add("label");
  priorityLabel.setAttribute("for", "priority");
  priorityLabel.innerText = "Priority";

  const radioDiv = document.createElement("div");
  radioDiv.classList.add("priority-radio-div");

  const priorityInputs = [];
  const priorityLabels = [];
  const priorityDivs = [];
  for (let x = 0; x < 3; x++) {
    priorityInputs.push(document.createElement("input"));
    priorityInputs[x].setAttribute("type", "radio");
    priorityInputs[x].setAttribute("name", "priority");
    priorityInputs[x].classList.add("priority-input");
    priorityLabels.push(document.createElement("label"));
    priorityDivs.push(document.createElement("div"));
  }

  priorityInputs[0].id = "high";
  priorityInputs[0].value = "high";
  priorityLabels[0].innerText = "High";
  priorityLabels[0].setAttribute("for", "high");
  priorityDivs[0].append(priorityInputs[0], priorityLabels[0]);

  priorityInputs[1].id = "medium";
  priorityInputs[1].value = "medium";
  priorityLabels[1].innerText = "Medium";
  priorityLabels[1].setAttribute("for", "medium");
  priorityDivs[1].append(priorityInputs[1], priorityLabels[1]);

  priorityInputs[2].id = "low";
  priorityInputs[2].value = "low";
  priorityLabels[2].innerText = "Low";
  priorityLabels[2].setAttribute("for", "low");
  priorityDivs[2].append(priorityInputs[2], priorityLabels[2]);

  radioDiv.append(priorityDivs[0], priorityDivs[1], priorityDivs[2]);

  fieldsetList[2].append(priorityLabel, radioDiv);

  const projectLabel = document.createElement("label");
  projectLabel.classList.add("label");
  projectLabel.setAttribute("for", "project");
  projectLabel.innerText = "Select Project";

  const projectInput = createProjectOptions();

  fieldsetList[3].append(projectLabel, projectInput);

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
  // console.log(date);
  dateInput.value = date;

  dateDiv.append(dateLabel, dateInput);

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
  fieldsetList[4].appendChild(dateTimeDiv);

  fieldsetList.forEach((set) => {
    form.appendChild(set);
  });

  const buttonDiv = createButtonDiv(newtodoModalDiv, true);

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

  todoManager.projectList.forEach((todo) => {
    const option = document.createElement("option");
    option.value = todo.id;
    option.innerText = todo.name;
    projectInput.appendChild(option);
  });

  return projectInput;
}

function createButtonDiv(modal, isTodoForm) {
  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("new-todo-button-div");

  const submitButton = document.createElement("button");
  submitButton.innerText = "Submit";
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (isTodoForm) {
      // Validate form: if valid add new todo
      const form = document.getElementById("new-todo-form");
      if (form.checkValidity()) {
        const priority = document.querySelector(
          ".priority-input:checked"
        ).value;
        const projectId = Number(document.getElementById("project").value);
        const title = document.getElementById("title").value;
        const desc = document.getElementById("desc").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;

        todoManager.addNewTodo(
          projectId,
          title,
          desc,
          priority,
          `${date}T${time}`
        );
        mainContent.updateTodoListDiv();
        modal.innerHTML = "";
        modal.close();
      } else {
        console.log("Error");
      }
    } else {
      const form = document.getElementById("new-project-form");
      if (form.checkValidity()) {
        const projectName = document.getElementById("project-name").value;
        todoManager.addNewProject(projectName);
        sidebar.updateProjectListDiv();
        modal.innerHTML = "";
        modal.close();
      }
    }
  });

  const closeButton = document.createElement("button");
  closeButton.innerText = "Close";
  closeButton.addEventListener("click", () => {
    modal.innerHTML = "";
    modal.close();
  });
  buttonDiv.append(submitButton, closeButton);

  return buttonDiv;
}

export function drawNewProjectModal() {
  newProjectModal.innerHTML = "";

  createNewProjectForm();

  newProjectModal.showModal();
}

function createNewProjectForm() {
  const wrapper = document.createElement("div");
  wrapper.classList.add("project-modal-wrapper");

  const form = document.createElement("form");
  form.setAttribute("novalidate", "");
  form.id = "new-project-form";

  const modalHeader = document.createElement("div");
  modalHeader.classList.add("new-project-modal-header");

  modalHeader.innerHTML = `<h3>New Project</h3>${closeIcon}`;
  modalHeader.children[1].classList.add("icon");
  modalHeader.children[1].addEventListener("click", () => {
    newProjectModal.close();
  });
  form.appendChild(modalHeader);

  const projectNameInput = document.createElement("input");
  projectNameInput.classList.add("form-text-input");
  projectNameInput.setAttribute("id", "project-name");
  projectNameInput.setAttribute("name", "project-name");
  projectNameInput.setAttribute("type", "text");
  projectNameInput.setAttribute("required", "");
  projectNameInput.addEventListener("invalid", () => {
    projectNameInput.classList.toggle("invalid");
  });
  projectNameInput.addEventListener("blur", () => {
    if (!projectNameInput.validity.valueMissing) {
      projectNameInput.classList.toggle("invalid");
    }
  });
  form.appendChild(projectNameInput);

  projectNameInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      todoManager.addNewProject(projectNameInput.value);
      sidebar.updateProjectListDiv();
      newProjectModal.innerHTML = "";
      newProjectModal.close();
    }
  });

  wrapper.appendChild(form);

  const buttonDiv = createButtonDiv(newProjectModal, false);
  wrapper.appendChild(buttonDiv);

  newProjectModal.appendChild(wrapper);
}
