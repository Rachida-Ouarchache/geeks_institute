import express, { json } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const { hash, compare } = bcrypt;
const { sign, verify } = jwt;

const app = express();
app.use(json());

let users = [];

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

app.post("/api/register", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password required" });
  }

  const existingUser = users.find((u) => u.username === username);
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await hash(password.toString(), 10);

  const newUser = { username: username.toString(), password: hashedPassword };
  users.push(newUser);

  res.status(201).json({ message: "User registered successfully" });
});

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username);
  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const isMatch = await compare(password.toString(), user.password.toString());
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const token = sign({ username: user.username }, "SECRET_KEY", {
    expiresIn: "1h",
  });

  res.json({ message: "Login successful", token });
});

function authMiddleware(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Access denied" });

  verify(token, "SECRET_KEY", (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = user;
    next();
  });
}

app.get("/api/profile", authMiddleware, (req, res) => {
  res.json({ message: `Welcome ${req.user.username}`, user: req.user });
});

