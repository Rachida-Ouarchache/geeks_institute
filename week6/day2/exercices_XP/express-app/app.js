import express from "express";
import routes from "./routes/index.js";

const app = express();
const port = 4000;

app.use("/", routes);

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
