class Task {
  constructor(id, description) {
    this.id = id;
    this.description = description;
    this.completed = false;
  }
  
  complete() {
    this.completed = true;
    console.log(`Task ${this.id} completed!`);
  }

  // Usa um closure para retornar uma função que mostra o status da tarefa
  getStatus() {
    return () => {
      console.log(`Task: ${this.description}, Completed: ${this.completed}`);
    }
  }
}

module.exports = Task;