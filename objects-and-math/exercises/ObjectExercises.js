let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function () {return Math.floor(Math.random()*11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function () {return Math.floor(Math.random()*11)}
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function () {return Math.floor(Math.random()*11)}
};

let beagleOne = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function () {return Math.floor(Math.random()*11)}
};

let tardigradeOne	= {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID:5,
   move: function () {return Math.floor(Math.random()*11)}
};

// After you have created the other object literals, add the astronautID property to each one.
let crewMembers = [superChimpOne, superChimpTwo, salamander, beagleOne, tardigradeOne]

// for (let i = 0; i < crewMembers.length; i++) {
//    return crewMembers[i]["astronautID"] = Math.ceil(Math.random()*10);
// }

// for (let i = 0; i < crewMembers.length; i++) {
//    return crewMembers[i]["move"] = function () {return Math.floor(Math.random()*11)}
// }

// Create an array to hold the animal objects.
// Print out the relevant information about each animal.
// console.log(crewMembers);

// Start an animal race!

function crewReport(object) {
   return `${object["name"]} is a ${object["species"]}. They are ${object["age"]} years old and ${object["mass"]} kilograms. Their ID is ${object["astronautID"]}.`;
}

// console.log(crewReport(superChimpOne));

// function fitnessTest(array) {
//    let results = [];
//    let numOfTurns = 0;

//    for (let i = 0; i < array.length; i++) {
//       let currentMove = array[i].move()

//       if (currentMove < 20) {
//          currentMove = currentMove + array[i].move();
//          numOfTurns += 1;
//       } else if (currentMove >= 20) {
//          numOfTurns += 1;
//          results.push(`${array[i]["name"]} took ${numOfTurns} turns to take 20 steps.`);
//       }
//    };
   
//    return results;
// }

// console.log(fitnessTest(crewMembers));

// console.log((superChimpOne.move()));
// console.log((superChimpOne.move()));

function fitnessTest(array) {
   let results = [];
   

   for (let i = 0; i < array.length; i++) {
      let currentMove = 0;
      let numOfTurns = 0;

      while (currentMove <= 20) {
         currentMove += array[i].move();
         numOfTurns++;
      }

      results.push(`${array[i]["name"]} took ${numOfTurns} turns to take 20 steps.`);
   };

   return results;
}

console.log(fitnessTest(crewMembers));

// function fitnessTest(object) {
//    let results = [];
//    let numOfTurns = 1;
//    let currentMove = object.move() + object.move();
//    console.log(`1st: ${currentMove} \n`);
//    let totalSteps = currentMove;
//    let nextMove = currentMove + object.move();

//    if (currentMove < 20) {
//       numOfTurns += 1;
//       console.log(`2nd: ${currentMove}`);
//       results.push(`${object["name"]} took ${numOfTurns} turns to take ${totalSteps} steps. But it was not enough to win the race.`);
//    } else if (currentMove >= 20) {
//       numOfTurns += 1;
//       results.push(`${object["name"]} took ${numOfTurns} turns to take 20 steps.`);
//    }
   
//    console.log(numOfTurns);

//    return results;
// };


// console.log(fitnessTest(crewMembers[0]));