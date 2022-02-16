import TaskList from "./todos.js";

class Todo {
    constructor() {
        this.todoList = new TaskList();
        document.getElementById('data').addEventListener("keyup", (event) => (event.key == 'Enter') ? this.addTask() : "")
        document.getElementById('all-button').addEventListener('click', this.filterAll.bind(this));
        document.getElementById('active-button').addEventListener('click', this.filterActive.bind(this));
        document.getElementById('completed-button').addEventListener('click', this.filterCompleted.bind(this));
        document.querySelector('.action').addEventListener('click', this.addTask.bind(this));
    }
    
    addTask() {
        let txtbox = document.getElementById('data');
        this.todoList.addTask(txtbox.value);
        txtbox.value = "";
    }
    filterAll() {
        this.todoList.renderList()
    }
    filterActive() {
        this.todoList.renderList("ACTIVE")
    }
    filterCompleted() {
        this.todoList.renderList("COMPLETED")
    }
}
let todo = new Todo();
