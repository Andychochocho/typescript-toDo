/// <reference path="to-do-classes-interfaces.ts" />
module ToDoList {
  export var describeTasksForPerson = function(assignee: IPerson, taskCollection: Task[]): String[] {
    var descriptions: String[] = [];
    for (var task of taskCollection) {
      if(task.assignedTo === assignee) {
        descriptions.push(task.description);
      }
    }
    return descriptions;
  }

  export var listAllTasks = function(taskCollection: Task[]): String[] {
    var descriptions: String[] = [];
    for (var task of taskCollection) {
        descriptions.push(task.description);
    }
    return descriptions;
  }

  export var listAllTasksofType = function(type: string, taskCollection: Task[]): String[] {
    var descriptions: String[] = [];
    for (var task of taskCollection) {
      if (task.constructor.name === type)
      {
        descriptions.push(task.description);
      }
    }
    return descriptions;
  }

  export var listLowPrioritiesofTasks = function(type: string, taskCollection: Task[]): String[] {
    var descriptions: String[] = [];
    for(var task of taskCollection) {
      if(task.priority === type) {
        descriptions.push(task.description);
      }
    }
    return descriptions;
  }
}
