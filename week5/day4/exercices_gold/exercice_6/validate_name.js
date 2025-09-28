const prompt = require("prompt-sync")();

const fullName = prompt("Enter your full name (e.g. John Doe): ");


const nameRegex = /^[A-Z][a-z]+ [A-Z][a-z]+$/;

if (nameRegex.test(fullName)) {
  console.log("Valid name ✅");
} else {
  console.log("Invalid name ❌");
}
