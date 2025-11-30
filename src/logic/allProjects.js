import { project } from "../project.js";

let projects = []

class allProjects {
    addProject(name){
        const newProject = new project(name);
        projects.push(newProject);
    }

    removeProject(info){
        projects = projects.filter(item => item.id !== info.dataset.id)
    }

    updateProject(target, newInfo){
        const targetProject = projects.find(item => item.id === target.dataset.id);
        if(targetProject) targetProject.update(newInfo);
    }

    findProject(target) {
        const targetProject = projects.find(item => item.id === target.dataset.id);
        return targetProject;
    }

    getProjects = () => projects;
}

export { allProjects };