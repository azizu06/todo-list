import { allProjects } from "../logic/allProjects.js";
import { projectForm, todoForm } from "./forms.js";
import { loadProjects } from './projectRender.js';
import { loadTodos } from "./todoRender.js";
import { upTodo, upProject } from "./updateForm.js";
import { saveAll, loadAll } from "../logic/storage.js";

function setup() {
    const rawProjects = loadAll();
    if(!rawProjects) allProjects.addProject("Default");
    rawProjects.forEach(item => {
        allProjects.restoreProject(item.name, item.id, item.active);
        const project = allProjects.findProject(item.id);
        const rawTodos = item.project;
        rawTodos.forEach(todo => {
            project.restoreTodo(todo);
        });
    });
    const plusProject = document.querySelector('.addProject');
    const plusTodo = document.querySelector('.addTodo');

    plusTodo.addEventListener("click", () => {
        const project = allProjects.findActive();
        if(!project) return;
        handleAddTodo(project.id);
    })
    plusProject.addEventListener("click", handleAddProject);
    loadProjects();
    const project = allProjects.findActive();
    if(project) setTitle(project.id);
    if(project) loadTodos(project.id);
}

function setTitle(id){
    const projectTitle = document.querySelector(".currentProject");
    const project = allProjects.findProject(id);
    if(!project){
        projectTitle.innerText = "Welcome";
    } 
    else{
        projectTitle.innerText = project.name;
    }
}

function handleEditProject(projectID){
    const project = allProjects.findProject(projectID);
    upProject(project, (newData) => {
        project.update(newData);
        loadProjects();
        setTitle(projectID);
        saveAll(allProjects.getProjects());
    });
}

function handleEditTodo(projectID, todoID){
    const project = allProjects.findProject(projectID); 
    upTodo(projectID, todoID, (newData) => {
        project.updateTodos(todoID, newData);
        loadTodos(projectID);
        saveAll(allProjects.getProjects());
    });
}

function handleAddTodo(projectID){
    const project = allProjects.findProject(projectID); 
    todoForm((newData) => {
        project.addTodo(newData);
        loadTodos(projectID);
        saveAll(allProjects.getProjects());
    });
}

function handleAddProject(){
    projectForm((newData) => {
        allProjects.addProject(newData);
        loadProjects();
        const project = allProjects.findActive();
        setTitle(project.id);
        loadTodos(project.id);
        saveAll(allProjects.getProjects());
    });
}

function handleDeleteTodo(projectID, todoID){
    const project = allProjects.findProject(projectID); 
    project.removeTodo(todoID);
    loadTodos(projectID);
    saveAll(allProjects.getProjects());
}

function handleDeleteProject(projectID){
    allProjects.removeProject(projectID);
    loadProjects();
    loadTodos(projectID);
    setTitle(projectID);
    saveAll(allProjects.getProjects());
}

function changeTodoStatus(tProject, tTodo) {
    const targetProject = allProjects.findProject(tProject);
    const targetTodo = targetProject.findTodo(tTodo);
    targetTodo.toggle();
    saveAll(allProjects.getProjects());
}

export { setup, setTitle, handleEditProject, handleEditTodo, handleAddProject, handleAddTodo, handleDeleteProject, handleDeleteTodo, changeTodoStatus };
