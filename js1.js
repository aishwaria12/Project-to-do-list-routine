let taskList = [];

document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    let taskInput = document.getElementById("task-input");
    let task = taskInput.value.trim();
    if (task !== '') {
        taskList.push(task);
        taskInput.value = '';
        renderTaskList();
    }
}

function renderTaskList() {
    let taskListHTML = '';
    taskList.forEach((task, index) => {
        taskListHTML += `<li>${task} <button onclick="deleteTask(${index})">Delete</button></li>`;
    });
    document.getElementById("task-list").innerHTML = taskListHTML;
}

function deleteTask(index) {
    taskList.splice(index, 1);
    renderTaskList();
}

function saveToLocalStorage() {
    const listItems = document.querySelectorAll('#task-list li');
    let tasks = [];

    listItems.forEach(item => {
        const task = item.firstChild.textContent.trim();
        tasks.push(task);
    });

    // Save the tasks array to localStorage (as a JSON string)
    localStorage.setItem('todo-list', JSON.stringify(tasks));
    alert('To-do list saved to localStorage!');
}

function loadFromLocalStorage() {
    const savedTasks = JSON.parse(localStorage.getItem('todo-list'));
    if (savedTasks) {
        // Render the tasks from localStorage
        taskList = savedTasks;
        renderTaskList();
    }
    
}
