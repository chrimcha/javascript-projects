// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg + " kg";
let fuelMassKg = 760000 + " kg";
let shuttleMassKg =	74842.31 + " kg";
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000 + " kg";
let fuelTempCelsius = -225 + " °C";
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel =	100 + "%";
let weatherStatus =	"clear";
let preparedForLiftOff = true;
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7) {
    console.log ("Conditions are met!");
} else {
    console.log ("Conditions NOT met!");
} 

if (astronautStatus === "ready") {
    console.log ("Conditions are met!");
} else {
    console.log ("Conditions NOT met!");
} 

if (totalMassKg < maximumMassLimit) {
    console.log ("Conditions are met!");
} else {
    console.log ("Conditions NOT met!");
} 

//not met for some reason
if (fuelTempCelsius >= -300 || fuelTempCelsius <= -150) {
    console.log ("Conditions are met!");
} else {
    console.log ("Conditions NOT met!");
} 

if (fuelLevel === 100 + "%") {
    console.log ("Conditions are met!");
} else {
    console.log ("Conditions NOT met!");
} 

if (weatherStatus === "clear") {
    console.log ("Conditions are met!");
} else {
    console.log ("Conditions NOT met!");
} 

// add logic below to verify all astronauts are ready

// add logic below to verify the total mass does not exceed the maximum limit of 850000

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

// add logic below to verify the fuel level is at 100%

// add logic below to verify the weather status is clear

// Verify shuttle launch can proceed based on above conditions

console.log ();
console.log (".....................................................");
console.log ("Date: " + date);
console.log ("Time: " + time);
console.log ("Astronaut Count: " + astronautCount);
console.log ("Crew Mass: " + crewMassKg);
console.log ("Fuel Mass: " + fuelMassKg);
console.log ("Shuttle Mass: " + shuttleMassKg);
console.log ("Total Mass: " + totalMassKg);
console.log ("Fuel Temperature: " + fuelTempCelsius);
console.log ("Weather Status: " + weatherStatus);
console.log (".....................................................");
console.log ("Have a safe trip astronauts!!");