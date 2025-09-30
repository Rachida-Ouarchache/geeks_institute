const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(express.json()); 

let todos = [];

app.post("/api/todos", (req, res) => {
  const { title } = req.body;
  if (!title || typeof title !== "string") {
    return res.status(400).json({ message: "Title is required" });
  }

  const newTodo = { id: uuidv4(), title: title.trim(), completed: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.get("/api/todos", (req, res) => {
  res.json(todos);
});

app.get("/api/todos/:id", (req, res) => {
  const todo = todos.find((t) => t.id === req.params.id);
  if (!todo) return res.status(404).json({ message: "Todo not found" });
  res.json(todo);
});

app.put("/api/todos/:id", (req, res) => {
  const todo = todos.find((t) => t.id === req.params.id);
  if (!todo) return res.status(404).json({ message: "Todo not found" });

  const { title, completed } = req.body;

  if (title !== undefined) {
    if (typeof title !== "string" || title.trim() === "") {
      return res.status(400).json({ message: "Invalid title" });
    }
    todo.title = title.trim();
  }

  if (completed !== undefined) {
    if (typeof completed !== "boolean") {
      return res.status(400).json({ message: "completed must be boolean" });
    }
    todo.completed = completed;
  }

  res.json(todo);
});

app.delete("/api/todos/:id", (req, res) => {
  const index = todos.findIndex((t) => t.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: "Todo not found" });

  const deleted = todos.splice(index, 1)[0];
  res.json({ message: "Todo deleted", todo: deleted });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
