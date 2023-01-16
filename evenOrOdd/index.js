let userNumber = prompt('Please provide a integer larger than zero');
userNumber = parseInt(userNumber);

function evenOrOdd(num) {
    if (num%2===0){
        console.log('Even');
    }
    else if (num%2===1){
        console.log('Odd');
    }
    else if (num === null || num === "" || isNaN(num) || num<1) {
        alert("You did not enter an accepted number. Please try again.");
        location.reload();
    }
}

evenOrOdd(userNumber);