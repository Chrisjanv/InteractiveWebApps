//Below you shall find a tasks array which we will use for the rest of this challenge
//One line below this is the tasksCompleted array that we are going to use further use

let tasks = ['swim', 'eat', 'study', 'read', 'sleep'];;
let tasksCompleted = [true, false, true, true, false];

//Activity 1 - Edit the tasksCompleted array by programmatically doing the following:
/*  1) Remove the first completed task
    2) Add a new completed task of false at beginning of the array
    3) Add a new completed task of true at the end of the array
    4) Add two more completed tasks with a boolean value of your choice, to the end of the array
*/

//Add your code below

if ( tasksCompleted[0] === true ){
    tasks.shift();
    tasksCompleted.shift();
}
console.log(tasks);

tasks.unshift('party');
tasksCompleted.unshift(false);
console.log(tasks);
console.log(tasksCompleted);

tasks.push('run');
tasksCompleted.push(true);
console.log(tasks);
console.log(tasksCompleted);

tasks.push('surf','cycle');
tasksCompleted.push(false,true);
console.log(tasks);
console.log(tasksCompleted);

//Activity 2 - Complete this function. 
//Create a for loop that can loop through an array and print out all the array items in the console.
//This function takes a parameter of arrayName.

function displayArray(arrayName) {
    for (let i = 0; i < arrayName.length; i++) {
        console.log(arrayName[i]);
    }
}

//Activity 3 - Print the tasks array to the console by using the function you created in Activity 2
//Add your code below

displayArray(tasks);

//Activity 4 - Complete this function.
//The purpose of this function is to calculate the sum of all the values in an array.
//Create a variable inside this function called total and set it equal to 0.
//Create a for loop that calculates the sum of all the values in an array store the answer in the total variable.
//Outside the for loop, console log the total.

function calculateTotal(arrayName) {
    let total = 0;
    for (let i = 0; i < arrayName.length; i++) {
        if (arrayName[i] === true){
            total++;
        }    
    }
    console.log(total);
}

//Activity 5 - Call the calculateTotal function and pass tasksCompleted as an argument.
//Add your code below

calculateTotal(tasksCompleted);

//Activity 6 - Complete this function
//The purpose of this function is to calculate the average of the values put together in an array
//Create a variable inside this function called total and set it equal to 0
//Create a for loop that calculates the sum of all the values in an array, store the answer in the total variable
//Outside the for loop, create a variable called average and store your calculations of the average in that variable
//Add your code below

function calculateAverage(arrayName) {
    let total = 0;
    for (let i = 0; i < arrayName.length; i++) {
        if (arrayName[i] === true) {
            total++;
        }
    }
    let average = (total / arrayName.length) * 100;
    console.log(average);
}


//Activity 7 - Call your calculate average function with tasksCompleted array as it's argument
//Add your code below

calculateAverage(tasksCompleted);