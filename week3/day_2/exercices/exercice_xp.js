// exercice 1
// 1
// function displayNumbersDivisible() {
// //   for(i = 0 ; i <= 500; i++){
// //     console.log(i)
// //      }
// //   }
// // displayNumbersDivisible();
// 3
// function displayNumbersDivisible() {
//   for(i = 0 ; i <= 500; i++){
//     if (i % 23 === 0){
//       console.log(i);
//      }
//   }
// }

// displayNumbersDivisible();

// 4
function displayNumbersDivisible(divisor) {
  let sum = 0;

  for (let i = 0; i <= 500; i++) {
    if (i % divisor === 0) {
      console.log(i);
      sum = sum + i;
    }
  }

  console.log("Sum:", sum);
}
displayNumbersDivisible(23);

// exercice 2
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
}
 const shoppingList = ["bnana","orange","appel"];
 console.log("shopping Liste :" ,shoppingList)

// 3
function myBill() {
  let total = 0;

  for (let item of shoppingList) {
    if (item in stock && stock[item] > 0) {
      total = total + prices[item];
    }
  }

  return total;
}

console.log("Total Bill:", myBill());
// exercice 3
function changeEnough(itemPrice, amountOfChange) {
  const totalChange = 
    (amountOfChange[0] * 0.25) +  
    (amountOfChange[1] * 0.10) +  
    (amountOfChange[2] * 0.05) +  
    (amountOfChange[3] * 0.01);   


  if (totalChange >= itemPrice) {
    return true;   
  } else {
    return false;  
  }
}

console.log(changeEnough(4.25, [25, 20, 5, 0])); 
console.log(changeEnough(14.11, [2, 100, 0, 0])); 
console.log(changeEnough(0.75, [0, 0, 20, 5]));   

function changeEnough(itemPrice, amountOfChange) {

  const totalChange = 
    (amountOfChange[0] * 0.25) + 
    (amountOfChange[1] * 0.10) +  
    (amountOfChange[2] * 0.05) + 
    (amountOfChange[3] * 0.01);  

  return totalChange >= itemPrice;
}

console.log(changeEnough(4.25, [25, 20, 5, 0]));
// exercice 4

function hotelCost() {
  let nights;

  while (true) {
    nights = prompt("How many nights would you like to stay in the hotel?");
    
    if (nights !== null && !isNaN(nights) && Number(nights) > 0) {
      nights = Number(nights);
      break;
    }

    alert("Please enter a valid number of nights.");
  }

  const cost = nights * 140;
  return cost;
}

console.log("Hotel total cost: $" + hotelCost());

   // 2

function planeRideCost() {
  let destination;

  while (true) {
    destination = prompt("What is your travel destination?");
    
    // Vérification : une chaîne non vide
    if (destination !== null && destination.trim() !== "" && isNaN(destination)) {
      destination = destination.trim();
      break;
    }

    alert("Please enter a valid destination.");
  }

  if (destination.toLowerCase() === "london") {
    return 183;
  } else if (destination.toLowerCase() === "paris") {
    return 220;
  } else {
    return 300;
  }
}

console.log("Plane ride cost: $" + planeRideCost());

// 3
function rentalCarCost() {
  let days;

  while (true) {
    days = prompt("How many days would you like to rent the car?");

    if (days === null || days.trim() === "" || isNaN(days)) {
      alert("Please enter a valid number of days.");
      continue;
    }

    days = Number(days);
    break;
  }

  const costPerDay = 40;
  let totalCost = days * costPerDay;

  if (days > 10) {
    totalCost = totalCost * 0.95;
  }

  return totalCost;
}

alert("Total cost: $" + rentalCarCost());



function totalVacationCost() {
    let hotel = hotelCost();  
    let plane = planeRideCost();
    let car = rentalCarCost();

    let total = hotel + plane + car ;
    return `The hotel cost : $${hotel} , the plane cost $${plane}, the car cost $${car} . Totale $${total}`
}
  totalVacationCost();

  



