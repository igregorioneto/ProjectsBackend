const Task = require('./Task.js');

class TaskManager {
  constructor() {
    this.tasks = [];
  }
  
  addTask(description) {
    const id = this.tasks.length + 1;
    const newTask = new Task(id, description);
    this.tasks.push(newTask);
    console.log(`Task added: ${newTask.description}`);
    return newTask;
  }

  completeTask(id) {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      task.complete();
    } else {
      console.log(`Task with id ${id} not found.`);
    }
  }

  getPendingTasks() {
    return () => {
      const pendingTasks = this.tasks.filter(task => !task.complete);
      console.log('Pending tasks:');
      pendingTasks.forEach(task => task.getStatus());
    }
  }
}

module.exports = TaskManager;