class Task {
    constructor(title, description, date_created, date_due, importance) {
        this.title = title;
        this.description = description;
        this.date_created = date_created;
        this.date_due = date_due;
        this.importance = importance;
    }
};

// Initialize arrays
const tasks = [];
const completedTasks = [];

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
    updateTasks();
}

function updateTasks() {

    const taskEntries = document.getElementById('taskEntries');
    taskEntries.innerHTML = ''; // Clear the current tasks list

    for (const [index, task] of tasks.entries()) {
        const listItem = document.createElement('p');
        listItem.setAttribute('id', index);
        listItem.innerHTML = '<b>Title:</b> ' + task.title + '<br>' + '<b>Description:</b> ' + task.description + '<br>' + ' <B>Due date:</b> ' +
            task.date_due + '<br>' + '<b>Importance:</b> ' + task.importance + '<br>';
        taskEntries.appendChild(listItem);



        // cOMPLETE TASKS
        const completeButton = document.createElement('button');
        completeButton.style.margin = '1rem';
        completeButton.innerHTML = "FIN";
        listItem.appendChild(completeButton);

        completeButton.addEventListener('click', function () {
            completedTasks.push(index.value);
            // Remove task from the array
            tasks.splice(index, 1);
            // Remove task entry from the UI
            listItem.remove();
        });

        const removeButton = document.createElement('button');
        removeButton.style.margin = '1rem';
        removeButton.textContent = "DEL";
        listItem.appendChild(removeButton);

        // Add event listener to remove button
        removeButton.addEventListener('click', function () {
            // Remove task from the array
            tasks.splice(index, 1);
            // Remove task entry from the UI
            listItem.remove();
        });
    }

    document.getElementById('tasks').style.display = 'block';
    document.getElementById('taskForm').style.display = 'none';
    document.getElementById('completedTasks').style.display = 'none';

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Sort Alphabetical
function sortTasks() {
    tasks.sort((a, b) => a.title.localeCompare(b.title));
    updateTasks();
}

// NavBar

const addTaskNav = document.getElementById("addTaskNav");
const tasksNav = document.getElementById("tasksNav");
const completedNav = document.getElementById("completedNav");


addTaskNav.addEventListener("click", () => {
    document.getElementById('tasks').style.display = 'none';
    document.getElementById('completedTasks').style.display = 'none';
    document.getElementById('taskForm').style.display = 'block';
});

tasksNav.addEventListener("click", () => {
    document.getElementById('tasks').style.display = 'block';
    document.getElementById('completedTasks').style.display = 'none';
    document.getElementById('taskForm').style.display = 'none';
});

completedNav.addEventListener("click", () => {
    document.getElementById('tasks').style.display = 'none';
    document.getElementById('completedTasks').style.display = 'block';
    document.getElementById('taskForm').style.display = 'none';

    const completedTasksDiv = document.getElementById('completedTasks');
    completedTasksDiv.innerHTML = ''; // Clear the current tasks list

    for (const completedTask of completedTasks) {
        const listItem = document.createElement('p');
        listItem.textContent = 'Title: ' + completedTasks.title + ' Description: ' + completedTasks.description + ' Due date: ' +
            completedTasks.date_due + ' Importance: ' + completedTasks.importance;
        completedTasksDiv.appendChild(listItem);
    }
});