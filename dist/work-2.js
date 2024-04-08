"use strict";
class TodoList {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
        this.displayItems();
    }
    displayItems() {
        const taskListElement = document.getElementById('taskList');
        if (taskListElement) {
            taskListElement.innerHTML = '';
            this.items.forEach((item, index) => {
                const listItem = document.createElement('div');
                listItem.textContent = `${index + 1}. ${item}`;
                taskListElement.appendChild(listItem);
            });
        }
    }
}
const todoList = new TodoList();
function addTask() {
    const taskInput = document.getElementById('task');
    const task = taskInput.value.trim();
    if (task !== '') {
        todoList.addItem(task);
        taskInput.value = '';
    }
}
