
const fs = require("fs");

function readFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return data;
  } catch (err) {
    console.error(`❌ Erreur lors de la lecture du fichier : ${err.message}`);
  }
}

function writeFile(filePath, content) {
  try {
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`✅ Écriture réussie dans ${filePath}`);
  } catch (err) {
    console.error(`❌ Erreur lors de l'écriture du fichier : ${err.message}`);
  }
}

module.exports = { readFile, writeFile };
