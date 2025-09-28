// app.js

import { TodoList } from './todo.js';

const myTodos = new TodoList();

myTodos.addTask("Learn JavaScript modules");
myTodos.addTask("Build a todo app");
myTodos.addTask("Review ES6 classes");

myTodos.markComplete(1);

myTodos.listTasks();