import { todo } from "./todo.js";

class project {
    constructor(name) {
        this.project = [];
        this.name = name;
        this.id = crypto.randomUUID();
    }

    update(newInfo) {
        if(newInfo.name !== undefined) this.name = newInfo.name;
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
        this.project = project.filter(item => item.id !== info.id)
    }

    getTodos = () => this.project;

    updateTodos(target, newTodo) {
        const targetTodo = this.project.find(item => item.id === target.id)
        if (targetTodo) targetTodo.update(newTodo);
    }
}

export { project }