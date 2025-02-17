// Quiz: Understanding block, function, and global scope

// Quiz 1: What will be the output of the following code? please explain your answer.
var b = 1;
{
  var b = 2;
}
console.log(b);
// write your short explanation here:

// Quiz 2: What will be the output of the following code? please explain your answer.
let c = 1;
{
  let c = 2;
}
console.log(c);
// write your short explanation here:

// Quiz 3: What will be the output of the following code? please explain your answer.
function test() {
  var d = 1;
}
test();
console.log(d);
// write your short explanation here:

// Quiz 4: What will be the output of the following code? please explain your answer.
var e = 1;
function test2() {
  var e = 2;
  console.log(e);
}
test2();
console.log(e);
// write your short explanation here:

// ---------------------------------------------- //

// Mini-task: Practice understanding block, function, and global scope

// Step 1: Create a variable 'a' using 'var' inside a block and log it outside the block.
{
  var a = 10;
}
console.log(a); // Output should be: 10

// Step 2: Create a variable 'b' using 'let' inside a block and try to log it outside the block. (This should throw an error)
{
  let b = 20;
}
// console.log(b); // Uncommenting this line will throw an error because 'b' is block-scoped.

// Step 3: Create a variable 'c' using 'const' inside a function and log it inside the function.
function testScope() {
  const c = 30;
  console.log(c); // Output should be: 30
}
testScope();

// Step 4: Try to log the variable 'c' outside the function. (This should throw an error)
// console.log(c); // Uncommenting this line will throw an error because 'c' is function-scoped.

// Step 5: Create a global variable 'd' using 'var' and log it inside a function.
var d = 40;
function logGlobalVar() {
  console.log(d); // Output should be: 40
}
logGlobalVar();
