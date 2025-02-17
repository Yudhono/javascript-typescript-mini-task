// Quiz: Understanding JavaScript Objects

// Quiz 1: What will be the output of the following code? please explain your answer.
let obj1 = { a: 1, b: 2 };
let obj2 = { a: 1, b: 2 };
console.log(obj1 == obj2);
// write your short explanation here:

// Quiz 2: What will be the output of the following code? please explain your answer.
let obj3 = { a: 1, b: 2 };
let obj4 = obj3;
console.log(obj3 == obj4);
// write your short explanation here:

// Quiz 3: What will be the output of the following code? please explain your answer.
let obj5 = { a: 1, b: 2 };
let obj6 = { ...obj5 };
console.log(obj5 == obj6);
// write your short explanation here:

// Quiz 4: What will be the output of the following code? please explain your answer.
let obj7 = { a: 1, b: 2 };
let obj8 = JSON.parse(JSON.stringify(obj7));
console.log(obj7 == obj8);
// write your short explanation here:

// Quiz 5: What will be the output of the following code? please explain your answer.
let obj9 = { a: 1, b: 2 };
let obj10 = { a: 1, b: 2 };
console.log(JSON.stringify(obj9) === JSON.stringify(obj10));
// write your short explanation here:

// Quiz 6: What will be the output of the following code? please explain your answer.
let obj11 = { a: 1, b: 2 };
let obj12 = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj11).length === Object.keys(obj12).length);
// write your short explanation here:

// ---------------------------------------------- //

// Task: Create and manipulate JavaScript objects

// Step 1: Create an object named 'person' with the following properties:
// - name (string)
// - age (number)
// - city (string)

let person = {
  name: "John Doe",
  age: 30,
  city: "New York",
};

// Step 2: Add a new property 'email' to the 'person' object with a value of your choice.

person.email = "john.doe@example.com";

// Step 3: Update the 'age' property to a new value.

person.age = 31;

// Step 4: Delete the 'city' property from the 'person' object.

delete person.city;

// Step 5: Write a function 'printPerson' that takes an object as a parameter and logs each property and its value.

function printPerson(obj) {
  for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
}

// Example usage:
printPerson(person);
// Output should be:
// name: John Doe
// age: 31
// email: john.doe@example.com
