
const input = require('readline-sync');

let name = input.question("First Name: ");
let otherName = input.question("Last Name: ");

console.log("Last, First: " + otherName + " , " + name + " "); // creates three rows, one for each name then both


/* 
const input = require('readline-sync');

let num1 = input.question("Enter a number: ");
let num2 = input.question("Enter another number: ");

console.log(Number(num1) + Number(num2)); //entering text outputs NaN
*/

/* 
const input = require('readline-sync');

let info = input.question("Please enter your age: ");
//The user enters 25.

console.log(typeof info); // output is string
*/