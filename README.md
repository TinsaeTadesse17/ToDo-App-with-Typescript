## Todo List App (TypeScript)

This is a basic Todo List application built with TypeScript. It allows users to add, delete, and edit tasks. It's a great starting point for learning about building web applications with TypeScript!

## Features

- Add new tasks
- Edit existing tasks
- Delete tasks

## Getting Started

To get a local copy up and running, follow these steps.

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/TinsaeTadesse17/ToDo-App-with-Typescript.git
    ```
2. Navigate to the project directory:
    ```sh
    cd ToDo-App-with-Typescript
    ```

### Usage

1. Open `index.html` in your web browser.
2. Enter a task in the input field and click the "Add Task" button.
3. To edit a task, click on the task text. A prompt will appear allowing you to edit the task.
4. To delete a task, click the "Done" button next to the task.


### Key Components

- interface Todo:  Defines the structure of a Todo item with id, title, and completed properties.
- todos array:  Stores the list of Todo items.
- nextId variable:  Used to generate unique IDs for new tasks.
- addTask function:  Adds a new task to the todos array and updates the UI.
- deleteTask function:  Removes a task from the todos array and updates the UI.
- editTask function:  Updates the title of a task in the todos array and updates the UI.
- renderTodoList function:  Renders the current todos array in the HTML list.

### Screenshots

Main Interface

<img width="869" alt="screenshot #1" src="https://github.com/user-attachments/assets/302fba1c-42b1-470d-8e7a-ca88f18e3cee">

Adding a Task

<img width="869" alt="screenshot#2" src="https://github.com/user-attachments/assets/25fe9a47-bf3f-4bb6-b065-5181466c5fca">

Editing a Task

<img width="868" alt="screenshot #3" src="https://github.com/user-attachments/assets/b079113d-d5de-4654-9efb-f2a31b1248e3">
