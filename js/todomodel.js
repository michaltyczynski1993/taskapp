export class Todo {
    constructor(taskTitle, description, date, todosList) {
        this.taskTitle = taskTitle;
        this.description = description;
        this.date = date;
        this.iscomplete = false;
        this.id = todosList.length;
    }
}