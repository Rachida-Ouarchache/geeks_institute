import {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} from "../models/bookModel.js";

export const getBooks = (req, res) => {
  res.json(getAllBooks());
};

export const getSingleBook = (req, res) => {
  const id = parseInt(req.params.bookId);
  const book = getBookById(id);
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }
  res.json(book);
};

export const addBook = (req, res) => {
  const { title, author, publishedYear } = req.body;
  if (!title || !author || !publishedYear) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  const newBook = createBook({ title, author, publishedYear });
  res.status(201).json(newBook);
};

export const editBook = (req, res) => {
  const id = parseInt(req.params.bookId);
  const { title, author, publishedYear } = req.body;
  const updated = updateBook(id, { title, author, publishedYear });
  if (!updated) {
    return res.status(404).json({ message: "Book not found" });
  }
  res.json(updated);
};

export const removeBook = (req, res) => {
  const id = parseInt(req.params.bookId);
  const deleted = deleteBook(id);
  if (!deleted) {
    return res.status(404).json({ message: "Book not found" });
  }
  res.json({ message: "Book deleted successfully" });
};
