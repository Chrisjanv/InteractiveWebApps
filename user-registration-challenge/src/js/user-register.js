// // Set up event listener for the register form submit button
// const registerForm = document.getElementById("register-form");
// registerForm.addEventListener("submit", registerUser);

// // Function to handle user registration
// function registerUser(event) {
//     event.preventDefault(); // Prevent form submission

//     // Get form values
//     const firstname = document.getElementById("firstname").value;
//     const lastname = document.getElementById("lastname").value;
//     const username = document.getElementById("username").value;
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     // Create new user entry
//     const userEntry = document.createElement("li");
//     userEntry.classList.add("entry");
//     userEntry.innerHTML = `
//     <span>${username}</span>
//     <span>${firstname}</span>
//     <span>${lastname}</span>
//     <span>${email}</span>
//     <span>${password}</span>
//   `;

//     // Add new user entry to user list
//     const userList = document.getElementById("user-list");
//     userList.appendChild(userEntry);

//     // Reset form fields
//     registerForm.reset();
// }

// // Set up event listener
// // handle form submission
// registerForm.addEventListener('submit', function (e) {
//     e.preventDefault();

//     // get form data
//     const firstName = document.getElementById('firstname').value;
//     const lastName = document.getElementById('lastname').value;
//     const username = document.getElementById('username').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     // create new user entry
//     const userEntry = createUserEntry(username, firstName, lastName, email, password);

//     // add user entry to user list
//     const userList = document.getElementById('user-list');
//     userList.appendChild(userEntry);

//     // clear form inputs
//     registerForm.reset();
// });

// Define User class
class User {
    constructor(firstname, lastname, username, email, password) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // Method to create new user entry
    createUserEntry() {
        const userEntry = document.createElement("li");
        userEntry.classList.add("entry");
        userEntry.innerHTML = `
      <span>${this.username}</span>
      <span>${this.firstname}</span>
      <span>${this.lastname}</span>
      <span>${this.email}</span>
      <span>${this.password}</span>
    `;
        return userEntry;
    }
}

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

    // Create new user
    const user = new User(firstname, lastname, username, email, password);

    // Add new user entry to user list
    const userList = document.getElementById("user-list");
    userList.appendChild(user.createUserEntry());

    // Reset form fields
    registerForm.reset();
}
