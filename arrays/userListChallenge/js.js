let userList = [];
let userChoice = 1;

while (userChoice !== 0) {
    userChoice = prompt('Please enter the corresponding number:\n1) Add three Users\n2) Remove User\n3) Display all Users\n4) Sort Users\n0) Exit');
    userChoice = Number(userChoice);

    if (userChoice >= 1 && userChoice <= 4) {
        switch (userChoice) {
            case 1:
                let userOne = prompt('First User:');
                let userTwo = prompt('Second User:');
                let userThree = prompt('Third User:');
                userList.push(userOne, userTwo, userThree);
                break;
            case 2:
                userList.pop();
                break;
            case 3:
                console.log(userList);
                break;
            case 4:
                userList.sort();
                break;
        }
    } else if (userChoice === 0) {
        console.log('Exiting program.');
    } else {
        console.log('Invalid option, please enter a number between 0 and 4.');
    }
}