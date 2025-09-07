// exercice 1
function isBlank(str) {
  return str.trim() === '';
}

console.log(isBlank(''));      
console.log(isBlank('abc'));   
console.log(isBlank('   '));   
console.log(isBlank('\n\t')); 
// exercice 2
function abbrevName(name) {
  let parts = name.split(' ');

  if (parts.length < 2) return name;
  return parts[0] + ' ' + parts[1][0] + '.';
}

console.log(abbrevName("Robin Singh")); 
console.log(abbrevName("John Doe"));
console.log(abbrevName("Alice"));      
console.log(abbrevName("Mary Jane Watson")); 
// ecercice 3
function swapCase(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char === char.toUpperCase()) {
      result += char.toLowerCase(); 
    } else {
      result += char.toUpperCase(); 
    }
  }

  return result;
}

console.log(swapCase('The Quick Brown Fox')); 
// exercice 4
function isOmnipresent(arr, val) {
  return arr.every(subArr => subArr.includes(val));
}

console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1)); 
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6)); 
console.log(isOmnipresent([[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]], 3)); 


