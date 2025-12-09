import { todo } from "./todo.js";
import { compareAsc, parseISO } from "date-fns";
class project {
    constructor(name, id, status) {
        this.project = [];
        this.name = name;
        this.id = (id) ? id : crypto.randomUUID();
        this.active = (status) ? status : false;
    }

    update(newName) {
        if(newName !== undefined) this.name = newName;
    }

    editID(id){
        this.id = id;
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

    restoreTodo(info){
        const newTodo = new todo(
            info.title,
            info.description,
            info.dueDate,
            info.priority,
            info.status,
            info.id,
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