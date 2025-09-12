let landscape = function() {

 let result = "";

 let flat = function(x) {
   for(let count = 0; count<x; count++){
     result = result + "_";
   }
 }

 let mountain = function(x) {
   result = result + "/"
   for(let counter = 0; counter<x; counter++){
     result = result + "'"
   }
   result = result + "\\"
 }

 flat(4);
 mountain(4);
 flat(4)

 return result;
}

landscape()

//flat(x) ajoute 4 fois _
//mountain(x) ajoute / + ' 4 fois + \\ et à la fin flat ajoute 4 fois _
// outcome = "____/''''\\____"

let landscape = () => {
  let result = "";

  let flat = (x) => {
    for (let count = 0; count < x; count++) {
      result += "_";
    }
  };

  let mountain = (x) => {
    result += "/";
    for (let counter = 0; counter < x; counter++) {
      result += "'";
    }
    result += "\\";
  };

  flat(4);
  mountain(4);
  flat(4);

  return result;
};

landscape();
// exercice 2
const addTo = x => y => x + y;
const addToTen = addTo(10);
addToTen(3); 
// This defines a curried function. The function addTo takes a parameter x and returns another function that takes a parameter y. The inner function then returns the sum of x + y. When we call addTo(10), it returns a new function that will always add 10 to its argument. Calling addTo(10)(3) executes the inner function with y = 3, resulting in 13.
// exercice 3
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)
// curriedSum takes a parameter a and returns a function that takes b. The inner function computes the sum of a + b. When calling curriedSum(30)(1), a is 30 and b is 1, so the result is 31
// exercice 4
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)
// The function curriedSum returns another function that adds its argument to 5. Calling add5(12) adds 5 + 12, so the result is 17.
// exercice 5
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)
// The compose function combines two functions so that the result of the second function is passed to the first. Here, add5(10) gives 15, and then add1(15) gives 16.




