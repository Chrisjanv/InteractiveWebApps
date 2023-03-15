// Create an Factory Function and give this function a suitable name
// Have it's parameters add these parameter values: 'title', 'description', 'date_created', 'date_due', 'tagname'
// Within your function create private variables that are set to the same name as the parameter values above
// Have your property values be equal to the respective parameters they have been named after
// e.g. description: description

function Task1(title, date_created, date_due, tagname) {
    return {
        title: title,
        date_created: date_created,
        description: function () { // Added the 'function' keyword here
            return ("Task Name: " + title + " | " +
                "Date Created: " + date_created + " | " +
                "Date Due: " + date_due + " | " +
                "Tags: " + tagname);
        },
        date_due: date_due,
        tagname: tagname,
    }
}


// Declare a variable of 'todo' and have it equal to an instantiation of your Factory Function name, using the arguments in brackets below
// Your 'todo' variable should now be equal to an object, which allows you to use concatenation on it.
// To avoid confusion, going forward we are going to refer to the 'todo' variable as an object
// ('Head to Gym', 'Someting that I should turn into an habit', 2018 - 04 - 24, 2020 - 12 - 06, ['exercise', ' fitness', ' routines'])

let todo = Task1('Head to Gym', '2018 - 04 - 24','2020 - 12 - 06', ['exercise', ' fitness', ' routines']);

// Using the 'todo' object declared above:
// Console.log the property value 'tagname' from your Factory Function, it should display the value "['exercise', ' fitness', ' routines']"
// Feel free to try and console log.all your other property values declared within the Factory Function

console.log(todo.tagname);

// After having successfully completed the instrutions above, add these changes to your code above:
// Remove the parameter and argument of 'description' from your factory function, as well as from the 'todo' object
// Replace your description property within your factory function, to equal a function which neatly returns all the properties
// e.g. description: function() {
//       return("Task Name: " + this.title + " | " +
//         "Date Created: " + this.date_created + " | " +
//         "Date Due: " + this.date_due + " | " +
//         "Tags: " + this.tagname );
//      },

// Using the 'todo' object, console.log the description property

console.log(todo.description());

// Create an Object Constructor called "Task"
// Within your object parameters add the parameter values of: 'title', 'description', 'date_created', 'date_due', 'tagname'
// Within your object create private variables that are set to the same name as the parameter values above
// Have your private variables equal to the respective parameters they have been named after
// e.g. this.description = description

class Task2{
    constructor(title, description, date_created, date_due, tagname){
        let _title = title;
        this.description = description;
        this.date_created = date_created;
        this.date_due = date_due;
        this.tagname = tagname;

        this.getTitle = function(){
            return _title;
        }
    }
}

// Using the code below, declare a variable of 'todo' and have it equal to an instantiation of the Object Below
// Your 'todo' variable should now be equal to an object which allows you to use concatenation on it.
// To avoid confusion, going forward we are going to refer to the 'todo' variable as an object

let TODO = new Task2('Head to Gym', 'Something that I should turn into an habit', '2018 - 04 - 24', '2020 - 12 - 06', ['exercise', 'fitness', ' routines'])

// Using the 'todo' object declared above:
// Console.log the private variable 'title' from your Task Object. It should display the value 'Head to Gym'.
// Feel free to try and console.log all your other private variables declared within the Task Object

console.log(TODO.getTitle());

//Add a prototype of 'completed' to the Task object and set it to a boolean value of 'true'
//Console.log this prototype value, by using the 'todo' object

Task2.prototype.completed = true;
console.log(TODO.completed);