import { Router } from "express";

const router = Router();

const emojis = ["😀", "🎉", "🌟", "🔥", "💖"];

router.get("/", (req, res) => {
  const form = `
    <html>
      <head>
        <title>Emoji Greeting App</title>
        <style>
          body { font-family: Arial; text-align: center; margin-top: 50px; }
          form { margin: 20px auto; padding: 20px; border: 1px solid #ccc; width: 300px; border-radius: 10px; }
          select, input { margin: 10px 0; padding: 8px; width: 90%; }
          button { padding: 10px 20px; background: #007BFF; color: white; border: none; border-radius: 5px; }
          button:hover { background: #0056b3; cursor: pointer; }
        </style>
      </head>
      <body>
        <h1>👋 Welcome to Emoji Greeting App</h1>
        <form action="/greet" method="POST">
          <input type="text" name="name" placeholder="Enter your name" required />
          <br/>
          <select name="emoji" required>
            ${emojis.map(e => `<option value="${e}">${e}</option>`).join("")}
          </select>
          <br/>
          <button type="submit">Greet Me</button>
        </form>
      </body>
    </html>
  `;
  res.send(form);
});

router.post("/greet", (req, res) => {
  const { name, emoji } = req.body;

  if (!name || !emoji) {
    return res.send("<h2>⚠️ Please enter your name and choose an emoji!</h2>");
  }

  res.send(`
    <html>
      <head>
        <title>Greeting</title>
        <style>
          body { font-family: Arial; text-align: center; margin-top: 50px; }
          h1 { font-size: 2em; }
          a { display: inline-block; margin-top: 20px; text-decoration: none; padding: 10px 20px; border: 1px solid #007BFF; border-radius: 5px; color: #007BFF; }
          a:hover { background: #007BFF; color: white; }
        </style>
      </head>
      <body>
        <h1>${emoji} Hello, ${name}! ${emoji}</h1>
        <a href="/">Go Back</a>
      </body>
    </html>
  `);
});

export default router;
