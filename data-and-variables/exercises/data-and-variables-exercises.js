// Declare and assign the variables below
const milesPerKm = 0.621;

let shuttleName = "Determination";
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 384400;

// Use console.log to print the 'typeof' each variable. Print one item per line.
/* 
console.log(typeof shuttleName); //string
console.log(typeof shuttleSpeedMph); //number
console.log(typeof distanceToMarsKm); //number
console.log(typeof distanceToMoonKm); //number
console.log(typeof milesPerKm); //number
*/

// Calculate a space mission below
let milesToMars = distanceToMarsKm * milesPerKm;
let hoursToMars = milesToMars / shuttleSpeedMph;
let daysToMars = hoursToMars / 24;

/*
console.log(milesToMars); //139725000
console.log(hoursToMars); //7984.285714285715
console.log(daysToMars); //332.67857142857144
*/

// Print the results of the space mission calculations below
console.log(shuttleName, "will take", daysToMars,  "days to reach Mars."); //Determination will take 332.67857142857144 days to reach Mars.

// Calculate a trip to the moon below
let milesToMoon = distanceToMoonKm * milesPerKm;
let hoursToMoon = milesToMoon / shuttleSpeedMph;
let daysToMoon = hoursToMoon / 24;

/*
console.log(milesToMoon); //238712.4
console.log(hoursToMoon); //13.64070857142857
console.log(daysToMoon); //0.5683628571428571
*/

// Print the results of the trip to the moon below
console.log(shuttleName, "will take", daysToMoon,  "days to reach the Moon."); //Determination will take 0.5683628571428571 days to reach the Moon.
