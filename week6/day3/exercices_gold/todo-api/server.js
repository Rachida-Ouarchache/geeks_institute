import express from "express";
import dotenv from "dotenv";
import todoRoutes from "./server/routes/todoRoutes.js";
import { createTable } from "./server/models/todoModel.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/todos", todoRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, async () => {
  await createTable();
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
