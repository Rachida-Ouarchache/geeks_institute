import express from "express";
import fs from "fs";
import bcrypt from "bcrypt";
import path from "path";

const router = express.Router();
const dataPath = path.join(process.cwd(), "data", "users.json");

// --- Helpers ---
function readUsers() {
  if (!fs.existsSync(dataPath)) fs.writeFileSync(dataPath, "[]");
  return JSON.parse(fs.readFileSync(dataPath, "utf-8"));
}

function writeUsers(users) {
  fs.writeFileSync(dataPath, JSON.stringify(users, null, 2));
}

// --- ROUTES ---

// Register
router.post("/register", async (req, res) => {
  const { firstName, lastName, email, username, password } = req.body;
  if (!firstName || !lastName || !email || !username || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const users = readUsers();
  const exists = users.find(
    (u) => u.username === username || u.email === email
  );
  if (exists) return res.status(400).json({ message: "User already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    id: Date.now(),
    firstName,
    lastName,
    email,
    username,
    password: hashedPassword,
  };

  users.push(newUser);
  writeUsers(users);

  res.status(201).json({ message: "✅ User registered successfully!" });
});

// Login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ message: "All fields are required" });

  const users = readUsers();
  const user = users.find((u) => u.username === username);
  if (!user) return res.status(404).json({ message: "User not found" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ message: "Invalid credentials" });

  res.json({ message: `✅ Welcome ${user.firstName}!` });
});

// Get all users
router.get("/users", (req, res) => {
  const users = readUsers();
  res.json(users);
});

// Get user by ID
router.get("/users/:id", (req, res) => {
  const users = readUsers();
  const user = users.find((u) => u.id == req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});

// Update user by ID
router.put("/users/:id", (req, res) => {
  const users = readUsers();
  const index = users.findIndex((u) => u.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: "User not found" });

  const updatedUser = { ...users[index], ...req.body };
  users[index] = updatedUser;
  writeUsers(users);

  res.json({ message: "✅ User updated successfully", updatedUser });
});

export default router;
