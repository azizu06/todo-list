import { project } from "./project.js";

class allProjects {
    constructor() {
        this.allProjects = [];
    }

    addProject(info){
        const newProject = new project(info.name);
        this.allProjects.push(newProject);
    }

    removeProject(info){
        this.allProjects = this.allProjects.filter(item => item.id !== info.id)
    }

    updateProject(target, newInfo){
        const targetProject = this.allProjects.find(item => item.id === target.id);
        if(targetProject) targetProject.update(newInfo);
    }

    getProjects = () => this.allProjects;
}

export { allProjects }