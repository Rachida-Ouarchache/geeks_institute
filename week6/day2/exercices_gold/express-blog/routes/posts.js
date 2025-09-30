import { Router } from "express";

const router = Router();

let posts = [];
let nextId = 1;

router.get("/", (req, res) => {
  res.json(posts);
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);

  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }

  res.json(post);
});

router.post("/", (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: "Title and content are required" });
  }

  const newPost = {
    id: nextId++,
    title,
    content,
    timestamp: new Date().toISOString()
  };

  posts.push(newPost);
  res.status(201).json(newPost);
});

router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { title, content } = req.body;

  const post = posts.find(p => p.id === id);
  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }

  if (title !== undefined) post.title = title;
  if (content !== undefined) post.content = content;
  post.timestamp = new Date().toISOString();

  res.json(post);
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = posts.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Post not found" });
  }

  const deleted = posts.splice(index, 1);
  res.json(deleted[0]);
});

export default router;
