// let message = "Hello, World!";
// // message = "Goodbye";
// function printMessage() {
//    console.log(message);
//    message = "Goodbye";
// }

// printMessage(); //returns (Hello, World!)
// // message = "Goodbye";
// printMessage(); //returns blank, when the variable message is reassigned after the function 
// //both printMessage() returns (GoodBye)(Goodbye on each line) because the variable message was reassigned before the function
// //returns (Hello, World!) on one line then (Goodbye) on the next line when the variable message is reassigned within the function

//example of a function parameter having the same name as a variable that is in-scope
// let message = "Hello, World!";

// function printMessage(message) {
//     console.log(message);
// }

// printMessage("Goodbye"); //returns (Goodbye)

///(shadowing) is when a function parameter "casts it's shadow over" a variable of the same name, effectively hiding it, There is no good reason to intentionally use variable shadowing in your program, you should avoid naming variables and function parameters the same name, example below

// let message = "Hello, World!";

// function printMessage(message) {
//     console.log(message);
// }

// printMessage("Goodbye"); // returns (Goodbye)

///Check Your Understanding
//Questions
//What does the following code output?
let num = 42;

function isEven (num) { 
    return num % 2 === 0; 
}

console.log(isEven(43)); //outputs false

///Use Verb/Noun Pairs When Applicable
/*example
Good
   prepareForLiftoff
   fillFuelTank
   getCountdownStatus
   isReadyForLiftoff
Bad
   liftoff
   fillup
   countdownStatus
   isReady
*/

///Use Descriptive Names
/*example
Good
   convertCelsiusToFahrenheit
   isValidLaunchCode
   updateMissionControl
Bad
   convertC
   validCode
   msgToMC
*/

///Check Your Understanding
//Questions
//Which is the BEST name for the following function (below)? //answer = 2. calculateAreaOfCircle
// function myFunc(radius) {
//    let area = Math.PI * radius**2;
//    return area;
// }

///(function composition) or (composition) is the practice of using functions to build other functions


