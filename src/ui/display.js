import { set } from "date-fns/fp";
import { allProjects } from "../logic/allProjects.js";
import { projectForm, todoForm } from "./forms.js";
import { loadProjects } from './projectRender.js';
import { loadTodos } from "./todoRender.js";
import { upTodo, upProject } from "./updateForm.js";

function setup() {
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
    setTitle(project.id);
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
    });
}

function handleEditTodo(projectID, todoID){
    const project = allProjects.findProject(projectID); 
    upTodo(projectID, todoID, (newData) => {
        project.updateTodos(todoID, newData);
        loadTodos(projectID);
    });
}

function handleAddTodo(projectID){
    const project = allProjects.findProject(projectID); 
    todoForm((newData) => {
        project.addTodo(newData);
        loadTodos(projectID);
    });
}

function handleAddProject(){
    projectForm((newData) => {
        allProjects.addProject(newData);
        loadProjects();
        const project = allProjects.findActive();
        setTitle(project.id);
        loadTodos(project.id);
    });
}

function handleDeleteTodo(projectID, todoID){
    const project = allProjects.findProject(projectID); 
    project.removeTodo(todoID);
    loadTodos(projectID);
}

function handleDeleteProject(projectID){
    allProjects.removeProject(projectID);
    loadProjects();
    loadTodos(projectID);
    setTitle(projectID);
}

function changeTodoStatus(tProject, tTodo) {
    const targetProject = allProjects.findProject(tProject);
    const targetTodo = targetProject.findTodo(tTodo);
    targetTodo.toggle();
}

export { setup, setTitle, handleEditProject, handleEditTodo, handleAddProject, handleAddTodo, handleDeleteProject, handleDeleteTodo, changeTodoStatus };
