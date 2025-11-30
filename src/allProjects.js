import { project } from "./project.js";

class allProjects {
    constructor() {
        this.allProjects = [];
    }

    addProject(name){
        const newProject = new project(name);
        this.allProjects.push(newProject);
    }

    removeProject(info){
        this.allProjects = this.allProjects.filter(item => item.id !== info.dataset.id)
    }

    updateProject(target, newInfo){
        const targetProject = this.allProjects.find(item => item.id === target.dataset.id);
        if(targetProject) targetProject.update(newInfo);
    }

    findProject(target) {
        const targetProject = this.project.find(item => item.id === target.dataset.id);
        return targetProject;
    }

    getProjects = () => this.allProjects;
}

export { allProjects };