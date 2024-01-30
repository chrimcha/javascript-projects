//The following concept check assumes that only positive integers are passed to the function.
const input = require('readline-sync');

function getValidInput(prompt, isValid) {

  // Prompt the user, using the prompt string that was passed
  let userInput = input.question(prompt);

  // Call the boolean function isValid to check the input
  while (!isValid(userInput)) {
  console.log("Invalid input. Try again.");
  userInput = input.question(prompt);
  }

  return userInput;
}

function factorial(integer){
  if (integer === 1){
    return integer;
  } else {
    return integer*(factorial(integer-1));
  }
}

let isPositiveNum = function(n) {
  return n > 0;
};

let isNumber = function(n) {
<<<<<<< HEAD
  return typeof n === "string";
=======
  return isNaN(n) === "number";
>>>>>>> 6be0853788cc3a1c4987f43234bb4b72a779b703
};

let includesDecimal = function(n) {
  return String(n).includes(".");
};


console.log(factorial(getValidInput("Enter a positive number: ", isPositiveNum)));
<<<<<<< HEAD
// console.log(factorial(getValidInput("Enter a number: ", isNumber))); //need to fix isNumber
=======
console.log(factorial(getValidInput("Enter a number: ", isNumber))); //need to fix isNumber
>>>>>>> 6be0853788cc3a1c4987f43234bb4b72a779b703
console.log(factorial(getValidInput("Enter a number: ", includesDecimal))); //need to fix


//options:
// 1.  integer === 1 /// 24 (base case)
// 2.  integer < 1 // 0
// 3.  integer === 0 // 0
// 4.  integer < 0 // -0


//Skill boost! Add validation to return an error message if the function is passed a string, negative number or a decimal value.
