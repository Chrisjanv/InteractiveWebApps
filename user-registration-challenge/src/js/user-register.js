




























// // Get references to HTML elements
// const usersTab = document.querySelector('.users');
// const registerTab = document.querySelector('.register');
// const userList = document.querySelector('#user-list');
// const registerForm = document.querySelector('#register-form');
// const usersTabButton = document.querySelector('#register-tab-button');
// const registerTabButton = document.querySelector('#users-tab-button');

// // Add event listeners to tab buttons
// usersTabButton.addEventListener('click', () => {
//     usersTab.style.display = 'block';
//     registerTab.style.display = 'none';
// });

// registerTabButton.addEventListener('click', () => {
//     registerTab.style.display = 'block';
//     usersTab.style.display = 'none';
// });

// // Initialize empty array to store user data
// const users = [];

// // Create user object and add to users array
// function createUser() {
//     const newUser = {
//         firstname: document.querySelector('#firstname').value,
//         lastname: document.querySelector('#lastname').value,
//         username: document.querySelector('#username').value,
//         email: document.querySelector('#email').value,
//         password: document.querySelector('#password').value,
//     };

//     users.push(newUser);

//     // Switch to users tab after user has been added
//     usersTab.style.display = 'block';
//     registerTab.style.display = 'none';

//     // Call function to display new user in list
//     createUserElement(newUser);
// }

// // Create user element and add to list
// function createUserElement(user) {
//     const li = document.createElement('li');
//     li.classList.add('entry');
//     li.innerHTML = `
//     <span>${user.username}</span>
//     <span>${user.firstname}</span>
//     <span>${user.lastname}</span>
//     <span>${user.email}</span>
//     <span>${user.password}</span>
//   `;
//     userList.appendChild(li);
// }

// // Add event listener to register form
// registerForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     createUser();
// });










// // Define User class
// class User {
//     constructor(firstname, lastname, username, email, password) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     // Method to create new user entry
//     createUserEntry() {
//         const userEntry = document.createElement("li");
//         userEntry.classList.add("entry");
//         userEntry.innerHTML = `
//       <span>${this.username}</span>
//       <span>${this.firstname}</span>
//       <span>${this.lastname}</span>
//       <span>${this.email}</span>
//       <span>${this.password}</span>
//     `;
//         return userEntry;
//     }
// }

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

//     // Create new user
//     const user = new User(firstname, lastname, username, email, password);

//     // Add new user entry to user list
//     const userList = document.getElementById("user-list");
//     userList.appendChild(user.createUserEntry());

//     // Reset form fields
//     registerForm.reset();
// }