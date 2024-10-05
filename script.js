// Functions without Parameters
//  1. Write a function named `greet` that prints "Hello, World!" to the console.
function greet () {
console.log('Hello World!');
}
//  2. Call the `greet` function to ensure it works as expected.
greet();

//   Functions with Parameters
//   1. Write a function named `addNumbers` that takes two parameters, `a` and `b`.
// 2. Inside the function, print the sum of `a` and `b`.
// 3. Call the `addNumbers` function with different sets of numbers to demonstrate its functionality.
function addNumbers (a, b) {
sum = a + b;
console.log(sum);
}
addNumbers(100, 200);

//   Functions with Return Statements
// 1. Write a function named `multiply` that takes two parameters, `x` and `y`.
// 2. Inside the function, return the product of `x` and `y`.
// 3. Store the returned value in a variable and print it to the console to ensure the function works as expected.
function multiply(x, y) {
    return x * y;
}

const result = multiply(9, 8);
console.log(result); 
//   Combining Functions
// 1. Write a function named `calculateRectangleArea` that takes two parameters, `length` and `width`.
// 2. Inside the function, use the `multiply` function from the previous task to calculate the area of the rectangle and return the result.
// 3. Call the `calculateRectangleArea` function and print the result to the console.

function calculateRectangleArea (length, width) {
return multiply(length, width);
}
const length = 50;
const width = 30;
const area = calculateRectangleArea(length, width);
console.log(`The area of the rectangle is: ${area}`);

// Default Parameters
//   1. Write a function named `greetUser` that takes one parameter, `name`, with a default value of "Guest".
// 2. Inside the function, print a message saying "Hello, [name]!".
// 3. Call the `greetUser` function with and without passing an argument to demonstrate the default parameter functionality.

function greetUser(name) {
    console.log(`hello , ${name}`);
}
greetUser("Divyaja!");