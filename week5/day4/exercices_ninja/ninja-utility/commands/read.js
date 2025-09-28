import fs from "fs";
import path from "path";

function readFile(fileName) {
  const filePath = path.resolve(fileName);

  if (!fs.existsSync(filePath)) {
    console.log("File not found ❌");
    return;
  }

  const content = fs.readFileSync(filePath, "utf8");
  console.log("File content:");
  console.log(content);
}

export default readFile;

