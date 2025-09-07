// exercice 1
let randomNum = Math.floor(Math.random() * 100) + 1;
console.log("Random number:", randomNum);
for (let i = 0; i <= randomNum; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// exercice 2
function capitalize(str) {
  let evenCaps = '';
  let oddCaps = '';

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (i % 2 === 0) {
      evenCaps += char.toUpperCase();
      oddCaps += char.toLowerCase();
    } else {
      evenCaps += char.toLowerCase();
      oddCaps += char.toUpperCase();
    }
  }

  return [evenCaps, oddCaps];
}
console.log(capitalize("abcdef"));
console.log(capitalize("javascript")); 
// exercice 3
function isPalindrome(str) {
  str = str.toLowerCase().replace(/\s+/g, '');
  let reversed = str.split('').reverse().join('');
  return str === reversed;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("bob"));
console.log(isPalindrome("kayak"));
console.log(isPalindrome("hello"));    
console.log(isPalindrome("A man a plan a canal Panama")); 
// exercice 4
function biggestNumberInArray(arrayNumber) {
  if (!arrayNumber || arrayNumber.length === 0) return 0;
  const numbersOnly = arrayNumber.filter(item => typeof item === 'number');
  if (numbersOnly.length === 0) return 0;
  return Math.max(...numbersOnly);
}

const array1 = [-1, 0, 3, 100, 99, 2, 99];
const array2 = ['a', 3, 4, 2];
const array3 = [];

console.log(biggestNumberInArray(array1));
console.log(biggestNumberInArray(array2)); 
console.log(biggestNumberInArray(array3)); 
// exercice 5
function uniqueArray(arr) {
  return [...new Set(arr)];
}
const list1 = [1, 2, 3, 3, 3, 3, 4, 5];
console.log(uniqueArray(list1)); 

const list2 = ['a', 'b', 'a', 'c', 'b'];
console.log(uniqueArray(list2)); 




