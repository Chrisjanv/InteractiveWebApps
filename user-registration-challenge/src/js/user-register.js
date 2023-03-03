// Set up event listener for the register form submit button
const registerForm = document.getElementById("register-form");
registerForm.addEventListener("submit", registerUser);

// Function to handle user registration
function registerUser(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Create new user entry
    const userEntry = document.createElement("li");
    userEntry.classList.add("entry");
    userEntry.innerHTML = `
    <span>${username}</span>
    <span>${firstname}</span>
    <span>${lastname}</span>
    <span>${email}</span>
    <span>${password}</span>
  `;

    // Add new user entry to user list
    const userList = document.getElementById("user-list");
    userList.appendChild(userEntry);

    // Reset form fields
    registerForm.reset();
}

// Set up event listener
// handle form submission
registerForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // get form data
    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // create new user entry
    const userEntry = createUserEntry(username, firstName, lastName, email, password);

    // add user entry to user list
    const userList = document.getElementById('user-list');
    userList.appendChild(userEntry);

    // clear form inputs
    registerForm.reset();
});

// helper function to create new user entry
function createUserEntry(username, firstName, lastName, email, password) {
    const userEntry = document.createElement('li');
    userEntry.classList.add('entry');

    const usernameSpan = document.createElement('span');
    usernameSpan.textContent = username;

    const firstNameSpan = document.createElement('span');
    firstNameSpan.textContent = firstName;

    const lastNameSpan = document.createElement('span');
    lastNameSpan.textContent = lastName;

    const emailSpan = document.createElement('span');
    emailSpan.textContent = email;

    const passwordSpan = document.createElement('span');
    passwordSpan.textContent = password;

    userEntry.appendChild(usernameSpan);
    userEntry.appendChild(firstNameSpan);
    userEntry.appendChild(lastNameSpan);
    userEntry.appendChild(emailSpan);
    userEntry.appendChild(passwordSpan);

    return userEntry;
}
