// exercice 1
  // 1
  const people = ["Greg", "Mary", "Devon", "James"];
  people.shift();
  // 2
   people.splice(3,1,"Jason");
  // 3
   people.push("rachida");
   console.log(people);
  // 4
  const indexMary = people.indexOf("Mary");
  console.log(indexMary);
  // 5
  //let peoples = people.slice(0,4);
  let peoples = people.slice(1,5);
  console.log(peoples);
  // 6
  const indexFoo = people.indexOf("Foo");
  console.log(indexFoo);
  // 7
  const last = people[people.length - 1]

  console.log(last);
  // part 2 
    // 1
  for ( let i = 0 ; i < people.length ; i++) {

      console.log(people[i]);
  }
    //  2
 for (const person of people) {
       
       console.log(person);
          if (person === "Devon") {
          
            break; 
  }
}
// exercice 2
  //  1
  let colors = ["Red", "Pink","Purple","Gray"];
  console.log(colors);
  // 2
  for (let i = 0; i < colors.length; i++) {
  console.log(`My #${i + 1} choice is ${colors[i]}`);
}
  // 3
  for (let i = 0; i < colors.length ; i++){
     let number = i + 1;
     let suffix ;
      switch (number) {
        case 1:
          suffix = "st";
        case 2 :
          suffix = "nd";
        case 3 :
          suffix = "rd";
        default:
          suffix = "th";
      }
      console.log(`My ${number}${suffix} chois is ${colors[i]}`);
  }
  // exerice 3
   const prompt = require("prompt-sync")();

   let inputNumber = Number(prompt("Enter a number:"));

   while (inputNumber < 10) {
  inputNumber = Number(prompt("Please enter another number:"));
  }

  console.log("Your number:", inputNumber);
  console.log("Type of number is:", typeof inputNumber);
// exercice 4
 const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
console.log("The building has", building.numberOfFloors, "floors.");
console.log("Apartments on 1st floor:", building.numberOfAptByFloor.firstFloor);
console.log("Apartments on 3rd floor:", building.numberOfAptByFloor.thirdFloor);

const secondTenant = building.nameOfTenants[1];  

const roomsOfSecondTenant = building.numberOfRoomsAndRent.dan[0];  

console.log("The second tenant is:", secondTenant);
console.log(secondTenant, "has", roomsOfSecondTenant, "rooms in his apartment.");

// exercice 5
  // 1
const family = {
  father: "aziz",
  mother: "aziza",
  son: "tassnim",
  daughter: "rimas",
  pet: "nero"
};

console.log(family);

  // 2
    for (let key in family) {
      console.log(key);
    }
    for (let key in family) {
  console.log(family[key]);
}
// exercice 6
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
  };

  let sentence = "";

  for (let key in details) {
    sentence += key + " " + details[key] + " ";
  }

  console.log(sentence.trim());
  // exercice 7
  // 1
  const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let letters = [];
for (let i = 0; i < names.length; i++) {
  letters.push(names[i][0]); 
}
letters.sort();

let socName = letters.join("");

console.log("The secret society name is:", socName);
// 2
const societyName = names
  .map(name => name[0])  
  .sort()                
  .join("");       

console.log(societyName); 








