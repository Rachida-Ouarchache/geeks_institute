import fs from "fs/promises";

const filePath = "./tasks.json";

const readTasks = async () => {
  try {
    const data = await fs.readFile(filePath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    throw new Error("Error reading tasks file");
  }
};

const writeTasks = async (tasks) => {
  try {
    await fs.writeFile(filePath, JSON.stringify(tasks, null, 2));
  } catch (err) {
    throw new Error("Error writing to tasks file");
  }
};

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await readTasks();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const tasks = await readTasks();
    const task = tasks.find((t) => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title, description, completed } = req.body;
    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const tasks = await readTasks();
    const newTask = {
      id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      title,
      description: description || "",
      completed: completed || false,
    };

    tasks.push(newTask);
    await writeTasks(tasks);

    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { title, description, completed } = req.body;
    const tasks = await readTasks();
    const index = tasks.findIndex((t) => t.id === parseInt(req.params.id));

    if (index === -1)
      return res.status(404).json({ message: "Task not found" });

    if (!title && !description && completed === undefined) {
      return res.status(400).json({ message: "No valid data provided" });
    }

    tasks[index] = {
      ...tasks[index],
      title: title ?? tasks[index].title,
      description: description ?? tasks[index].description,
      completed: completed ?? tasks[index].completed,
    };

    await writeTasks(tasks);
    res.json(tasks[index]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const tasks = await readTasks();
    const filtered = tasks.filter((t) => t.id !== parseInt(req.params.id));

    if (filtered.length === tasks.length)
      return res.status(404).json({ message: "Task not found" });

    await writeTasks(filtered);
    res.json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
