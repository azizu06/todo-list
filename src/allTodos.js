import { todo } from './todo.js';

class allTodos {
    constructor() {
        this.todos = [];
    }

    addTodo(info) {
        const newTodo = new todo(
            info.title,
            info.description,
            info.dueDate,
            info.priority
        );
        this.todos.push(newTodo);
    }

    removeTodo(info) {
        this.todos = todos.filter(item => item.id !== info.id)
    }

    getTodos = () => this.todos;

    updateTodos(target, newTodo) {
        const targetTodo = this.todos.find(item => item.id === target.id)
        if (targetTodo) targetTodo.update(newTodo);
    }
    
}

export { allTodos }