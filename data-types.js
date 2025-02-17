// Quiz: Understanding JavaScript Data Types

// Quiz 1: What will be the output of the following code? please explain your answer.
let f = "5";
let g = 5;
console.log(f == g);
// write your short explanation here:

// Quiz 2: What will be the output of the following code? please explain your answer.
let h = "5";
let i = 5;
console.log(f === g);
// write your short explanation here:

// Quiz 3: What will be the output of the following code? please explain your answer.
let j = null;
console.log(typeof j);
// write your short explanation here:

// Quiz 4: What will be the output of the following code? please explain your answer.
let k;
console.log(typeof k);
// write your short explanation here:

// Quiz 5: What will be the output of the following code? please explain your answer.
let l = [1, 2, 3];
console.log(typeof l);
// write your short explanation here:

// Quiz 6: What will be the output of the following code? please explain your answer.
let m = { name: "John" };
console.log(typeof m);
// write your short explanation here:

// ---------------------------------------------- //

// Mini-task: Identify and convert JavaScript data types

// Step 1: Create a variable 'num' with a number value and convert it to a string. Log the result.
let num = 42;
let numStr = num.toString();
console.log(numStr); // Output should be: "42"

// Step 2: Create a variable 'str' with a string value and convert it to a number. Log the result.
let str = "123";
let strNum = Number(str);
console.log(strNum); // Output should be: 123

// Step 3: Create a variable 'bool' with a boolean value and convert it to a string. Log the result.
let bool = true;
let boolStr = bool.toString();
console.log(boolStr); // Output should be: "true"

// Step 4: Create a variable 'arr' with an array value and convert it to a string. Log the result.
let arr = [1, 2, 3];
let arrStr = arr.toString();
console.log(arrStr); // Output should be: "1,2,3"

// Step 5: Create a variable 'obj' with an object value and convert it to a string using JSON.stringify. Log the result.
let obj = { name: "Alice", age: 25 };
let objStr = JSON.stringify(obj);
console.log(objStr); // Output should be: '{"name":"Alice","age":25}'
