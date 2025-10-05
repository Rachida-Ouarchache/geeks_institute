import express from "express";
import bookRoutes from "./server/routes/bookRoutes.js";

const app = express();
const PORT = 5000;

app.use(express.json()); // pour lire le JSON du body

// Routes principales
app.use("/api/books", bookRoutes);

// Gestion des routes invalides
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
