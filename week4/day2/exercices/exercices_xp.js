// // exercice 1
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
colors.forEach((color, index) => {
    console.log(`${index + 1}# ${color}`);
});
if (colors.includes("Violet")) {
    console.log("Yeah");
} else {
    console.log("No...");
} 
// exercice 2
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

colors.forEach((color, index) => {
  let pos = index + 1;
  let suffix = (pos % 10 === 1 && pos !== 11) ? ordinal[1] :
               (pos % 10 === 2 && pos !== 12) ? ordinal[2] :
               (pos % 10 === 3 && pos !== 13) ? ordinal[3] :
               ordinal[0];

  console.log(`${pos}${suffix} choice is ${color}.`);
});
// exercice 3
// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
// output = ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']

// ------2------
const country = "USA";
console.log([...country]);

//  output = ['U', 'S', 'A']
// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);

// output = [undefined, undefined]

// exercice 4
const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
                { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
                { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
                { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
                { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
                { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
                { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// 1
const welcomeStudents = users.map(user => `Hello ${user.firstName}`);

console.log(welcomeStudents);
// 2
const fullStackResidents = users.filter(user => user.role === "Full Stack Resident");

console.log(fullStackResidents);
// 3
const fullStackLastNames = users
  .filter(user => user.role === "Full Stack Resident")
  .map(user => user.lastName);

console.log(fullStackLastNames);

// exercice 5
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const epicString = epic.reduce((accumulator, currentValue) => `${accumulator} ${currentValue}`);
console.log(epicString);


// exercice 6
const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
                  {name: "Liam", course: "Computer Science", isPassed: false},                    
                  {name: "Jenner", course: "Information Technology", isPassed: true},
                  {name: "Marco", course: "Robotics", isPassed: true}, 
                  {name: "Kimberly", course: "Artificial Intelligence", isPassed: false},
                  {name: "Jamie", course: "Big Data", isPassed: false}];

// 1
const passedStudents = students.filter(student => student.isPassed);

console.log(passedStudents);

// 2
students
  .filter(student => student.isPassed)
  .forEach(student => {
    console.log(`Good job ${student.name}, you passed the course in ${student.course}`);
  });
