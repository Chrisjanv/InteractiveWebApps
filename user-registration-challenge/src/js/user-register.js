const usersTabButton = document.getElementById("users-tab-button");
const registerTabButton = document.getElementById("register-tab-button");
const registerForm = document.getElementById("register-form");
const userList = document.getElementById("user-list");

let users = [];

function createUser() {
    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const newUser = { firstName, lastName, username, email, password };
    users.push(newUser);
    return newUser;
}

function createUserElement(user) {
    const userElement = document.createElement("li");
    userElement.classList.add("user");
    userElement.innerHTML = `
      <span class="user-value">${user.username}</span>
      <span class="user-value">${user.firstName}</span>
      <span class="user-value">${user.lastName}</span>
      <span class="user-value">${user.email}</span>
      <span class="user-value">${user.password}</span>
      <button class="delete-button">Delete</button>
    `;
    return userElement;
}

function populateUserList(users) {
    userList.innerHTML = "";
    users.forEach(user => {
        const userElement = createUserElement(user);
        userList.appendChild(userElement);
    });
}

registerForm.addEventListener("submit", event => {
    event.preventDefault();
    const newUser = createUser();
    registerForm.reset();
    console.log("New user created:", newUser);
});

usersTabButton.addEventListener("click", () => {
    usersTabButton.classList.add("active");
    registerTabButton.classList.remove("active");
    userList.style.display = "block";
    registerForm.style.display = "none";
    populateUserList(users);
});

registerTabButton.addEventListener("click", () => {
    registerTabButton.classList.add("active");
    usersTabButton.classList.remove("active");
    registerForm.style.display = "block";
    userList.style.display = "none";
});

userList.addEventListener("click", event => {
    if (event.target.classList.contains("delete-button")) {
        const userElement = event.target.parentNode;
        const userIndex = Array.from(userList.children).indexOf(userElement);
        users.splice(userIndex, 1);
        userList.removeChild(userElement);
    }
});

