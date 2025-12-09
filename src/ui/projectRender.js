import { allProjects } from "../logic/allProjects.js";
import { handleEditProject, handleDeleteProject, setTitle } from "./display.js";
import { loadTodos } from "./todoRender.js";
import { editIcon, deleteIcon } from "./icons.js";

function loadProjects() {
    const projects = allProjects.getProjects();
    const mainContainer = document.querySelector(".projects");
    mainContainer.innerHTML = "";

    projects.forEach(project => {
        const container = document.createElement("div");
        const containerIcon = document.createElement("div");
        const title = document.createElement("h3");

        const editBtn = document.createElement("button");
        editBtn.innerHTML = editIcon
        editBtn.classList.add("icon");
        editBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            const project = e.target.closest(".project").dataset.id;
            handleEditProject(project);
            setTitle(project);
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = deleteIcon
        deleteBtn.classList.add("icon");
        deleteBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            const id = e.target.closest(".project").dataset.id;
            handleDeleteProject(id);
        });

        container.dataset.id = project.id;
        container.addEventListener("click", () => {
            setTitle(container.dataset.id);
            allProjects.setActive(container.dataset.id);
            loadTodos(container.dataset.id);
        });

        title.innerText = project.name;
        container.appendChild(title);
        containerIcon.appendChild(editBtn);
        containerIcon.appendChild(deleteBtn);
        container.appendChild(containerIcon)
        container.classList.add("project");
        containerIcon.classList.add("containerIcon");
        mainContainer.append(container);
    });
}

export { loadProjects };
