//  exercice 1
  //  1
const data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
   {
    name: 'Cuty',
    age: 5,
    type: 'rabbit'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Rex',
    age: 10,
    type: 'dog'
  },
];
// const totalDogYears = data.reduce((sum, pet) => {
//   return pet.type === 'dog' ? sum + pet.age * 7 : sum;
// }, 0);

// console.log(totalDogYears);
//   // 2
//   const totalDogYears = data.reduce((sum, pet) => {
//   if (pet.type === 'dog') {
//     return sum + pet.age * 7; 
//   }
//   return sum;
// }, 0);

// console.log(totalDogYears);
// exrcice 2
const userEmail3 = ' cannotfillemailformcorrectly@gmail.com ';
const cleanEmail = userEmail3.trim();
console.log(cleanEmail);
// exercice 3
const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
const userRoles = users.reduce((acc, user) => {
  const fullName = `${user.firstName} ${user.lastName}`;
  acc[fullName] = user.role;
  return acc;
}, {});

console.log(userRoles);
// exercice 4
  // 1
const letters = ['x', 'y', 'z', 'z'];

const letterCount = {};

for (let i = 0; i < letters.length; i++) {
  const letter = letters[i];
  if (letterCount[letter]) {
    letterCount[letter]++; // If exists, increment count
  } else {
    letterCount[letter] = 1; // If not, initialize to 1
  }
}

console.log(letterCount);
  // 2
const letterCount = letters.reduce((acc, letter) => {
  acc[letter] = (acc[letter] || 0) + 1;
  return acc;
}, {});

console.log(letterCount);


