let userNumber = prompt('Please provide a number');
userNumber = parseInt(userNumber);

function evenOrOdd(num) {
    if (num%2===0){
        console.log('Even');
    }
    else if (num%2===1){
        console.log('Odd');
    }
    else if (num === null || num === "" || isNaN(num)) {
        alert("You did not enter a number. Please try again.");
        location.reload();
    }
}

evenOrOdd(userNumber);