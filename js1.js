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

// Save the list to a file
function saveToFile() {
    const listItems = document.querySelectorAll('#task-list li'); // Select the list items
    let content = '';

    listItems.forEach(item => {
        const task = item.firstChild.textContent.trim(); // Get the task text from the first child node (which is the task itself)
        content += task + '\n'; // Add task to content
    });

    const blob = new Blob([content], { type: 'text/plain' }); // Create Blob with content
    const link = document.createElement('a'); // Create a download link
    link.href = URL.createObjectURL(blob); // Create a URL for the Blob
    link.download = 'todo-list.txt'; // Set the file name
    link.click(); // Trigger the download
}
