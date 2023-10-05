

document.addEventListener("DOMContentLoaded", function () {
  const todoForm = document.getElementById("todo-form");
  const container = document.getElementById("container");

  todoForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const task = document.getElementById("task").value;
      const description = document.getElementById("description").value;
      addTodoItem(task, description);
      todoForm.reset();
  });

  function addTodoItem(task, description) {
      const div = document.createElement("div");
      div.innerHTML = `
          <h3>${task}</h3>
          <p>${description}</p>
          <button class="finish">finish</button>
          <button class="delete">Delete</button>
      `;

      div.querySelector(".finish").addEventListener("click", function () {
          div.classList.toggle("done");
          div.style.textDecoration ="line-through";
      });

      div.querySelector(".delete").addEventListener("click", function () {
          div.remove();
      });

      container.append(div);
  }
});


