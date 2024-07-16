// Module imports
import { currentProject } from "./todo-manager";

function drawMainContent() {
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("main-content");

  const projectHeader = document.createElement("h3");
  projectHeader.classList.add("project-header");
  projectHeader.innerText = "Project Header";
  mainDiv.appendChild(projectHeader);

  const todoListDiv = updateTodoListDiv();
  mainDiv.appendChild(todoListDiv);

  document.querySelector("#app").appendChild(mainDiv);
}

export function updateTodoListDiv() {
  const todoListDiv = document.createElement("div");
  todoListDiv.classList.add("todo-list-div");

  currentProject.todos.forEach(todo => {
    console.log(todo);
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item", todo.priority);

    const todoTitle = document.createElement("h4");
    todoTitle.innerText = todo.title;

    const todoDesc = document.createElement("p");
    todoDesc.innerText = todo.description;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    todoItem.append(todoTitle, todoDesc, checkbox);
    todoListDiv.appendChild(todoItem);
  });

  return todoListDiv;
}

drawMainContent()