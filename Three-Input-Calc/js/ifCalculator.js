alert('Please enter two whole numbers greater than 0');

let userNumberOne = prompt('Please enter your first number');
let userNumberTwo = prompt('Please enter your second number');
let userMathOperator = prompt('Please enter how the numbers need to be calculated');
let total = 0;

userNumberOne = parseInt(userNumberOne);
userNumberTwo = parseInt(userNumberTwo);

if (userMathOperator === '+') {
    total = userNumberOne + userNumberTwo;
}
else if (userMathOperator === '-') {
    total = userNumberOne - userNumberTwo;
}
else if (userMathOperator === '/') {
    total = userNumberOne / userNumberTwo;
}
else if (userMathOperator === '*') {
    total = userNumberOne * userNumberTwo;
}

console.log(total);