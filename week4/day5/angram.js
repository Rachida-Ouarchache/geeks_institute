const isAnagram = (str1, str2) => {
  const cleanStr = str =>
    str.toLowerCase().replace(/\s+/g, "").split("").sort().join("");

  return cleanStr(str1) === cleanStr(str2);
};

console.log(isAnagram("Astronomer", "Moon starer")); 
console.log(isAnagram("School master", "The classroom")); 
console.log(isAnagram("The Morse Code", "Here come dots")); 
console.log(isAnagram("Hello", "World")); 
