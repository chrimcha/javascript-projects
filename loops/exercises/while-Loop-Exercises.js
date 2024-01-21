//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

const input = require('readline-sync');

let launchCodeShuttle = "";
let startingFuelLevel = Number(input.question("Enter starting fuel level: "));
let astronautAboard = Number(input.question("Enter number of astronauts: "));

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

while (startingFuelLevel < 5000 || startingFuelLevel > 30000 || isNaN(startingFuelLevel)) {
  if (isNaN(startingFuelLevel)) {
    startingFuelLevel = input.question("Only accepts numbers. Enter a number: ");
  } else if (startingFuelLevel < 5000) {
    startingFuelLevel = input.question("Fuel cannot be less than 5000! Reenter a number: ");
  } else if (startingFuelLevel > 30000) {
    startingFuelLevel = input.question("Fuel cannot be greater than 30000! Reenter a number: ");
  }
}

console.log(`Fuel Level: ${startingFuelLevel}`);

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
while (astronautAboard > 7 || isNaN(astronautAboard) || astronautAboard < 0) {
  if (isNaN(astronautAboard)) {
    astronautAboard = input.question("Only Accepts numbers. Enter a number: ");
  } else if (astronautAboard > 7) {
    astronautAboard = input.question("Cannot have more than 7 astronauts. Reenter a number: ");
  } else if (astronautAboard < 0) {
    astronautAboard = input.question("Cannot have less than 0 astronauts. Reenter a number: ");
  }
}

console.log(`Astronauts Aboard: ${astronautAboard}`);
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
let altitude = 0;
let currentFuelLevel = startingFuelLevel;
while (currentFuelLevel - (100 * astronautAboard) > 0) {
  altitude = altitude + 50;
  currentFuelLevel = currentFuelLevel - (100 * astronautAboard);
  //console.log(`*** Current fuel level: ${currentFuelLevel}, Current altitude is: ${altitude}`);
}

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”
If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
if (altitude >= 2000) {
  console.log(`The shuttle gained an altitude of ${altitude} km. Orbit achieved!`);
} else {
  console.log(`The shuttle gained an altitude of ${altitude} km. Failed to reach orbit.`);
}

//solution form textbook
// let output = `The shuttle gained an altitude of ${altitude} km.`;

// if (altitude >= 2000) {
// output += " Orbit achieved!";
// }