const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
];

let board;
let human, ai;
let currentPlayer;
let difficulty = "easy";
const cells = document.querySelectorAll(".cell");
const message = document.getElementById("message");
const restartBtn = document.getElementById("restartBtn");

function chooseSymbol(symbol) {
  human = symbol;
  ai = symbol === "X" ? "O" : "X";
  currentPlayer = human;
  board = Array(9).fill("");
  cells.forEach(c => c.innerText = "");
  message.innerText = "You are " + human;
}

function setDifficulty(level) {
  difficulty = level;
  message.innerText = `Difficulty: ${level.toUpperCase()}`;
}

function makeMove(index) {
  if (!human || !ai) {
    message.innerText = "Choose your symbol first!";
    return;
  }

  if (board[index] !== "" || checkWinner(board)) return;

  if (currentPlayer === human) {
    board[index] = human;
    document.getElementById(index).innerText = human;

    if (checkWinner(board)) return endGame(checkWinner(board));
    if (isTie()) return endGame(null);

    currentPlayer = ai;
    aiMove();
  }
}

function aiMove() {
  let move;
  if (difficulty === "easy") {
    let available = board.map((v, i) => v === "" ? i : null).filter(v => v !== null);
    move = available[Math.floor(Math.random() * available.length)];
  } else {
    move = minimax(board, ai).index;
  }

  board[move] = ai;
  document.getElementById(move).innerText = ai;

  if (checkWinner(board)) return endGame(checkWinner(board));
  if (isTie()) return endGame(null);

  currentPlayer = human;
}

function checkWinner(b) {
  for (let [a, bIndex, c] of winCombos) {
    if (b[a] && b[a] === b[bIndex] && b[a] === b[c]) {
      return b[a];
    }
  }
  return null;
}

function isTie() {
  return board.every(cell => cell !== "");
}

function endGame(winner) {
  if (winner) {
    message.innerText = winner === human ? "You Win! 🎉" : "AI Wins! 🤖";
  } else {
    message.innerText = "It's a Tie!";
  }
  restartBtn.style.display = "inline-block";
}

function restartGame() {
  board = Array(9).fill("");
  cells.forEach(c => c.innerText = "");
  restartBtn.style.display = "none";
  message.innerText = "Choose your symbol to start!";
  human = ai = null;
}

function minimax(newBoard, player) {
  const availSpots = newBoard.map((v, i) => v === "" ? i : null).filter(v => v !== null);

  if (checkWinner(newBoard) === human) {
    return { score: -10 };
  } else if (checkWinner(newBoard) === ai) {
    return { score: 10 };
  } else if (availSpots.length === 0) {
    return { score: 0 };
  }

  const moves = [];
  for (let i of availSpots) {
    const move = {};
    move.index = i;
    newBoard[i] = player;

    let result = minimax(newBoard, player === ai ? human : ai);
    move.score = result.score;

    newBoard[i] = "";
    moves.push(move);
  }

  if (player === ai) {
    return moves.reduce((best, move) => move.score > best.score ? move : best);
  } else {
    return moves.reduce((best, move) => move.score < best.score ? move : best);
  }
}
