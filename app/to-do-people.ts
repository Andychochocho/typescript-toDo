/// <reference path="to-do-classes-interfaces.ts" />
module ToDoList{
  var diane: ToDoList.IPerson = {
    name: "Diane D",
    email: "diane@epicodus.com"
  }

  var thor: ToDoList.IPerson = {
    name: "Thor Son of Odin",
    email: "thor@asgard.com"
  }

  var loki: ToDoList.IPerson = {
    name: "God of mischief",
    email: "loki@geocities.com",
    phone: "555-666-7777"
  }

  export var people = {
    "diane": diane,
    "thor": thor,
    "loki": loki,
  };

  $(document).ready(function(){
    var allTasks = ToDoList.listAllTasksofType("WorkTask", tasks);
    $('#inputTasks').html("Here are all the tasks for Work: ");
    for(var task of allTasks) {
      console.log("what the fuck");
      $('#output').append(task);
    }
    var lowPriority = ToDoList.listLowPrioritiesofTasks("Low", tasks);

    $('#inputLowPriority').html("Here are all the low priority tasks: ");
    for(var task of lowPriority) {
      $('#lowPriority').append(task);
    }
  });
}
