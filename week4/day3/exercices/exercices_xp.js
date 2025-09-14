// exerice 1
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// output : I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

// exercice 2
function displayStudentInfo(objUser) {
  const { first, last } = objUser;
  return `Your full name is ${first} ${last}`;
}

console.log(displayStudentInfo({ first: 'Elie', last: 'Schoppik' }));

// exercice 3
  // 1
const users = { user1: 18273, user2: 92833, user3: 90315 };

const usersArray = Object.entries(users);

console.log(usersArray);
  // 2
const updatedUsersArray = usersArray.map(user => [user[0], user[1] * 2]);

console.log(updatedUsersArray);
const users = { user1: 18273, user2: 92833, user3: 90315 };

const modifiedArray = usersArray.map(([key, value]) => [key, value * 2]);

console.log(modifiedArray);
// exercice 4
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);
// output : object
// exercice 5
class Dog {
  constructor(name) {
    this.name = name;
  }
};
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};

// exercice 6
  // 1
  // [2] === [2] => False

  // { } === { } => False
  // 2
  const object1 = { number: 5 };
  const object2 = object1;
  const object3 = object2;
  const object4 = { number: 5}; 
 
  object1.number = 4;
  console.log(object2.number); // 4
  console.log(object3.number); // 4
  console.log(object4.number); // 5

 class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}
const dog = new Animal("Buddy", "dog", "brown");
console.log(dog.name);  
console.log(dog.type);  
console.log(dog.color); 

// 2
class Mammal extends Animal {
  sound(noise) {
    return `${this.name} is a ${this.color} ${this.type} and it makes the sound: ${noise}`;
  }
}

const cow = new Mammal("Bella", "cow", "black and white");
console.log(cow.sound("Moo")); 

// 3
const farmerCow = new Mammal("Lily", "cow", "brown and white");

console.log(farmerCow.sound("Moooo"));




