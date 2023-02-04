function myValidation(){
    let newTask = document.getElementById("newTask");

    if (/[<>&]/.test(newTask)) {
        document.getElementById("warning").style.display = "block";
    } else {
        // continue with processing the input
    }
}