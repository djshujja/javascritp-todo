window.onload = function () {
  const todoInput = document.getElementById("todo-title");
  const addBtn = document.getElementById("add-btn");

  addBtn.addEventListener("click", function () {
    if (todoInput.value != "") {
      const todoUl = document.getElementById("todo-ul");
      todoUl.innerHTML += `<li>${todoInput.value}</li>`;
      todoInput.value = "";
    } else alert("Please enter a something for fuck sake!");
  });
};
