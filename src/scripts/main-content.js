// Module imports
import { currentProject, deleteTodo } from "./todo-manager";

// Icon imports
import deleteIcon from "../assets/icons/delete-outline.svg";

function drawMainContent() {
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("main-content");

  const projectHeaderDiv = document.createElement("div");
  projectHeaderDiv.classList.add("main-header-wrapper"); 

  const projectHeader = document.createElement("h3");
  projectHeader.classList.add("project-header");
  projectHeader.innerText = currentProject.name;
  projectHeaderDiv.appendChild(projectHeader);
  projectHeaderDiv.innerHTML += `${deleteIcon}`;
  projectHeaderDiv.children[1].classList.add("icon");
  mainDiv.appendChild(projectHeaderDiv);

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
    
    const deleteIconDiv = document.createElement("div");
    deleteIconDiv.classList.add("delete-icon-wrapper");
    deleteIconDiv.innerHTML = `${deleteIcon}`;
    deleteIconDiv.children[0].classList.add("icon");

    deleteIconDiv.children[0].addEventListener("click", () => {
      deleteTodo(currentProject.id, todo.id);
      updateTodoListDiv();
    });

    todoItem.append(todoTitle, todoDesc, dueDate, checkbox, deleteIconDiv);
    todoListDiv.appendChild(todoItem);
  });
}

drawMainContent();