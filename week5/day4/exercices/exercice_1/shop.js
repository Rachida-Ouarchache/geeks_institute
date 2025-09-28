
const products = require("./products");

function findProductByName(productName) {
  const product = products.find(
    (p) => p.name.toLowerCase() === productName.toLowerCase()
  );


  if (product) {
    console.log("✅ Product found:", product);
  } else {
    console.log(`❌ Product "${productName}" not found.`);
  }
}

findProductByName("Cement");
findProductByName("Brick");
findProductByName("Paint");
findProductByName("Laptop"); 

