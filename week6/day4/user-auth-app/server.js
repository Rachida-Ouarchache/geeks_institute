import express from "express";
import path from "path";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const __dirname = path.resolve();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use("/", userRoutes);

app.use((req, res) => res.status(404).json({ message: "Route not found" }));

app.listen(4000, () => console.log("✅ Server running on http://localhost:4000"));