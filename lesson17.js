document.addEventListener("DOMContentLoaded", function() {
    const todoList = document.getElementById("todo-list");
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("add-task");
    const clearListButton = document.getElementById("clear-list");

    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    for (const task of savedTasks) {
        addTaskToList(task);
    }

    function addTaskToList(taskText) {
        const listItem = document.createElement("li");
        listItem.textContent = taskText;
        todoList.appendChild(listItem);
    }

    addTaskButton.addEventListener("click", function() {
        const taskText = taskInput.value;
        if (taskText) {
            addTaskToList(taskText);
            taskInput.value = "";
            savedTasks.push(taskText);
            localStorage.setItem("tasks", JSON.stringify(savedTasks));
        }
    });

    clearListButton.addEventListener("click", function() {
        while (todoList.firstChild) {
            todoList.removeChild(todoList.firstChild);
        }
        savedTasks.length = 0;
        localStorage.removeItem("tasks");
    });
});
