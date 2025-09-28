const _ = require("lodash"); 
const math = require("./math"); 

const sum = math.add(10, 5);
const product = math.multiply(10, 5);

const numbers = [10, 5, 8, 3, 15];
const max = _.max(numbers);
const min = _.min(numbers);

console.log("Custom Module Results:");
console.log("10 + 5 =", sum);
console.log("10 * 5 =", product);

console.log("\nLodash Results:");
console.log("Numbers:", numbers);
console.log("Max:", max);
console.log("Min:", min);
