import express from "express";
import booksRouter from "./routes/books.js";

const app = express();
const port = 2000;

app.use(express.json());

app.use("/books", booksRouter);

app.listen(port, () => {
  console.log(`🚀 Book API running at http://localhost:${port}`);
});
