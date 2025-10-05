import express from "express";
import {
  getBooks,
  getSingleBook,
  addBook,
  editBook,
  removeBook,
} from "../controllers/bookController.js";

const router = express.Router();

router.get("/", getBooks);
router.get("/:bookId", getSingleBook);
router.post("/", addBook);
router.put("/:bookId", editBook);
router.delete("/:bookId", removeBook);

export default router;
