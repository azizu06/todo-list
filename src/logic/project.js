import { todo } from "./todo.js";
import { compareAsc, parseISO } from "date-fns";
class project {
    constructor(name) {
        this.project = [];
        this.name = name;
        this.id = crypto.randomUUID();
        this.active = true;
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

    removeTodo(id) {
        this.project = this.project.filter(item => item.id !== id)
    }

    getTodos = () => this.project.sort((a, b) => compareAsc(parseISO(a.dueDate), parseISO(b.dueDate)));

    updateTodos(id, newTodo) {
        const targetTodo = this.project.find(item => item.id === id);
        if (targetTodo) targetTodo.update(newTodo);
    }

    findTodo(id) {
        const targetTodo = this.project.find(item => item.id === id);
        return targetTodo;
    }
}

export { project };