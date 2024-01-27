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
  return isNaN(n) === String;
};

let includesDecimal = function(n) {
  return n.includes(".");
};


// console.log(factorial(getValidInput("Enter a positive number: ", isPositiveNum)));
//console.log(factorial(getValidInput("Enter a number: ", isNumber))); //need to fix isNumber
console.log(factorial(getValidInput("Enter a number: ", includesDecimal))); //need to fix


//options:
// 1.  integer === 1 /// 24 (base case)
// 2.  integer < 1 // 0
// 3.  integer === 0 // 0
// 4.  integer < 0 // -0


//Skill boost! Add validation to return an error message if the function is passed a string, negative number or a decimal value.
