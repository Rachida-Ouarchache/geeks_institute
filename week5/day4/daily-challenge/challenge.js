const greet = require("./greeting");
const showMessage = require("./colorful-message");
const readFileContent = require("./read-file");

console.log("=== Challenge Start ===\n");

console.log(greet("Laila"));
showMessage();               
readFileContent();           

console.log("\n=== Challenge End ===");
