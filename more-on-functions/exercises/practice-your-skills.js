//Create an anonymous function and set it equal to a variable.

/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. 
*/

///my original answer
// let triplesValue = function(n) {

//     while (isNaN(n)) {
//         return console.log("ARRR!");
//     }

//     return console.log(n*3);

// };

// triplesValue("g");
// triplesValue("$");
// triplesValue("4"); // should be "ARRR!" too?
// triplesValue(4);

///solution from textbook
// let practice = function(myArg) {
//    if (typeof myArg === "number") {
//       return myArg * 3;
//    }
// }

// console.log(practice(4));

///my modified solution
let triplesValue = function(n) {

    if (typeof n === "string") {
        return "ARRR!";
    } else if (typeof n === "number") {
        return n * 3;
    } else {
        return n;
    }

};

console.log(triplesValue("g"));
console.log(triplesValue("$"));
console.log(triplesValue("4")); //
console.log(triplesValue(4));

/* Add to your code! Use your function and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/

let arr = ['Elocution', 21, 'Clean teeth', 100];

let switchArrElements = arr.map(function(n) {
    return triplesValue(n);
});

console.log(arr);
console.log(switchArrElements);
