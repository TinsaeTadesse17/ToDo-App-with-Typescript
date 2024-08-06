"use strict";
let todos = [];
let nextId = 1;
const taskInput = document.querySelector('#new-task-input');
const addTaskButton = document.querySelector('#add-task-button');
const taskList = document.querySelector('#taskList');
function addTask(title) {
    const newTodo = {
        id: nextId++,
        title: title,
        completed: false
    };
    todos.push(newTodo);
    renderTodoList();
}
function deleteTask(id) {
    todos = todos.filter(todo => todo.id !== id);
    renderTodoList();
}
function editTask(id, newTitle) {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    if (todoIndex !== -1) {
        todos[todoIndex].title = newTitle;
        renderTodoList();
    }
}
function renderTodoList() {
    taskList.innerHTML = '';
    todos.forEach(todo => {
        const newTask = document.createElement('li');
        const taskSpan = document.createElement('span');
        taskSpan.textContent = todo.title;
        taskSpan.addEventListener('click', () => {
            const editedTaskText = prompt('Edit your task:', taskSpan.textContent);
            if (editedTaskText !== null) {
                editTask(todo.id, editedTaskText.trim());
            }
        });
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Done';
        deleteButton.addEventListener('click', () => {
            deleteTask(todo.id);
        });
        newTask.appendChild(taskSpan);
        newTask.appendChild(deleteButton);
        taskList.appendChild(newTask);
    });
}
addTaskButton.addEventListener('click', () => {
    const newTaskText = taskInput.value.trim();
    if (newTaskText !== "") {
        addTask(newTaskText);
        taskInput.value = "";
    }
});
renderTodoList();
//# sourceMappingURL=main.js.map