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
            const listItems = document.querySelectorAll('#todoList li');
            let content = '';

            listItems.forEach(item => {
                const task = item.childNodes[0].textContent;
                content += task + '\n';
            });

            const blob = new Blob([content], { type: 'text/plain' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'todo-list.txt';
            link.click();
        }
