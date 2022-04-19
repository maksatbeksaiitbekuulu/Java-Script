

window.addEventListener('load', function (){

  const todoForm = document.querySelector(".form");
  const todoInput = document.querySelector("#input-todo");
  const todoList = document.querySelector(".todo-list");

  todoForm.addEventListener('submit', (e) => {
      e.preventDefault();

  const todoItim = document.createElement("div");
  todoItim.innerText = todoInput.value;
  todoItim.classList.add('todo-item');
  todoList.appendChild(todoItim);
  todoInput.value = '';

  todoItim.addEventListener('click',function () {
      todoItim.style.display = 'none';

  });

  });
});