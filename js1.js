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

function saveToFile() {
    setTimeout(() => {
        const listItems = document.querySelectorAll('#task-list li'); 
        let tasks = [];

        listItems.forEach(item => {
            const task = item.firstChild.textContent.trim();
            tasks.push(task); 
        });

        if (tasks.length === 0) {
            alert("No tasks to save.");
            return; 
        }

        const content = tasks.join('\n'); 

        // Create the Blob for saving
        const blob = new Blob([content], { type: 'text/plain' });
        const link = document.createElement('a'); // Create a download link
        link.href = URL.createObjectURL(blob); // Create a URL for the Blob
        link.download = 'todo-list.txt'; // Set the file name
        link.click(); // Trigger the download

        // Clean up the URL object
        URL.revokeObjectURL(link.href);
    }, 100); // Set a small timeout to prevent UI blocking
}
