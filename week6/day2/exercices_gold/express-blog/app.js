import express from "express";
import postsRouter from "./routes/posts.js";

const app = express();
const port = 8000;

app.use(express.json());

app.use("/posts", postsRouter);

app.listen(port, () => {
  console.log(`🚀 Blog API running at http://localhost:${port}`);
});
