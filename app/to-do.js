var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Task = (function () {
    function Task(description, priority, assignedTo) {
        this.description = description;
        this.priority = priority;
        this.assignedTo = assignedTo;
        this.done = false;
    }
    Task.prototype.markDone = function () {
        this.done = true;
    };
    return Task;
}());
var HomeTask = (function (_super) {
    __extends(HomeTask, _super);
    function HomeTask(description, priority, assignedTo) {
        _super.call(this, description, priority);
        this.description = description;
        this.priority = priority;
        this.assignedTo = assignedTo;
    }
    return HomeTask;
}(Task));
var WorkTask = (function (_super) {
    __extends(WorkTask, _super);
    function WorkTask(dueDate, description, priority, assignedTo) {
        _super.call(this, description, priority, assignedTo);
        this.dueDate = dueDate;
        this.description = description;
        this.priority = priority;
        this.assignedTo = assignedTo;
    }
    return WorkTask;
}(Task));
var HobbyTask = (function (_super) {
    __extends(HobbyTask, _super);
    function HobbyTask(description) {
        _super.call(this, description, "low");
        this.description = description;
    }
    return HobbyTask;
}(Task));
var michael = {
    name: "Michael D",
    email: "michaeldada@gmail.com"
};
var andrew = {
    name: "Andrew C",
    email: "cho-andrew@hotmail.com"
};
var tasks = [];
tasks.push(new HomeTask("Do the dishes", "High"));
tasks.push(new HomeTask("Finish homework", "Low", michael));
tasks.push(new HomeTask("Get groceries", "High"));
tasks.push(new HobbyTask("Practice origami"));
tasks.push(new HobbyTask("Play the sax"));
var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);
tasks.push(new WorkTask(today, "Angular it up", "High", andrew));
tasks.push(new WorkTask(tomorrow, "Ember it up", "Low", michael));
tasks.push(new WorkTask(nextDay, "Get a job", "Medium", andrew));
console.log(tasks);
