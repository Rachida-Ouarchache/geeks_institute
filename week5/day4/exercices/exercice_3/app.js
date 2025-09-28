const { readFile, writeFile } = require("./fileManager");

const helloContent = readFile("Hello World.txt");
console.log("📖 Contenu de Hello World.txt :", helloContent);

writeFile("Bye World.txt", "Writing to the file");

const byeContent = readFile("Bye World.txt");
console.log("📖 Nouveau contenu de Bye World.txt :", byeContent);
