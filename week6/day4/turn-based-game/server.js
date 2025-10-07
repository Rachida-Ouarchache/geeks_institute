const express = require("express");
const path = require("path");
const fs = require("fs");
const bcrypt = require("bcrypt");

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const DATA_DIR = path.join(__dirname, "data");
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR);
const USERS_FILE = path.join(DATA_DIR, "users.json");
if (!fs.existsSync(USERS_FILE)) fs.writeFileSync(USERS_FILE, "[]");

function readUsers() {
  try {
    return JSON.parse(fs.readFileSync(USERS_FILE, "utf8"));
  } catch {
    return [];
  }
}
function writeUsers(users) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}
function makeId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

const games = new Map();

function generateObstacles(gridSize, count) {
  const set = new Set();
  while (set.size < count) {
    const x = Math.floor(Math.random() * gridSize);
    const y = Math.floor(Math.random() * gridSize);
    if ((x === 0 && y === 0) || (x === gridSize - 1 && y === gridSize - 1)) continue;
    set.add(`${x},${y}`);
  }
  return Array.from(set).map(s => {
    const [x, y] = s.split(",").map(Number);
    return { x, y };
  });
}
function isObstacle(game, x, y) {
  return game.obstacles.some(o => o.x === x && o.y === y);
}
function inBounds(gridSize, x, y) {
  return x >= 0 && y >= 0 && x < gridSize && y < gridSize;
}
function positionsEqual(a, b) {
  return a.x === b.x && a.y === b.y;
}

function getPlayerKey(game, userId) {
  if (!game.players.p1) return null;
  if (game.players.p1.id === userId) return 'p1';
  if (game.players.p2 && game.players.p2.id === userId) return 'p2';
  return null;
}


app.post("/api/register", async (req, res) => {
  const { username, password } = req.body || {};
  if (!username || !password) return res.status(400).json({ message: "username & password required" });

  const users = readUsers();
  if (users.find(u => u.username === username)) {
    return res.status(400).json({ message: "username already exists" });
  }
  const hashed = await bcrypt.hash(password, 10);
  const user = { id: makeId(), username, password: hashed };
  users.push(user);
  writeUsers(users);
  res.json({ message: "registered", userId: user.id, username: user.username });
});

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body || {};
  if (!username || !password) return res.status(400).json({ message: "username & password required" });

  const users = readUsers();
  const user = users.find(u => u.username === username);
  if (!user) return res.status(404).json({ message: "user not found" });
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return res.status(401).json({ message: "invalid credentials" });
  res.json({ message: "logged in", userId: user.id, username: user.username });
});

app.post("/api/games", (req, res) => {
  const { userId, username } = req.body || {};
  if (!userId || !username) return res.status(400).json({ message: "userId & username required" });

  const id = makeId();
  const gridSize = 10;
  const obstacles = generateObstacles(gridSize, 12); 
  const game = {
    id,
    gridSize,
    obstacles,
    players: {
      p1: { id: userId, username, pos: { x: 0, y: 0 } },
      p2: null
    },
    bases: { p1: { x: 0, y: 0 }, p2: { x: gridSize - 1, y: gridSize - 1 } },
    turn: 'p1',
    status: 'waiting',
    winner: null,
  };
  games.set(id, game);
  res.json({ message: "game created", gameId: id, game });
});

app.post("/api/games/:id/join", (req, res) => {
  const { userId, username } = req.body || {};
  const id = req.params.id;
  const game = games.get(id);
  if (!game) return res.status(404).json({ message: "game not found" });
  if (!userId || !username) return res.status(400).json({ message: "userId & username required" });
  if (game.players.p2) return res.status(400).json({ message: "game already has two players" });

  game.players.p2 = { id: userId, username, pos: { x: game.gridSize - 1, y: game.gridSize - 1 } };
  game.status = 'playing';
  games.set(id, game);
  res.json({ message: "joined", game });
});

app.get("/api/games/:id", (req, res) => {
  const game = games.get(req.params.id);
  if (!game) return res.status(404).json({ message: "game not found" });
  res.json(game);
});


app.post("/api/games/:id/action", (req, res) => {
  const { userId, action, direction } = req.body || {};
  const id = req.params.id;
  const game = games.get(id);
  if (!game) return res.status(404).json({ message: "game not found" });

  if (game.status !== 'playing') {
    return res.status(400).json({ message: "game is not in playing state" });
  }
  const playerKey = getPlayerKey(game, userId);
  if (!playerKey) return res.status(403).json({ message: "you are not a player in this game" });
  if (game.turn !== playerKey) return res.status(400).json({ message: "not your turn" });

  const self = game.players[playerKey];
  const opponentKey = playerKey === 'p1' ? 'p2' : 'p1';
  const opponent = game.players[opponentKey];

  if (!opponent) return res.status(400).json({ message: "opponent not joined yet" });

  const dirMap = {
    up: { x: 0, y: -1 },
    down: { x: 0, y: 1 },
    left: { x: -1, y: 0 },
    right: { x: 1, y: 0 },
  };

  if (!["move", "attack"].includes(action)) return res.status(400).json({ message: "invalid action" });
  if (!dirMap[direction]) return res.status(400).json({ message: "invalid direction" });

  const target = { x: self.pos.x + dirMap[direction].x, y: self.pos.y + dirMap[direction].y };

  if (!inBounds(game.gridSize, target.x, target.y)) {
    return res.status(400).json({ message: "move out of bounds" });
  }

  if (isObstacle(game, target.x, target.y)) {
    return res.status(400).json({ message: "blocked by obstacle" });
  }

  if (action === 'move') {
    if (positionsEqual(target, opponent.pos) && !(positionsEqual(opponent.pos, game.bases[opponentKey]) )) {
      return res.status(400).json({ message: "cannot move into opponent's tile" });
    }

    self.pos = target;

    if (positionsEqual(self.pos, game.bases[opponentKey])) {
      game.status = 'finished';
      game.winner = playerKey;
      games.set(id, game);
      return res.json({ message: `${self.username} captured the base and won!`, game });
    }

    game.turn = opponentKey;
    games.set(id, game);
    return res.json({ message: "moved", game });
  }


  const oppBase = game.bases[opponentKey];
  const dx = Math.abs(self.pos.x - oppBase.x);
  const dy = Math.abs(self.pos.y - oppBase.y);
  const manhattan = dx + dy;
  if (manhattan !== 1) {
    return res.status(400).json({ message: "must be adjacent to opponent base to attack" });
  }

  game.status = 'finished';
  game.winner = playerKey;
  games.set(id, game);
  return res.json({ message: `${self.username} attacked and captured opponent base!`, game });
});

app.get("/api/games", (req, res) => {
  const list = Array.from(games.values()).map(g => ({
    id: g.id,
    status: g.status,
    players: { p1: g.players.p1 && g.players.p1.username, p2: g.players.p2 && g.players.p2.username }
  }));
  res.json(list);
});

app.get("/api/health", (req, res) => res.json({ status: "ok" }));

app.use((req, res) => res.status(404).json({ message: "Route not found" }));

app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
