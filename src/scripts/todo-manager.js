// This file handles the logic for creating and managing todos/projects.
export let projectList = [];
export let todosList = [];
export let currentProject;
let todoCount = 0;
let projectCount = 0;

// Factory function for a project
function createProject(name) {
  const id = projectCount++;
  const defualtTodo = createTodo("New Todo", "Add description", "low");
  todosList.push(defualtTodo);
  return {
    id: id,
    name,
    todos: [defualtTodo],
  };
}

// Factory function for a todo
function createTodo(title , description, priority) {
  const id = todoCount++;
  return {
    id: id,
    title,
    description,
    priority,
    completed: false,
  };
}

// Function to add a todo to the list
export function addNewTodo(projectId, priority) {
  const project = projectList.find(project => project.id === projectId);
  const newTodo = createTodo("New Todo", "Add description", priority);
  project.todos.push(newTodo);
  todosList.push(newTodo);
}

// Function to add a project to the list
export function addNewProject(name) {
  projectList.push(createProject(name));
}

// Function to update a project name
export function updateProjectName(projectId, name) {
  const project = projectList.find(project => project.id === projectId);
  project.name = name;
}

// Funtion to update a todo
export function updateTodo(id, title, description) {
  const todo = todosList.find(todo => todo.id === id);
  todo.title = title;
  todo.description = description;
}

// Delete a project
export function deleteProject(id) {
  const project = projectList.find(project => project.id === id);
  const projectIndex = projectList.indexOf(project);
  projectList.splice(projectIndex, 1);
  project.todos.forEach(todo => {
    const todoIndex = todosList.indexOf(todo);
    todosList.splice(todoIndex, 1);
  });
}

// Function to delete a todo
export function deleteTodo(projectId, todoId) {
  const project = projectList.find(project => project.id === projectId);
  const todoIndex = project.todos.findIndex(todo => todo.id === todoId);
  project.todos.splice(todoIndex, 1);
  const todo = todosList.find(todo => todo.id === todoId);
  const todoIndexGlobal = todosList.indexOf(todo);
  todosList.splice(todoIndexGlobal, 1);
}

// Function to toggle the completion of a todo
export function toggleTodoCompletion(projectId, todoId) {
  const project = projectList.find(project => project.id === projectId);
  const todo = project.todos.find(todo => todo.id === todoId);
  todo.completed = !todo.completed;
}

// Create 3 projects
// Start with inbox project
export let inbox = createProject("Inbox");
updateTodo(0, "Welcome to your inbox.", "This is " + "where you can add quick todos.");

// Today project - List of all todos due today
export let today = createProject("Today");
updateTodo(1, "Welcome to Today!.", "Todos due " + "today are shown here.");


// Project 1
addNewProject('Project 1');
addNewTodo(2, "low");
addNewTodo(2, "high");
addNewTodo(2, "medium");
updateTodo(2, "Welcome", "This is your first project todo!");

// Set the current project
currentProject = projectList[0];