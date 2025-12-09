import { allProjects } from "../logic/allProjects.js";
import { handleEditTodo, handleDeleteTodo, changeTodoStatus } from "./display.js";
import { checkIcon, editIcon, deleteIcon } from "./icons.js";

function loadTodos(tProject) {
    const mainContainer = document.querySelector(".todos");
    mainContainer.innerHTML = "";
    const project = allProjects.findProject(tProject);
    if(!project) return;

    const todos = project.getTodos();
    todos.forEach(todo => {
        const container = document.createElement("div");
        const checkBox = document.createElement("button");
        const icons = document.createElement("div");
        const todoName = document.createElement("div");
        const row1 = document.createElement("div");
        const row2 = document.createElement("div");
        const row3 = document.createElement("div");
        const title = document.createElement("h3");
        const date = document.createElement("p");
        const desc = document.createElement("p");

        const editBtn = document.createElement("button");
        editBtn.innerHTML = editIcon
        editBtn.classList.add("icon");
        editBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            const todo = e.target.closest(".todo").dataset.id;
            handleEditTodo(tProject, todo);
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = deleteIcon
        deleteBtn.classList.add("icon");
        deleteBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            const todo = e.target.closest(".todo").dataset.id;
            handleDeleteTodo(tProject, todo);
        });

        checkBox.addEventListener("click", (e) => {
            e.stopPropagation();
            const todo = e.target.closest(".todo").dataset.id;
            changeTodoStatus(tProject, todo);
            const project = allProjects.findProject(tProject);
            const curTodo = project.findTodo(todo);
            checkBox.innerHTML = (curTodo.status) ? "" : checkIcon;
            title.classList.toggle("striked");
        });

        container.addEventListener("click", (e) => {
            const todo = e.target.closest(".todo");
            if(!todo.contains(row3)){
                todo.appendChild(row3);
            }
            else {
                row3.remove();
            }
        });

        title.innerText = todo.title;
        date.innerText = todo.dueDate;
        desc.innerText = todo.description;
        container.dataset.id = todo.id;
        todoName.appendChild(checkBox);
        todoName.appendChild(title);
        icons.appendChild(editBtn);
        icons.appendChild(deleteBtn);
        row1.appendChild(todoName);
        row1.appendChild(icons);
        row2.appendChild(date);
        row3.appendChild(desc);
        row1.classList.add("todoRow");
        row2.classList.add("todoRow");
        row3.classList.add("extraRow");
        checkBox.classList.add("icon");
        icons.classList.add("containerIcon");
        todoName.classList.add("todoInfo");
        container.classList.add("todo");
        container.appendChild(row1);
        container.appendChild(row2);
        mainContainer.append(container);
    });
} 

export { loadTodos };