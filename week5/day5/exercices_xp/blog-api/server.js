import express from "express";

const app = express();

app.use(express.json());

let posts = [
  { id: 1, title: "Mon premier post", content: "Ceci est le contenu du premier post." },
  { id: 2, title: "Deuxième post", content: "Voici un autre article intéressant." },
];

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.get("/posts/:id", (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ error: "Post introuvable" });
  res.json(post);
});

app.post("/posts", (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) return res.status(400).json({ error: "Titre et contenu requis" });

  const newPost = { id: posts.length ? posts[posts.length - 1].id + 1 : 1, title, content };
  posts.push(newPost);
  res.status(201).json(newPost);
});

app.put("/posts/:id", (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ error: "Post introuvable" });

  const { title, content } = req.body;
  if (title) post.title = title;
  if (content) post.content = content;

  res.json(post);
});

app.delete("/posts/:id", (req, res) => {
  const index = posts.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: "Post introuvable" });

  const deleted = posts.splice(index, 1);
  res.json({ message: "Post supprimé", deleted });
});

app.use((req, res) => {
  res.status(404).json({ error: "Route introuvable" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Erreur serveur" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});
