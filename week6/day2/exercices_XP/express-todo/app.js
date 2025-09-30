import express from "express";
import todosRouter from "./routes/todos.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/todos", todosRouter);

app.listen(port, () => {
  console.log(`🚀 To-do API running at http://localhost:${port}`);
});
