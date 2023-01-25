alert('Please enter two whole numbers greater than 0');

let userNumberOne = prompt('Please enter your first number');
while (userNumberOne<=0){
    alert('Please enter a number greater than 0');
    userNumberOne = prompt('Please enter your first number again');
}

let operators = ['+', '-', '*', '/'];
let userMathOperator;
while (operators.indexOf(userMathOperator) === -1) {
    userMathOperator = prompt('Please enter how the numbers need to be calculated');
    if (operators.indexOf(userMathOperator) === -1) {
        alert('Please enter a valid operator');
    }
}

let userNumberTwo = prompt('Please enter your second number');
while (userNumberTwo <= 0) {
    alert('Please enter a number greater than 0');
    userNumberTwo = prompt('Please enter your second number again');
}

let total = 0;

userNumberOne = parseInt(userNumberOne);
userNumberTwo = parseInt(userNumberTwo);

switch (userMathOperator){

    case '+':
        total = userNumberOne + userNumberTwo;
    break;

    case '-':
        total = userNumberOne - userNumberTwo;
    break;

    case '/':
        total = userNumberOne / userNumberTwo;
    break;

    case '*':
        total = userNumberOne * userNumberTwo;
    break;

}

document.getElementById('answer').innerHTML = "Your total is:" + total;
console.log(total);