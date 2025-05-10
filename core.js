// Problem 1: Why did the code produce that output? If applicable, how would you get the index value that did not output?
const cars = ['Tesla', 'Mercedes', 'Honda'];
const [ randomCar ] = cars;
const [ ,otherRandomCar ] = cars;

// Prediction:
// console.log(randomCar) → 'Tesla'
// console.log(otherRandomCar) → 'Mercedes'
// Output Explanation: Destructuring assigns the first element to randomCar. The comma skips the first element, assigning the second to otherRandomCar.
// To get the third element ('Honda'), use: const [,,thirdCar] = cars; console.log(thirdCar);

// Problem 2: Why did the code produce that output? What would you need to do to solve any potential problems?
const employee = {
    employeeName: 'Elon',
    age: 47,
    company: 'Tesla'
};
const { employeeName: otherName } = employee;

// Prediction:
// console.log(otherName) → 'Elon'
// console.log(employeeName) → ReferenceError
// Explanation: The destructuring renames employeeName to otherName. Accessing employeeName directly throws an error. Fix by using otherName or avoid renaming.

// Problem 3: Why did the code produce that output? How to alter code without changing console.log?
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
};
const password = '12345';
const { password: hashedPassword } = person;  

// Prediction:
// console.log(password) → '12345'
// console.log(hashedPassword) → undefined
// Explanation: person has no password property, so hashedPassword is undefined. To fix, add a default: const { password: hashedPassword = 'default' } = person;

// Problem 4: Why did the code produce that output? Declare a variable for the 4th index.
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; // 2
const [,,,second] = numbers; // 5
const [,,,,,,,,third] = numbers; // 2

// Prediction:
// console.log(first === second) → false (2 vs 5)
// console.log(first === third) → true (2 vs 2)
// To get the 4th index (value 6): const fourthIndex = numbers[4]; console.log(fourthIndex);

// Problem 5: Why the output? Log the last value in secondKey's array.
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
};
const { key } = lastTest; // 'value'
const { secondKey } = lastTest; // [1,5,1,8,3,3]
const [ ,willThisWork] = secondKey; // 5

// Prediction:
// console.log(key) → 'value'
// console.log(secondKey) → [1,5,1,8,3,3]
// console.log(secondKey[0]) → 1
// console.log(willThisWork) → 5
// Last value: console.log(secondKey[5]); // 3

// Problem 6: How many scopes? Define each. Output?
var beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (var index = 0; index < names.length; index++) {
      var name = names[index];
      console.log(name + ' at index ' + index);
    }
    console.log('After loop: ' + name + ':' + index);
  }
  actuallyPrintingNames();
}
printNames(beatles);

// Scopes: Global, printNames, actuallyPrintingNames (3 scopes).
// Output: Each name with index 0-3, then 'Ringo:4' (var is function-scoped).

// Problem 7: Why the output?
// Code uses let in loop:
// function actuallyPrintingNames() {
//   for (let index = 0; index < names.length; index++) {
//     let name = names[index];
//     console.log(...);
//   }
//   console.log(name + ':' + index); // ReferenceError
// }
// Explanation: let is block-scoped; name/index not accessible outside loop.

// Problem 8: Why the output? Explain variables.
const beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
      const name = names[index];
      console.log(name + ' at index ' + index);
    }
  }
  actuallyPrintingNames();
}
printNames(beatles);

// Output: Each name with correct index (0-3). let/const are block-scoped, ensuring each iteration has its own index/name. No errors as no post-loop access.

// Problem 9: Why the output? Explain logs.
const planet = {
    name: "Jupiter",
    milesFromSun: 49849,
    mass: 393983,
    composition: ["gas", "liquid", "oxygen"]
};
const planetCopy = {...planet};

// console.log(planet.composition[0] === planetCopy.composition[0]) → true (same reference)
// console.log(planet === planetCopy) → false (different objects)
// Explanation: Spread creates a shallow copy. Composition array is shared, hence [0] elements are ===. Objects are different references.