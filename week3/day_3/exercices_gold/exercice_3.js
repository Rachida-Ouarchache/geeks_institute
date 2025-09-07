let shoppingList = [];

let root = document.getElementById("root");

let form = document.createElement("form");


let input = document.createElement("input");
input.type = "text";
input.placeholder = "Enter item";


let addButton = document.createElement("button");
addButton.type = "button";
addButton.textContent = "AddItem";

let clearButton = document.createElement("button");
clearButton.type = "button";
clearButton.textContent = "ClearAll";

let listDisplay = document.createElement("ul");

form.appendChild(input);
form.appendChild(addButton);
form.appendChild(clearButton);
root.appendChild(form);
root.appendChild(listDisplay);

function addItem() {
  let item = input.value.trim();
  if (item !== "") {
    shoppingList.push(item); 
    renderList();            
    input.value = "";        
  }
}

function clearAll() {
  shoppingList = []; 
  renderList();      
}

function renderList() {
  listDisplay.innerHTML = ""; 
  shoppingList.forEach(function(item) {
    let li = document.createElement("li");
    li.textContent = item;
    listDisplay.appendChild(li);
  });
}

addButton.addEventListener("click", addItem);
clearButton.addEventListener("click", clearAll);
