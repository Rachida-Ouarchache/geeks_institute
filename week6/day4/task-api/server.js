import express from "express";
import taskRoutes from "./server/routes/taskRoutes.js";
import fs from "fs";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/tasks", taskRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const filePath = "./tasks.json";
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, "[]");
}

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
