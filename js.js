const tasks = {
    task1: function() {
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
        console.log('Task 1');
    },

    task2: function() {
        const routineForm = document.getElementById("routineForm");
const routineTable = document.getElementById("routineTable");
const routineBody = document.getElementById("routineBody");
const addTask = document.getElementById("add-task-button");
const taskInput = document.getElementById("task");
const timeInput = document.getElementById("time");
const durationMinutesInput = document.getElementById("duration-minutes");

// Add an event listener to the form submission
routineForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const task = taskInput.value;
  const time = timeInput.value;
  const durationMinutes = durationMinutesInput.value;

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${task}</td>
    <td>${time}</td>
    <td>${durationMinutes}</td>
    <td><input type="checkbox" id="done-checkbox">Done</td>
    <td><button class="delete-button">Delete</button></td>
  `;

  // Append the new row to the table body
  routineBody.appendChild(row);

   // Add an event listener to the delete button
  const deleteButton = row.querySelector('.delete-button');
  deleteButton.addEventListener('click', function(){
    // Remove the row from the table body
    routineBody.removeChild(row);
  });

  // Clear the input fields
  taskInput.value = "";
  timeInput.value = "";
  durationMinutesInput.value = "";
  statusInput.value = "";
  
 });
        console.log('Task 2');
    }
};
tasks.task1();
tasks.task2();
