import express from "express";
import quizRouter from "./routes/quiz.js";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.use("/quiz", quizRouter);

app.listen(port, () => {
  console.log(`🚀 Trivia Quiz running at http://localhost:${port}/quiz`);
});
