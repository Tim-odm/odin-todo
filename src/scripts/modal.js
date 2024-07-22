// Module imports

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
}

function createForm() {
  const form = document.createElement("form");
  form.method = "dialog";

  const titleLabel = document.createElement("label");
  titleLabel.classList.add("label");
  titleLabel.setAttribute("for", "title")
  titleLabel.innerText = "Title";

  const titleInput = document.createElement("input");
  titleInput.classList.add("form-input");
  titleInput.setAttribute("id", "title");

  form.append(titleLabel, titleInput);

  return form;
}

drawNewTodoModal();