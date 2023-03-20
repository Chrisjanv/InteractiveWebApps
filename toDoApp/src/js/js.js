class Task {
    constructor(title, description, date_created, date_due, importance) {
        this.title = title;
        this.description = description;
        this.date_created = date_created;
        this.date_due = date_due;
        this.importance = importance;
    }
};

// Initialize first array
const tasks = [];

// Get the form element
const form = document.getElementById('form');

// Add an event listener to the form submit button
form.addEventListener('submit', addNewTask);

// Define the addNewTask function (same as previous code snippet)
function addNewTask(event) {
    event.preventDefault();

    // Get user inputs into javascript
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let date_created = new Date();
    let date_due = document.getElementById('due-date').value;
    let importance = document.getElementById('importance').value;

    // Create a new task object
    const newTask = new Task(title, description, date_created, date_due, importance);

    // Add new task object to the tasks array
    tasks.push(newTask);

    // Clear the form inputs
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('due-date').value = '';
    document.getElementById('importance').value = '';

    // Update the tasks list
    updateTasksList();
}

function updateTasksList() {
    const tasksList = document.getElementById('tasks');
    tasksList.innerHTML = ''; // Clear the current tasks list

    // Loop through the tasks array and create a new list item for each task
    for (const task of tasks) {
        const listItem = document.createElement('li');
        listItem.textContent = task.title + ' , ' + task.description + ' , ' + 
        task.date_due + ' , ' + task.importance;
        tasksList.appendChild(listItem);
    }
}