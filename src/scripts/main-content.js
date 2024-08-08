// Module imports
import { currentProject } from "./todo-manager";

function drawMainContent() {
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("main-content");

  const projectHeader = document.createElement("h3");
  projectHeader.classList.add("project-header");
  projectHeader.innerText = currentProject.name;
  mainDiv.appendChild(projectHeader);

  const todoListDiv = document.createElement("div");
  todoListDiv.classList.add("todo-list-div");
  mainDiv.appendChild(todoListDiv);

  document.querySelector("#app").appendChild(mainDiv);
  updateTodoListDiv();
}

export function updateTodoListDiv() {
  const todoListDiv = document.querySelector(".todo-list-div");
  todoListDiv.innerHTML = "";

  currentProject.todos.forEach(todo => {
    console.log(todo);
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item", todo.priority);

    const todoTitle = document.createElement("h4");
    todoTitle.innerText = todo.title;

    const todoDesc = document.createElement("p");
    todoDesc.innerText = todo.description;

    const dueDate = document.createElement("p");
    dueDate.innerText = `Due: ${todo.dateTime.substring(0, 10)} @${todo.dateTime.substring(11, 16)}`;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    todoItem.append(todoTitle, todoDesc, dueDate, checkbox);
    todoListDiv.appendChild(todoItem);
  });
}

drawMainContent();