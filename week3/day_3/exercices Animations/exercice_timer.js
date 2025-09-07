// 1
setTimeout(function () {
  alert("Hello World");
}, 2000);
// 2
setTimeout(function () {
  const p = document.createElement("p");
  p.textContent = "Hello World";

  document.getElementById("container").appendChild(p);
}, 2000);
// 3
let intervalId = setInterval(function () {
  const container = document.getElementById("container");

  const p = document.createElement("p");
  p.textContent = "Hello World";
  container.appendChild(p);

  const count = container.querySelectorAll("p").length;

  if (count >= 5) {
    clearInterval(intervalId);
  }
}, 2000);

document.getElementById("clear").addEventListener("click", function () {
  clearInterval(intervalId);
});
