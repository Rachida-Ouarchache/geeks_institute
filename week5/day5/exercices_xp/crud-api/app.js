import express from "express";
import { fetchPosts } from "./data/dataService.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bienvenue dans mon CRUD API 🚀. Utilisez /api/posts pour voir les données.");
});

app.get("/api/posts", async (req, res) => {
  try {
    const posts = await fetchPosts();
    console.log("✅ Données récupérées depuis JSONPlaceholder");
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: "Impossible de récupérer les données" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});

