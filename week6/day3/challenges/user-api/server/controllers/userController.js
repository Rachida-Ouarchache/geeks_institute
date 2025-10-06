import bcrypt from "bcrypt";
import {
  createUser,
  findByUsername,
  getPasswordHash,
  getAllUsers,
  getUserById,
  updateUser,
} from "../models/userModel.js";

const SALT_ROUNDS = 10;

export const registerUser = async (req, res) => {
  try {
    const { email, username, first_name, last_name, password } = req.body;
    if (!email || !username || !password)
      return res.status(400).json({ message: "Missing required fields" });

    const existing = await findByUsername(username);
    if (existing) return res.status(409).json({ message: "Username already exists" });

    const hashed = await bcrypt.hash(password, SALT_ROUNDS);
    const user = await createUser({ email, username, first_name, last_name }, hashed);

    res.status(201).json({ message: "User registered successfully", user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password)
      return res.status(400).json({ message: "Missing username or password" });

    const user = await findByUsername(username);
    if (!user) return res.status(404).json({ message: "User not found" });

    const hash = await getPasswordHash(username);
    if (!hash) return res.status(500).json({ message: "Password not found" });

    const valid = await bcrypt.compare(password, hash.password);
    if (!valid) return res.status(401).json({ message: "Invalid credentials" });

    res.json({ message: "Login successful", user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const listUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await getUserById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const modifyUser = async (req, res) => {
  try {
    const updated = await updateUser(req.params.id, req.body);
    if (!updated.length) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User updated", user: updated[0] });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
