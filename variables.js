// Quiz: Understanding var, let, and const

// Quiz 1: What will be the output of the following code? please explain your answer.
var x = 1;
if (true) {
  var x = 2;
}
console.log(x);
// write your short explanation here:

// Quiz 2: What will be the output of the following code? please explain your answer.
let y = 1;
if (true) {
  let y = 2;
}
console.log(y);
// write your short explanation here:

// Quiz 3: What will be the output of the following code? please explain your answer.
const z = 1;
if (true) {
  const z = 2;
}
console.log(z);

// Bug-fixing exercise: Fix the following code so it doesn't throw an error. please explain your answer.
let a = 5;
a = 10;
// write your short explanation here:

// ---------------------------------------------- //

// Mini-task: Practice using var, let, and const

// Step 1: Create a variable 'x' using 'var' and assign it a value. Log the value.
var x = 10;
console.log(x); // Output should be: 10

// Step 2: Create a variable 'yz' using 'let' and assign it a value. Log the value.
let yz = 20;
console.log(yz); // Output should be: 20

// Step 3: Create a variable 'z' using 'const' and assign it a value. Log the value.
const za = 30;
console.log(za); // Output should be: 30

// Step 4: Try to reassign the 'xb' variable and log the value.
xb = 15;
console.log(xb); // Output should be: 15

// Step 5: Try to reassign the 'y' variable and log the value.
yc = 25;
console.log(yc); // Output should be: 25

// Step 6: Try to reassign the 'za' variable and log the value. (This should throw an error)
// za = 35;
// console.log(za); // Uncommenting these lines will throw an error because 'za' is a constant.
