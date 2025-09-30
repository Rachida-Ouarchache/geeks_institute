import express from "express";
import axios from "axios";

const app = express();
app.use(express.json());

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";


app.get("/api/posts", async (req, res) => {
  try {
    const response = await axios.get(BASE_URL);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Impossible de récupérer les posts" });
  }
});

app.get("/api/posts/:id", async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/${req.params.id}`);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(404).json({ error: "Post non trouvé" });
  }
});

app.post("/api/posts", async (req, res) => {
  try {
    const { title, body, userId } = req.body;
    const response = await axios.post(BASE_URL, { title, body, userId });
    res.status(201).json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Impossible de créer le post" });
  }
});

app.put("/api/posts/:id", async (req, res) => {
  try {
    const { title, body, userId } = req.body;
    const response = await axios.put(`${BASE_URL}/${req.params.id}`, { title, body, userId });
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Impossible de mettre à jour le post" });
  }
});

app.delete("/api/posts/:id", async (req, res) => {
  try {
    await axios.delete(`${BASE_URL}/${req.params.id}`);
    res.status(200).json({ message: `Post ${req.params.id} supprimé avec succès` });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Impossible de supprimer le post" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur CRUD lancé sur http://localhost:${PORT}`);
});
