//exrcice 1
let numbers = [123, 8409, 100053, 333333333, 7];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 3 === 0) {
    console.log(numbers[i] + " → true");
  } else {
    console.log(numbers[i] + " → false");
  }
}
// exercice 2
let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
};
   const prompt = require("prompt-sync")();

  let studentName = prompt("What is your name?").toLowerCase();

    if (studentName in guestList) {
    console.log(`Hi! I'm ${studentName}, and I'm from ${guestList[studentName]}.`);
  } else {
    console.log("Hi! I'm a guest.");
  }
// exercice 4
  //  1
  let age = [20, 5, 12, 43, 98, 55];
  let sum = 0;

  for (let i = 0; i < age.length; i++) {
    sum += age[i]; 
  }

  console.log("Sum of all ages:", sum);
  // 2
  let maxAge = age[0]; 
  for (let i = 1; i < age.length; i++) {
    if (age[i] > maxAge) {
      maxAge = age[i]; // Si on trouve un élément plus grand, on le remplace
    }
  }

  console.log("Highest age:", maxAge);


 
