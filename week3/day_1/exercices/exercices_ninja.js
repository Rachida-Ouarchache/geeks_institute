// exercice 1
  // 1
let person1 = {
  fullName: "Alice Johnson",
  mass: 68,   // en kg
  height: 1.65, // en mètres
  calcBMI: function() {
    return this.mass / (this.height * this.height);
  }
};

let person2 = {
  fullName: "Bob Smith",
  mass: 85,
  height: 1.8,
  calcBMI: function() {
    return this.mass / (this.height * this.height);
  }
};

function compareBMI(p1, p2) {
  let bmi1 = p1.calcBMI();
  let bmi2 = p2.calcBMI();

  if (bmi1 > bmi2) {
    console.log(`${p1.fullName} has the higher BMI: ${bmi1.toFixed(2)}`);
  } else if (bmi2 > bmi1) {
    console.log(`${p2.fullName} has the higher BMI: ${bmi2.toFixed(2)}`);
  } else {
    console.log(`Both have the same BMI: ${bmi1.toFixed(2)}`);
  }
}

compareBMI(person1, person2);
// exercice 2
  function calculateAvg(gradesList) {
    let sum = 0;
    for (let i = 0; i < gradesList.length; i++) {
      sum += gradesList[i];
    }
    return sum / gradesList.length;
  }

  function findAvg(gradesList) {
    let average = calculateAvg(gradesList);
    console.log("Average grade:", average.toFixed(2));

    if (average >= 65) {
      console.log("You passed!");
    } else {
      console.log("You failed and must repeat the course.");
    }
  }

  let grades = [80, 90, 70, 85, 95];
  findAvg(grades);


