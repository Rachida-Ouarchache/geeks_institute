const { faker } = require('@faker-js/faker');
const prompt = require('prompt-sync')();

const users = [];

function addFakeUser() {
  const user = {
    name: faker.person.fullName(),
    street: faker.location.streetAddress(),
    country: faker.location.country(),
  };
  users.push(user);
}

function addRealUser() {
  const name = prompt("Enter your name: ");
  const street = prompt("Enter your street: ");
  const country = prompt("Enter your country: ");

  const user = { name, street, country };
  users.push(user);
}

addFakeUser();

addRealUser();

console.log("\nUsers array:");
console.log(users);



