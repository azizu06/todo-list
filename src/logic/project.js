import { todo } from "./todo.js";

class project {
    constructor(name) {
        this.project = [];
        this.name = name;
        this.id = crypto.randomUUID();
    }

    update(newName) {
        if(newName !== undefined) this.name = newName;
    }

    addTodo(info) {
        const newTodo = new todo(
            info.title,
            info.description,
            info.dueDate,
            info.priority
        );
        this.project.push(newTodo);
    }

    removeTodo(info) {
        this.project = project.filter(item => item.id !== info.dataset.id)
    }

    getTodos = () => this.project;

    updateTodos(target, newTodo) {
        const targetTodo = this.project.find(item => item.id === target.dataset.id);
        if (targetTodo) targetTodo.update(newTodo);
    }

    findTodo(target) {
        const targetTodo = this.project.find(item => item.id === target.dataset.id);
        return targetTodo;
    }
}

export { project };