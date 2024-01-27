///example: A Generic Input Validator

const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

// TODO 1: write a validator 
// that ensures input starts with "a"
let inputStartsWithA = function(n) {
  return n[0] === "a";
};

// TODO 2: write a validator ||| ask in class is this is what they are asking me to do or is it to ask if any one letter is a vowel (works right now with string I used for prompt)|||
// that ensures input is a vowel
let isAVowel = function(n) {
  return n === "a e i o u y";
};

// Be sure to test your code!
console.log(getValidInput("What is the first vowel in the alphabet? ", inputStartsWithA));
console.log(getValidInput("What letters are vowels? ", isAVowel));

///another example of this code with different validators
function getValidInput(prompt, isValid) {

    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
    console.log("Invalid input. Try again.");
    userInput = input.question(prompt);
    }

    return userInput;
}

let isValidPassword = function(password) {

    // Passwords should have at least 8 characters
    if (password.length < 8) {
    return false;
    }

    return true;
};

console.log(getValidInput('Create a password: ', isValidPassword));
