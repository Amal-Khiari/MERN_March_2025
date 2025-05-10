//Problem 1:

const checkAge = age => age > 18 ? "You are good to go!" : "Sorry! You must be 18 or older!";
console.log(checkAge(15)); // You are good to go!
console.log(checkAge(20)); // Sorry! You must be 18 or older!

//Problem 2:

const checkRain = isRaining => isRaining ? "Get your rain jacket!" : "No rain on today's forecast!";
console.log(checkRain(true)); // Get your rain jacket!
console.log(checkRain(false)); // No rain on today's forecast!

// Problem 3:

const checkEven = num => num % 2 === 0 ? "That's an even number!" : "That's an odd number!";
console.log(checkEven(4)); // That's an even number!
console.log(checkEven(5)); // That's an odd number!

// Problem 4:

const compareNumbers = (a, b) => a > b ? `${a} is more than ${b}!` : `${a} is less than ${b}!`;
console.log(compareNumbers(5, 3)); // 5 is more than 3!
console.log(compareNumbers(2, 7)); // 2 is less than 7!

// Refactored with Implicit Returns

// Problem 1
const checkAge = age => age > 18 ? "You are good to go!" : "Sorry! You must be 18 or older!";

// Problem 2
const checkRain = isRaining => isRaining ? "Get your rain jacket!" : "No rain on today's forecast!";

// Problem 3
const checkEven = num => num % 2 ? "That's an odd number!" : "That's an even number!";

// Problem 4
const compareNumbers = (a, b) => `${a} is ${a > b ? 'more' : 'less'} than ${b}!`;