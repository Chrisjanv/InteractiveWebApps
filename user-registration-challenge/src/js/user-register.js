const registerTab = document.querySelector(".register");
const usersTab = document.querySelector(".users");
const registerForm = document.querySelector("#register-form");
const viewUsersBtn = document.querySelector("#register-tab-button");
const registerUserBtn = document.querySelector("#users-tab-button");
const usersList = document.querySelector("#user-list");

let users = [];

function createUser() {
    const firstName = document.querySelector("#firstname").value;
    const lastName = document.querySelector("#lastname").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const username = document.querySelector("#username").value;
    const newUser = { firstName, lastName, email, password, username };
    users.push(newUser);
    return newUser;
}

function createUserElement(user) {
    const userElement = document.createElement("li");
    userElement.classList.add("user");
    userElement.innerHTML = `
    <span>${user.username}</span>
    <span>${user.firstName}</span>
    <span>${user.lastName}</span>
    <span>${user.email}</span>
    <span>${user.password}</span>
    `;
    return userElement;
}

function populateUserList(users) {
    usersList.innerHTML = "";
    users.forEach(user => {
        const userElement = createUserElement(user);
        usersList.appendChild(userElement);
    });
}

registerForm.addEventListener("submit", event => {
    event.preventDefault();
    const newUser = createUser();
    registerForm.reset();
    viewUsersBtn.click();
    console.log("New user created:", newUser);
});

registerUserBtn.addEventListener("click", () => {
    registerTab.style.display = "block";
    usersTab.style.display = "none";
});

viewUsersBtn.addEventListener("click", () => {
    usersTab.style.display = "block";
    registerTab.style.display = "none";
    populateUserList(users);
});

usersList.addEventListener("click", event => {
    if (event.target.classList.contains("user")) {
        const userElement = event.target;
        const userIndex = Array.from(usersList.children).indexOf(userElement);
        users.splice(userIndex, 1);
        usersList.removeChild(userElement);
    }
});


