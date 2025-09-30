// // exercice 1
// function makeAllCaps(words) {
//   return new Promise((resolve, reject) => {
//     if (words.every(word => typeof word === "string")) {
//       resolve(words.map(word => word.toUpperCase()));
//     } else {
//       reject("Error: Not all elements are strings!");
//     }
//   });
// }

// function sortWords(words) {
//   return new Promise((resolve, reject) => {
//     if (words.length > 4) {
//       resolve(words.sort());
//     } else {
//       reject("Error: Array length must be greater than 4!");
//     }
//   });
// }


// makeAllCaps([1, "pear", "banana"])
//   .then(arr => sortWords(arr))
//   .then(result => console.log(result))
//   .catch(error => console.log(error));

// makeAllCaps(["avocado", "cucumber", "tomatos"])
//   .then(arr => {
//     console.log(arr);
//     return sortWords(arr);
//   })
//   .then(result => console.log(result))
//   .catch(error => console.log(error));

// makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
//   .then(arr => sortWords(arr))
//   .then(result => console.log(result)) 
//   .catch(error => console.log(error));

  // 2end challenge
    // 1
 const readline = require("readline");

const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;

function toJs() {
  return new Promise((resolve, reject) => {
    try {
      const morseObj = JSON.parse(morse);
      if (Object.keys(morseObj).length === 0) {
        reject("Error: Morse object is empty!");
      } else {
        resolve(morseObj);
      }
    } catch (err) {
      reject("Error: Invalid JSON string!");
    }
  });
}

function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question("Enter a word or sentence: ", (answer) => {
      const chars = answer.toLowerCase().split("");
      const morseTranslation = [];

      for (let char of chars) {
        if (morseJS[char]) {
          morseTranslation.push(morseJS[char]);
        } else {
          rl.close();
          reject(`Error: Character "${char}" not found in Morse object!`);
          return;
        }
      }

      rl.close();
      resolve(morseTranslation);
    });
  });
}

function joinWords(morseTranslation) {
  const result = morseTranslation.join("\n"); 
  console.log(result); 
  return result;
}

toJs()
  .then(morseJS => toMorse(morseJS))
  .then(morseTranslation => joinWords(morseTranslation))
  .catch(error => console.error(error));
