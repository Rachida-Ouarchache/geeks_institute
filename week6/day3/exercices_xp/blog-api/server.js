import express from "express";
import dotenv from "dotenv";
import postRoutes from "./server/routes/postRoutes.js";
import { createTable } from "./server/models/postModel.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/posts", postRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Server error" });
});

app.listen(PORT, async () => {
  await createTable();
  console.log(`🚀 Server running on port ${PORT}`);
});
