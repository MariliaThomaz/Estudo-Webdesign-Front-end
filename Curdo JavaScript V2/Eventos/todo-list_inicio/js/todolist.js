(function () {
    "use strict";

    const itemInput = document.getElementById("item-input");
    const todosAddForm = document.getElementById("todo-add");
    const todoList = document.getElementById("todo-list");
    const lis = todoList.getElementsByTagName("li");

    function addEventLi(li) {
        li.addEventListener("click", function () {
             console.log(this);
            console.log(this.textContent);
            console.log(this.innerText);
            console.log(this.innerHTML);
            console.log(this.classList);
            console.log(this.outerHTML);
            this.classList.toggle("completed");
        });

    }

    function addTask(task) {
        const li = document.createElement("li");
        li.classList.add("todo-item");
        const p = document.createElement("p");
        p.classList.add("task-name");
        p.textContent = task;
        li.appendChild(p);
        todoList.appendChild(li);

        addEventLi(li);

    }

    todosAddForm.addEventListener("submit", function (event) {
        event.preventDefault();

        addTask(itemInput.value);


        //limpa o campo de input
        itemInput.value = "";
        //coloa o foco no campo de input
        itemInput.focus();

    });
    // presiso percorrer os itens da lista para adicionar o evento de click
    [...lis].forEach(element => {
        addEventLi(element);
    });

})();