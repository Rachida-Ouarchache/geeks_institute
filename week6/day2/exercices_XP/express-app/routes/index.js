import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Welcome to the Homepage!");
});

router.get("/about", (req, res) => {
  res.send("About Us: This is a simple Express app with routes.");
});

router.get("/contact", (req, res) => {
  res.send("Contact Page: You can reach us at contact@example.com");
});

export default router; 

