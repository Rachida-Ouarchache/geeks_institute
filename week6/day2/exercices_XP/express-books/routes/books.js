import { Router } from "express";

const router = Router();

let books = [];
let nextId = 1;

router.get("/", (req, res) => {
  res.json(books);
});

router.post("/", (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ error: "Title and author are required" });
  }
  const newBook = { id: nextId++, title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});

router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author } = req.body;

  const book = books.find(b => b.id === id);
  if (!book) {
    return res.status(404).json({ error: "Book not found" });
  }

  if (title !== undefined) book.title = title;
  if (author !== undefined) book.author = author;

  res.json(book);
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Book not found" });
  }

  const deleted = books.splice(index, 1);
  res.json(deleted[0]);
});

export default router;
