alert('Please enter two whole numbers greater than 0');

let userNumberOne = prompt('Please enter your first number');
let userMathOperator = prompt('Please enter how the numbers need to be calculated');
let userNumberTwo = prompt('Please enter your second number');

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