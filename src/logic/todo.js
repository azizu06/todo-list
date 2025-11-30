class todo {
    constructor(title, description, dueDate, priority) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = false;
    }

    toggle() {
        this.status = !this.status;
    }

    update(newTodo) {
        if(newTodo.title !== undefined) this.title = newTodo.title;
        if(newTodo.description !== undefined) this.description = newTodo.description;
        if(newTodo.dueDate !== undefined) this.dueDate = newTodo.dueDate;
        if(newTodo.priority !== undefined) this.priority = newTodo.priority;
    }
}

export { todo };
