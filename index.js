const todoList = document.querySelector(".todo__list");
const todoForm = document.querySelector("#todo__form");
const deleteBtns = Array.from(document.querySelectorAll(".item__btn"));

class Todo {
  constructor(title) {
    this.title = title;
  }
}

class UI {
  static displayTodo() {
    const array = [
      "Watch some videos on Data Analysis",
      "Go to the market to get some stuff",
      "Make subscription",
      "Buy some foodstuff",
      "Prepare a meal",
    ];

    array.forEach((item) => {
      UI.createTodo(item);
    });
  }

  static createTodo(item) {
    const list = document.createElement("li");
    list.classList.add("todo__item");
    list.innerHTML = `
      <div class="item__left">
        <input type="checkbox" name="tick" class="item__check" />
        <h4>${item}</h4>
      </div>
      <button class="item__btn">
        <img src='/trash.svg' class='item__btn-img' />
      </button>
    `;
    todoList.appendChild(list);
  }

  static deleteList(event) {
    if (event.classList.contains("item__btn-img")) {
      event.parentElement.parentElement.remove();
    }
  }

  static alertMessage(classname, content) {
    const message = document.createElement("div");
    message.textContent = content;
    message.classList.add(`${classname}`);
    const alerts = document.querySelector(".alerts");
    alerts.appendChild(message);

    setTimeout(() => {
      message.classList.remove(`${classname}`);
    }, 1000);
  }
}

document.addEventListener("DOMContentLoaded", UI.displayTodo);

todoList.addEventListener("click", (e) => {
  UI.deleteList(e.target);
});

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const input = document.querySelector(".input");
  if (input.value) {
    let inputValue = input.value;
    UI.createTodo(inputValue);
    input.value = "";
  } else {
    UI.alertMessage("active", "nopoooo!");
  }
});
