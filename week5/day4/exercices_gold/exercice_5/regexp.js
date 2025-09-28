function returnNumbers(str) {

  const matches = str.match(/\d/g);

  return matches ? matches.join('') : '';
}

console.log(returnNumbers('k5k3q2g5z6x9bn')); 
console.log(returnNumbers('abc')); 
console.log(returnNumbers('a1b2c3')); 
