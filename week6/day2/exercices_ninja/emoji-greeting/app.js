import express from "express";
import router from "./routes/greet.js";

const app = express();
const port = 2000;

app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.listen(port, () => {
  console.log(`🚀 Emoji Greeting App running at http://localhost:${port}`);
});
