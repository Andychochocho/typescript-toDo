interface ITask {
  description: string;
  done: boolean;
  priority: string;
  markDone(): void;
  assignedTo?: IPerson;
}

class Task implements ITask {
  done: boolean = false;
  constructor(public description: string, public priority: string, public assignedTo?: IPerson) {}
  markDone() {
    this.done = true;
  }
}
interface IPerson {
  name: string;
  email: string;
}

class HomeTask extends Task{
  constructor(public description: string, public priority: string, public assignedTo?: IPerson){
    super(description, priority);
  }
}

class WorkTask extends Task {
  constructor(public dueDate: Date, public description: string, public priority: string, public assignedTo: IPerson){
    super(description, priority, assignedTo);
  }
}

class HobbyTask extends Task {
  constructor(public description: string){
    super(description, "low");
  }
}

var michael: IPerson = {
  name: "Michael D",
  email: "michaeldada@gmail.com"
}

var andrew: IPerson = {
  name: "Andrew C",
  email: "cho-andrew@hotmail.com"
}

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
