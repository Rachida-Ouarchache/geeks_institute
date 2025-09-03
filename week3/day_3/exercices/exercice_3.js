// 1 _ 2
let allBoldItems;
function getBoldItems() {
  allBoldItems = document.querySelectorAll("p strong");
}

// 3
function highlight() {
  allBoldItems.forEach((item) => {
    item.style.color = "blue";
  });
}
function returnItemsToDefault() {
  allBoldItems.forEach((item) => {
    item.style.color = "black";
  });
}

getBoldItems();

highlight();

returnItemsToDefault();

const paragraph = document.querySelectorAll("p");

paragraph.addEventListener("mouseover", highlight);
paragraph.addEventListener("mouseout", returnItemsToDefault);

console.log(paragraph);


