// Import the modules exported from practiceExports.js below:
// const palindromeCheck = require('./practiceExports.js');

// console.log(typeof palindromeCheck); //returns "function"
// console.log(palindromeCheck('that')); //returns "false"
// console.log(palindromeCheck('radar')); // returns "true"

const practice = require('./practiceExports.js');

// console.log(typeof practice); //returns "object"
// console.log(practice); //returns the export object from practiceExports.js

let arr = ['Hello', 'World', 123, 987, 'LC101'];

console.log(practice.isPalindrome('mom'));
console.log(practice.evenOrOdd(9));

for (i=0; i < 3; i++){
    console.log(practice.randomArrayElement(arr));
}
