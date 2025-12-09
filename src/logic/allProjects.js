import { project } from "./project.js";

let projects = []

class AllProjects {
    addProject(name){
        const newProject = new project(name);
        const activeProject = projects.find(item => item.active === true);
        if(activeProject) activeProject.active = false;
        newProject.active = true;
        projects.push(newProject);
    }

    restoreProject(name, id, status){
        const newProject = new project(name, id, status);
        projects.push(newProject);
    }

    removeProject(id){
        projects = projects.filter(item => item.id !== id)
    }

    updateProject(newName, id){
        const targetProject = projects.find(item => item.id === id);
        if(targetProject) targetProject.update(newName);
    }

    findProject(id) {
        const targetProject = projects.find(item => item.id === id);
        return targetProject;
    }

    setActive(id) {
        const project = projects.find(item => item.active === true);
        if(project) project.active = false;
        const newProject = projects.find(item => item.id === id);
        newProject.active = true;
    }

    findActive(){
        const project = projects.find(item => item.active === true);
        return project;
    }

    getProjects = () => projects;
}

const allProjects = new AllProjects();

export { allProjects };