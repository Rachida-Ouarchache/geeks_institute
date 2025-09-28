const fs = require("fs");
const path = require("path");

function getFileInfo() {
  const filePath = path.join(__dirname, "data", "example.txt");

  const exists = fs.existsSync(filePath);

  console.log("File exists:", exists);

  if (exists) {
    const stats = fs.statSync(filePath);

    console.log("File size:", stats.size, "bytes");
    console.log("Created at:", stats.birthtime);
  }
}

module.exports = getFileInfo;
