import { closeIcon } from "./icons.js";
function projectForm(onSubmit) {
    const dialog = document.createElement("dialog");
    dialog.classList.add("projectDialog");

    const header = document.createElement("div");
    header.classList.add("projectHeader");
    const title = document.createElement("h1");
    title.innerText = "New Project";
    header.appendChild(title);

    const closeBtn = document.createElement("button");
    closeBtn.innerHTML = closeIcon
    closeBtn.classList.add("icon");
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
    input1.appendChild(inputName);
    form.appendChild(input1);

    const createBtn = document.createElement("button");
    createBtn.innerHTML = "Create Project";
    createBtn.type = "submit";
    createBtn.classList.add("addItem");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = inputName.value;
        onSubmit(name);
        dialog.close();
    });
    form.appendChild(createBtn);
    dialog.append(form);
    document.body.appendChild(dialog);
    dialog.showModal();
}

function todoForm(onSubmit) {
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
    input1.appendChild(inputName);
    form.appendChild(input1);

    const input2 = document.createElement("div");
    input2.classList.add("todoInput");

    const labelDesc = document.createElement("label");
    labelDesc.innerText = 'Description';
    input2.appendChild(labelDesc);

    const inputDesc = document.createElement("textarea");
    inputDesc.placeholder = "Enter description";
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
    input3.appendChild(inputDate);
    form.appendChild(input3);

    const input4 = document.createElement("div");
    input4.classList.add("todoInput");

    const labelPriority = document.createElement("label");
    labelPriority.innerText = 'Priority';
    input4.appendChild(labelPriority);

    const inputPriority = document.createElement("select");
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
    createBtn.innerHTML = "Create Todo";
    createBtn.type = "submit";
    createBtn.classList.add("addItem");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const todo = {
            title: inputName.value,
            dueDate: inputDate.value,
            description: inputDesc.value,
            priority: inputPriority.value
        }
        onSubmit(todo);
        dialog.close();
    })
    form.appendChild(createBtn);
    dialog.append(form);
    document.body.appendChild(dialog);
    dialog.showModal();
}

export { projectForm, todoForm };