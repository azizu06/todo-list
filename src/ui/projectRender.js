import { allProjects } from "./logic/allProjects.js";
import { upProject } from "./updateForm.js";

function newProject(name) {
    allProjects.addProject(name);
}

function editProject(tProject, name) {
    const targetProject = allProjects.findProject(tProject);
    targetProject.update(name);
}

function deleteProject(tProject) {
    const targetProject = allProjects.findProject(tProject);
    allProjects.removeProject(targetProject);
}

function loadProjects() {
    const projects = allProjects.getProjects();
    const mainContainer = document.querySelector(".projects");
    mainContainer.innerHTML = "";

    projects.forEach(project => {
        const container = document.createElement("div");
        const title = document.createElement("h3");

        const editIcon = document.createElement("i");
        editIcon.classList.add("mdi", "mdi-pencil-box-outline", "editDelete");
        editIcon.addEventListener("click", (e) => {
            const project = e.target.closest(".project");
            upProject(project);
        });

        const deleteIcon = document.createElement("i");
        deleteIcon.classList.add("mdi", "mdi-delete-outline", "editDelete");
        deleteIcon.addEventListener("click", (e) => {
            const project = e.target.closest(".project");
            deleteProject(project);
        });

        title.innerText = project.name;
        container.dataset.id = project.id;
        container.appendchild(title);
        container.appendchild(editIcon);
        container.appendchild(deleteIcon);
        container.classList.add("project");
        mainContainer.append(container);
    });
}

export { newProject, editProject, deleteProject, loadProjects };
