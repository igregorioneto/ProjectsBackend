const TaskManager = require('./TaskManager.js');

const taskManager = new TaskManager();

taskManager.addTask('Learn closures in JavaScript');
taskManager.addTask('Learn JavaScript Advanced');
taskManager.addTask('Build a Node.js task manager');

taskManager.completeTask(2);

const pedingTaskClosure = taskManager.getPendingTasks();
pedingTaskClosure();