import express from "express";
import {
  getTodos,
  getSingleTodo,
  addTodo,
  editTodo,
  removeTodo,
} from "../controllers/todoController.js";

const router = express.Router();

router.get("/", getTodos);
router.get("/:id", getSingleTodo);
router.post("/", addTodo);
router.put("/:id", editTodo);
router.delete("/:id", removeTodo);

export default router;
