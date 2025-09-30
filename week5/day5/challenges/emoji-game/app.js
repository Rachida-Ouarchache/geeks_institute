const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

const emojis = [
  { emoji: "😀", name: "Smile" },
  { emoji: "🐶", name: "Dog" },
  { emoji: "🌮", name: "Taco" },
  { emoji: "🚗", name: "Car" },
  { emoji: "⚽", name: "Soccer Ball" },
  { emoji: "🍎", name: "Apple" },
];

let score = 0;
let leaderboard = [];

app.get("/api/question", (req, res) => {
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

  let options = [randomEmoji.name];
  while (options.length < 4) {
    const randomOption =
      emojis[Math.floor(Math.random() * emojis.length)].name;
    if (!options.includes(randomOption)) {
      options.push(randomOption);
    }
  }

  options.sort(() => Math.random() - 0.5);

  res.json({ emoji: randomEmoji.emoji, correct: randomEmoji.name, options });
});

app.post("/api/guess", (req, res) => {
  const { guess, correct } = req.body;

  if (guess === correct) {
    score++;
    res.json({ correct: true, message: "✅ Bonne réponse !", score });
  } else {
    res.json({
      correct: false,
      message: `❌ Mauvaise réponse. La bonne réponse était ${correct}`,
      score,
    });
  }
});

app.post("/api/leaderboard", (req, res) => {
  const { player } = req.body;

  leaderboard.push({ player, score });
  leaderboard.sort((a, b) => b.score - a.score);

  res.json({ leaderboard });
});

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`)
);
