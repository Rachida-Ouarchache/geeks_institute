// 1
let newDev = document.getElementById("navBar");
newDev.setAttribute('id',"socialNetworkNavigation");
console.log(newDev);
// 2
const newLi = document.createElement("li");
const textNode = document.createTextNode("Logout");
newLi.appendChild(textNode);

console.log(newLi);
// 4
const ul = document.querySelector("#socialNetworkNavigation ul");

const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;

console.log("Premier élément :", firstLi.textContent);
console.log("Dernier élément :", lastLi.textContent);
