import { Router } from "express";

const router = Router();

const triviaQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "What is the largest mammal in the world?", answer: "Blue whale" },
];

let currentQuestionIndex = 0;
let score = 0;

router.get("/", (req, res) => {
  if (currentQuestionIndex >= triviaQuestions.length) {
    return res.redirect("/quiz/score");
  }

  const q = triviaQuestions[currentQuestionIndex];
  res.send(`
    <html>
      <head>
        <title>Trivia Quiz</title>
        <style>
          body { font-family: Arial; text-align: center; margin-top: 50px; }
          form { margin-top: 20px; }
          input { padding: 8px; margin: 10px; }
          button { padding: 8px 15px; background: #007BFF; color: white; border: none; border-radius: 5px; }
          button:hover { background: #0056b3; }
        </style>
      </head>
      <body>
        <h2>Question ${currentQuestionIndex + 1} of ${triviaQuestions.length}</h2>
        <p>${q.question}</p>
        <form action="/quiz" method="POST">
          <input type="text" name="answer" placeholder="Your answer" required />
          <br/>
          <button type="submit">Submit</button>
        </form>
      </body>
    </html>
  `);
});

router.post("/", (req, res) => {
  const userAnswer = req.body.answer?.trim();
  const correctAnswer = triviaQuestions[currentQuestionIndex].answer;

  let feedback;
  if (userAnswer?.toLowerCase() === correctAnswer.toLowerCase()) {
    score++;
    feedback = `<p style="color:green;">✅ Correct!</p>`;
  } else {
    feedback = `<p style="color:red;">❌ Incorrect! The correct answer was: <b>${correctAnswer}</b></p>`;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex >= triviaQuestions.length) {
    return res.redirect("/quiz/score");
  }

  const nextQ = triviaQuestions[currentQuestionIndex];
  res.send(`
    <html>
      <head>
        <title>Trivia Quiz</title>
      </head>
      <body style="font-family: Arial; text-align:center; margin-top:50px;">
        ${feedback}
        <h2>Next Question (${currentQuestionIndex + 1}/${triviaQuestions.length})</h2>
        <p>${nextQ.question}</p>
        <form action="/quiz" method="POST">
          <input type="text" name="answer" placeholder="Your answer" required />
          <br/>
          <button type="submit">Submit</button>
        </form>
      </body>
    </html>
  `);
});

router.get("/score", (req, res) => {
  res.send(`
    <html>
      <head><title>Quiz Score</title></head>
      <body style="font-family: Arial; text-align:center; margin-top:50px;">
        <h1>🎉 Quiz Finished!</h1>
        <h2>Your final score: ${score} / ${triviaQuestions.length}</h2>
        <a href="/quiz/reset">Play Again</a>
      </body>
    </html>
  `);
});

router.get("/reset", (req, res) => {
  currentQuestionIndex = 0;
  score = 0;
  res.redirect("/quiz");
});

export default router;
