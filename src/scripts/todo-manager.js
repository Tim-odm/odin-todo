// This file handles the logic for creating and managing todos/projects.
export const projectList = [];
export const todosList = [];
export let currentProject;
let todoCount = 0;
let projectCount = 0;

// Factory function for a project
function createProject(name) {
  const id = projectCount++;
  return {
    id: id,
    name,
    todos: [],
  };
}

// Function to add a project to the list
export function addNewProject(name) {
  projectList.push(createProject(name));
}

// Function to update a project name
export function updateProjectName(projectId, name) {
  const project = projectList.find((project) => project.id === projectId);
  project.name = name;
}

// Delete a project
export function deleteProject(id) {
  const project = projectList.find((project) => project.id === id);
  const projectIndex = projectList.indexOf(project);
  projectList.splice(projectIndex, 1);
  project.todos.forEach((todo) => {
    const todoIndex = todosList.indexOf(todo);
    todosList.splice(todoIndex, 1);
  });
}

// Set the current project
export function setCurrentProject(id) {
  if (id === 0) {
    currentProject = inbox;
  } else if (id === 1) {
    currentProject = today;
  } else {
    currentProject = projectList.find((project) => project.id === id);
  }
}

// Factory function for a todo
function createTodo(title, description, priority, dateTime) {
  const id = todoCount++;
  return {
    id: id,
    title,
    description,
    priority,
    dateTime: dateTime,
    completed: false,
  };
}

// Function to add a todo to a project
export function addNewTodo(projectId, title, desc, priority, dateTime) {
  let project;
  if (projectId == 0) {
    project = inbox;
  } else if (projectId == 1) {
    project = today;
  } else {
    project = projectList.find((project) => project.id === projectId);
  }
  const newTodo = createTodo(title, desc, priority, dateTime);
  project.todos.push(newTodo);
  todosList.push(newTodo);
}

// Funtion to update a todo
export function updateTodo(id, title, description, priority) {
  const todo = todosList.find((todo) => todo.id === id);
  todo.title = title;
  todo.description = description;
  todo.priority = priority;
}

// Function to delete a todo
export function deleteTodo(projectId, todoId) {
  let project;
  if (projectId == 0) {
    project = inbox;
  } else if (projectId == 1) {
    project = today;
  } else {
    project = projectList.find((project) => project.id === projectId);
  }
  const todoIndex = project.todos.findIndex((todo) => todo.id === todoId);
  project.todos.splice(todoIndex, 1);
  const todo = todosList.find((todo) => todo.id === todoId);
  const todoIndexGlobal = todosList.indexOf(todo);
  todosList.splice(todoIndexGlobal, 1);
}

// Function to toggle the completion of a todo
export function toggleTodoCompletion(projectId, todoId) {
  const project = projectList.find((project) => project.id === projectId);
  const todo = project.todos.find((todo) => todo.id === todoId);
  todo.completed = !todo.completed;
}

// Create 3 projects
// Today project - List of all todos due today
const todayDate = new Date().toISOString().substring(0, 10);

// Start with inbox project
export const inbox = createProject("Inbox");
addNewTodo(
  0,
  "Welcome to your inbox.",
  "This is where you can add quick todos.",
  "low",
  `${todayDate}T09:00`
);

export const today = createProject("Today");
addNewTodo(
  1,
  "Welcome to Today!.",
  "Todos due today are shown here.",
  "low",
  `${todayDate}T09:00`
);

// Project 1
addNewProject("Project 1");
addNewTodo(
  2,
  "Welcome",
  "This is your first project todo!",
  "low",
  `${todayDate}T09:00`
);

// Project 2
addNewProject("Project 2");

//Project 3
addNewProject("Project 3");

// Set the current project
currentProject = projectList[0];
