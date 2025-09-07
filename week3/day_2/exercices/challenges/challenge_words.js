const prompt = require('prompt-sync')({sigint: true});

let input = prompt("Enter several words, separated by commas: ");

if (!input.trim()) {
    console.log("You didn't enter any words!");
    process.exit(0);
}

let words = input.split(",").map(word => word.trim()).filter(word => word.length > 0);

let maxLength = words.reduce((max, word) => Math.max(max, word.length), 0);

let border = "*".repeat(maxLength + 4);

console.log(border);
words.forEach(word => {
    let padding = " ".repeat(maxLength - word.length);
    console.log(`* ${word}${padding} *`);
});
console.log(border);

