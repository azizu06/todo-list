import { allProjects } from "../logic/allProjects";
import { closeIcon } from "./icons.js";

function upProject(project, onSubmit) {
    const dialog = document.createElement("dialog");
    dialog.classList.add("projectDialog");

    const header = document.createElement("div");
    header.classList.add("projectHeader");
    const title = document.createElement("h1");
    title.innerText = "New Project";
    header.appendChild(title);

    const closeBtn = document.createElement("button");
    closeBtn.classList.add("icon");
    closeBtn.innerHTML = closeIcon;
    closeBtn.addEventListener("click", () => {
        dialog.close();
    });
    header.appendChild(closeBtn);
    dialog.appendChild(header);

    const form = document.createElement("form");
    form.classList.add("projectForm");
    form.method = "dialog";

    const input1 = document.createElement("div");
    input1.classList.add("projectInput");

    const label = document.createElement("label");
    label.innerText = 'Title'
    input1.appendChild(label);

    const inputName = document.createElement("input");
    inputName.type = 'text';
    inputName.required = true;
    inputName.placeholder = "Enter project name";
    inputName.value = project.name;
    input1.appendChild(inputName);
    form.appendChild(input1);

    const createBtn = document.createElement("button");
    createBtn.innerHTML = "Update Project";
    createBtn.type = "submit";
    createBtn.classList.add("addItem");
    createBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const newName = inputName.value;
        onSubmit(newName);
        dialog.close();
    });
    form.appendChild(createBtn);
    dialog.append(form);
    document.body.appendChild(dialog);
    dialog.showModal();
}

function upTodo(projectID, todoID, onSubmit) {
    const project = allProjects.findProject(projectID);
    const todo = project.findTodo(todoID);
    const dialog = document.createElement("dialog");
    dialog.classList.add("todoDialog");

    const header = document.createElement("div");
    header.classList.add("todoHeader");
    const title = document.createElement("h1");
    title.innerText = "New Todo";
    header.appendChild(title);

    const closeBtn = document.createElement("button");
    closeBtn.classList.add("icon");
    closeBtn.innerHTML = closeIcon;
    closeBtn.addEventListener("click", () => {
        dialog.close();
    });
    header.appendChild(closeBtn);
    dialog.appendChild(header);

    const form = document.createElement("form");
    form.classList.add("todoForm");
    form.method = "dialog";

    const input1 = document.createElement("div");
    input1.classList.add("todoInput");

    const labelName = document.createElement("label");
    labelName.innerText = 'Title';
    input1.appendChild(labelName);

    const inputName = document.createElement("input");
    inputName.type = 'text';
    inputName.required = true;
    inputName.placeholder = "Enter todo name";
    inputName.value = todo.title;
    input1.appendChild(inputName);
    form.appendChild(input1);

    const input2 = document.createElement("div");
    input2.classList.add("todoInput");

    const labelDesc = document.createElement("label");
    labelDesc.innerText = 'Description';
    input2.appendChild(labelDesc);

    const inputDesc = document.createElement("textarea");
    inputDesc.placeholder = "Enter description";
    inputDesc.value = todo.description;
    input2.appendChild(inputDesc);
    form.appendChild(input2);

    const input3 = document.createElement("div");
    input3.classList.add("todoInput");

    const labelDate = document.createElement("label");
    labelDate.innerText = 'Due Date';
    input3.appendChild(labelDate);

    const inputDate = document.createElement("input");
    inputDate.type = 'date';
    inputDate.required = true;
    inputDate.value = todo.dueDate;
    input3.appendChild(inputDate);
    form.appendChild(input3);

    const input4 = document.createElement("div");
    input4.classList.add("todoInput");

    const labelPriority = document.createElement("label");
    labelPriority.innerText = 'Priority';
    input4.appendChild(labelPriority);

    const inputPriority = document.createElement("select");
    inputPriority.value = todo.priority;
    inputPriority.required = true;

    const optionLow = document.createElement("option");
    optionLow.innerText = "Low"
    inputPriority.appendChild(optionLow);

    const optionMedium = document.createElement("option");
    optionMedium.innerText = "Medium";
    inputPriority.appendChild(optionMedium);

    const optionHigh = document.createElement("option");
    optionHigh.innerText = "High";
    inputPriority.appendChild(optionHigh);

    input4.appendChild(inputPriority);
    form.appendChild(input4);

    const createBtn = document.createElement("button");
    createBtn.innerHTML = "Update Todo";
    createBtn.type = "submit";
    createBtn.classList.add("addItem");
    createBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const newTodo = {
            title: inputName.value,
            description: inputDesc.value,
            dueDate: inputDate.value,
            priority: inputPriority.value
        };
        onSubmit(newTodo);
        dialog.close();
    });
    form.appendChild(createBtn);
    dialog.append(form);
    document.body.appendChild(dialog);
    dialog.showModal();
}

export { upProject, upTodo };