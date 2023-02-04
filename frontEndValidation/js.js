document.getElementById("form").addEventListener("submit", function (event) {
    if (!myValidation()) {
        event.preventDefault();
    }
    if (myValidation()) {
        let ul = document.getElementById("newTaskList");

        let newTask = document.getElementById("newTask").value;

        let li = document.createElement("li");
        li.appendChild(document.createTextNode(newTask));
        ul.appendChild(li);
        
        event.preventDefault();
    }   

});

function myValidation() {

    let newTask = document.getElementById("newTask").value;

    if (/[<>&]/.test(newTask)) {
        document.getElementById("warning").style.display = "block";
        return false;
    }else{
        return true;
    }
}



