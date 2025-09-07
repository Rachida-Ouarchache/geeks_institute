let input = prompt("Enter several words, separated by commas:");

let words = input.split(",").map(word => word.trim());

let maxLength = words.reduce((max, word) => Math.max(max, word.length), 0);

let border = "*".repeat(maxLength + 4); 

console.log(border);

words.forEach(word => {
    let padding = " ".repeat(maxLength - word.length); 
    console.log(`* ${word}${padding} *`);
});

console.log(border); 
