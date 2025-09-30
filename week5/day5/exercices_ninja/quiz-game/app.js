const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"))); 

const questions = [
  {
    question: "Quelle est la capitale de la France ?",
    options: ["Paris", "Madrid", "Rome", "Berlin"],
    correct: "Paris",
  },
  {
    question: "Combien font 5 x 6 ?",
    options: ["11", "30", "56", "25"],
    correct: "30",
  },
  {
    question: "Quel est le langage utilisé par Node.js ?",
    options: ["Python", "C++", "JavaScript", "PHP"],
    correct: "JavaScript",
  },
];

let currentIndex = 0;

app.get("/api/question", (req, res) => {
  if (currentIndex >= questions.length) {
    return res.json({ finished: true });
  }

  const question = questions[currentIndex];
  res.json({ ...question, index: currentIndex });
});

app.post("/api/answer", (req, res) => {
  const { index, answer } = req.body;
  const question = questions[index];

  if (!question) {
    return res.status(400).json({ message: "Question invalide" });
  }

  const correct = question.correct === answer;
  currentIndex++;

  res.json({ correct, correctAnswer: question.correct });
});

app.post("/api/reset", (req, res) => {
  currentIndex = 0;
  res.json({ message: "Nouvelle partie commencée !" });
});

const PORT = 7000;
app.listen(PORT, () =>
  console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`)
);
