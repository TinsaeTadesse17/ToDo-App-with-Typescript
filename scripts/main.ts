interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

let todos: Todo[] = [];
let nextId = 1;

const taskInput = document.querySelector('#new-task-input') as HTMLInputElement;
const addTaskButton = document.querySelector('#add-task-button') as HTMLButtonElement;
const taskList = document.querySelector('#taskList') as HTMLUListElement; 

// Function to add a new task
function addTask(title: string): void {
  const newTodo: Todo = {
    id: nextId++,
    title: title,
    completed: false
  };
  todos.push(newTodo);
  renderTodoList(); 
}

// Function to delete a task
function deleteTask(id: number): void {
  todos = todos.filter(todo => todo.id !== id);
  renderTodoList(); 
}

// Function to edit a task
function editTask(id: number, newTitle: string): void {
  const todoIndex = todos.findIndex(todo => todo.id === id);
  if (todoIndex !== -1) {
    todos[todoIndex].title = newTitle;
    renderTodoList();
  }
}

// Function to render todo list
function renderTodoList(): void {
  taskList.innerHTML = ''; 

  todos.forEach(todo => {
    const newTask = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.textContent = todo.title;
    taskSpan.addEventListener('click', () => {
      const editedTaskText = prompt('Edit your task:', taskSpan.textContent as string);
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
