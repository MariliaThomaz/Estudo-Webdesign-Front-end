(function () {
    "use strict";

    const itemInput = document.getElementById("item-input");
    const todosAddForm = document.getElementById("todo-add");
    const todoList = document.getElementById("todo-list");
    // const lis = todoList.getElementsByTagName("li");

    // estrura de dados para armazenar as tarefas
    let arrTasks = [
        {
            name: "Comprar pão",
            completed: false,
            createdAt: new Date()
        }
    ];
    function generateLiTask(obj, index) {

        const li = document.createElement("li");
        const p = document.createElement("p");
        const checkButton = document.createElement("button");
        const editButton = document.createElement("i");
        const deleteButton = document.createElement("i");
        const editContainer = document.createElement("div");
        const editInput = document.createElement("input");

        li.classList.add("todo-item");

        if (obj.completed) {
            li.classList.add("completed");
        }

        // botão check
        checkButton.className = "button-check";
        checkButton.innerHTML = '<i class="fas fa-check displayNone"></i>';

        if (obj.completed) {
            checkButton.firstElementChild.classList.remove("displayNone");
        }

        // botão editar
        editButton.className = "button-edit";
        editButton.innerHTML = '<i class="fas fa-edit"></i>';

        // botão excluir
        deleteButton.className = "button-delete";
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';

        // container edição
        editContainer.className = "editContainer";
        editContainer.classList.add("hidden");

        editInput.type = "text";
        editInput.className = "editInput";

        const editBtn = document.createElement("button");
        editBtn.className = "editButton";
        editBtn.textContent = "Edit";

        const cancelBtn = document.createElement("button");
        cancelBtn.className = "cancelButton";
        cancelBtn.textContent = "Cancel";

        editContainer.appendChild(editInput);
        editContainer.appendChild(editBtn);
        editContainer.appendChild(cancelBtn);

        // texto da tarefa
        p.classList.add("task-name");
        p.textContent = obj.name;

        // adicionando elementos
        li.appendChild(checkButton);
        li.appendChild(p);
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        li.appendChild(editContainer);

        // botão check
        checkButton.addEventListener("click", function () {

            arrTasks[index].completed = !arrTasks[index].completed;

            renderTasks();

        });

        // botão editar
        editButton.addEventListener("click", function () {

            if (!obj.completed) return;

            editContainer.classList.remove("hidden");
            editInput.value = obj.name;
            editInput.focus();

        });

        // confirmar edição
        editBtn.addEventListener("click", function () {

            arrTasks[index].name = editInput.value;

            renderTasks();
 
        });

        // cancelar edição
        cancelBtn.addEventListener("click", function () {

        editContainer.classList.add("hidden");


        });

        // botão excluir
        deleteButton.addEventListener("click", function () {

            if (!obj.completed) return;

            arrTasks.splice(index, 1);

            renderTasks();

        });

        // desativa botões se não estiver marcado
        if (!obj.completed) {
            editButton.classList.add("disabled");
            deleteButton.classList.add("disabled");
        }

        return li;
    }

    function renderTasks() {

        todoList.innerHTML = "";

        arrTasks.forEach((element, index) => {
            todoList.appendChild(generateLiTask(element, index));
        });

    }
    function addTask(task) {
        arrTasks.push({
            name: task,
            completed: false,
            createdAt: new Date()
        });
    }

    todosAddForm.addEventListener("submit", function (event) {
        event.preventDefault();

        addTask(itemInput.value);
        renderTasks();

        //limpa o campo de input
        itemInput.value = "";
        //coloa o foco no campo de input
        itemInput.focus();

    });

    renderTasks();
    // presiso percorrer os itens da lista para adicionar o evento de click
    //   arrTasks.forEach(element => {
    //addEventLi(element);
    //   });

})();