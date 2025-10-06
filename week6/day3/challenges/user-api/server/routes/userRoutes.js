import express from "express";
import {
  registerUser,
  loginUser,
  listUsers,
  getUser,
  modifyUser,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/users", listUsers);
router.get("/users/:id", getUser);
router.put("/users/:id", modifyUser);

export default router;
