class Task {
    constructor(title, description, date_created, date_due, importance){
        this.title = title;
        this.description = description;
        this.date_created = date_created;
        this.date_due = date_due;
        this.importance = importance;
    }
};

// const task1 = new Task('CODE', 'Do to do App.', Date(), '25/03/2023', 'Very');
// console.log(task1);

// Use prototype to mark completed = true/false (boolean values)