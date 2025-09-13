// // exercice 1
[1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return ;
});
// // output = [2, 4, 6]

// // exercice 2
[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2],
);
// // output = [1, 2, 0, 1, 2, 3]

// // exercice 3
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
})
// i takes the values: 0, 1, 2, 3, 4, 5

// exercice 4
const array = [[1],[2],[3],[[[4]]],[[[5]]]]
//   // 1
const result = array.flat(2);
console.log(result); 
  // 2
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const result = greeting.map(words => words.join(" "));
console.log(result);
  // 3
const result = greeting.map(words => words.join(" ")).join(" ");
console.log(result);
  // 4
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
const result = trapped.flat(Infinity);
console.log(result); // [3]
