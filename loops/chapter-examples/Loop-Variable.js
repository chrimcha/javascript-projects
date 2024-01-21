// Experiment with this loop by modifying each of the following: the variable initialization, the boolean condition, and the update expression.

// for (let i = 0; i < 51; i++) {
//    console.log(i); //prints 0-50 each on it's own line
//  }
 
// for (let i = 0; i < 51; i--) {
//   console.log(i); //with the update expression as i-- this for loop creates an infinite loop of negative numbers
// }

// for (let i = 45; i < 51; i++) {
//   console.log(i); //prints 45-50 each on it's own line
// }

// for (let i = 0; i < 30; i++) {
//   console.log(i); //prints 0-29 each on it's own line, the 30 is not printed, it just prints the index before 30 (or whatever the second part of this boolean condition is)
// }

for (let i = 0; i < 51; i + 10) {
  console.log(i); //with the i + 10, this one creates an infinite loop
}