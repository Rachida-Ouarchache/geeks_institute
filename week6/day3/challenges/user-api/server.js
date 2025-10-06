import express from "express";
import dotenv from "dotenv";
import userRoutes from "./server/routes/userRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api", userRoutes);

app.get("/", (req, res) => res.send("User Management API running"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
