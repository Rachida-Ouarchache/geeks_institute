// copy-file.js
const fs = require("fs");

// Read from source.txt and write to destination.txt
fs.readFile("source.txt", "utf8", (err, data) => {
  if (err) {
    return console.error("Error reading source file:", err);
  }

  fs.writeFile("destination.txt", data, (err) => {
    if (err) {
      return console.error("Error writing destination file:", err);
    }
    console.log("File copied successfully!");
  });
});
