
var task = {
    title: 'My title',
    description: 'My Description'
};

Object.defineProperty(task, 'toString', {
    value: function() {
        return this.title + ' ' + this.description;
    },
    writable: false,
    enumerable: false,
    configurable: false
});

var urgentTask = Object.create(task);
Object.defineProperty(urgentTask, 'toString', {
    value: function() {
        return this.title + ' is urgent';
    },
    writable: false,
    enumerable: false,
    configurable: false
});

console.log(urgentTask.toString());
console.log("                   ");
// 

// constructor function
var Task = function(name) {
    this.name = name;
    this.completed = false;
    this.completed = function() {
        console.log('completing task: ' + task.name);
        this.completed = true;
    }
    this.save = function() {
        console.log('saving Task: ' + this.name);
    }
}

// var task1 = new Task('create a demo for constructors');
// var task2 = new Task('create a demo for modules');
// var task3 = new Task('create a demo for singletons');
// var task4 = new Task('create a demo for prototypes');

// task1.completed();
// task2.save();
// task3.save();
// task4.save();
// console.log("                   ");

//prototype

module.exports = Task;