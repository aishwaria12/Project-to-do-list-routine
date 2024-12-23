const routineForm = document.getElementById("routineForm");
const routineBody = document.getElementById("routineBody");
const taskInput = document.getElementById("task");
const timeInput = document.getElementById("time");
const durationMinutesInput = document.getElementById("duration-minutes");

routineForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the default form submission

    const task = taskInput.value;
    const time = timeInput.value;
    const durationMinutes = durationMinutesInput.value;

    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${task}</td>
        <td>${time}</td>
        <td>${durationMinutes}</td>
        <td><input type="checkbox"> Done</td>
        <td><button class="delete-button">Delete</button></td>
    `;
    
    routineBody.appendChild(row);

    const deleteButton = row.querySelector('.delete-button');
    deleteButton.addEventListener('click', function() {
        // Remove the row from the table body
        routineBody.removeChild(row);
    });

    taskInput.value = "";
    timeInput.value = "";
    durationMinutesInput.value = "";
});
