let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}
// 1
const displayGroceries = () => {
    groceries.fruits.forEach(fruit => {
        console.log(fruit);
    });
}

displayGroceries();
// 2
const cloneGroceries = () => {
    let user = client;

    client = "Betty";

    console.log("user:", user);
    console.log("client:", client);
}

cloneGroceries();
// 3
const cloneGroceries = () => {
    let user = client;

    let shopping = groceries;

    groceries.totalPrice = "35$";

    groceries.other.paid = false;

    console.log("user:", user);
    console.log("shopping:", shopping);
    console.log("groceries:", groceries);
}

cloneGroceries();



