const chalk = require("chalk");

function showMessage() {
  console.log(chalk.blue.bold("🌟 Hello from Chalk! 🌟"));
  console.log(chalk.green("This is a colorful Node.js message!"));
}

module.exports = showMessage;
