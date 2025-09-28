// todo.js

export class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push({ task, completed: false });
    console.log(`Task added: "${task}"`);
  }

  markComplete(index) {
    if (this.tasks[index]) {
      this.tasks[index].completed = true;
      console.log(`Task completed: "${this.tasks[index].task}"`);
    } else {
      console.log("Task not found.");
    }
  }

  listTasks() {
    console.log("\n--- Todo List ---");
    this.tasks.forEach((t, i) => {
      const status = t.completed ? "✅" : "❌";
      console.log(`${i}: ${t.task} ${status}`);
    });
    console.log("-----------------\n");
  }
}
