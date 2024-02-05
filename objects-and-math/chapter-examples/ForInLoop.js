let tortoiseOne = {
   species: "Galapagos Tortoise",
   name: "Pete",
   weight: 919,
   age: 85,
   diet: ["pumpkins", "lettuce", "cabbage"]
//    sign: function() {
//       return this.name + " is a " + this.species;
//   }
};

console.log(tortoiseOne["name"]); //bracket  notation
// console.log(tortoiseOne.name); //dot notation

//(objects) are mutable (example below)
// console.log(tortoiseOne.weight); //prints 919 (uses dot notation)

// newWeight = tortoiseOne.weight + 10; //add current tortoise weight + 10 to a variable (uses dot notation)

// tortoiseOne["weight"] = newWeight; //tortoise weight is now changed to new weight (uses bracket syntax)

// console.log(tortoiseOne["weight"]); //prints new changed weight of 929 (uses bracket syntax)

// Using a for..in loop, iterate through each property in the tortoiseOne object and print the value to the console.

for (item in tortoiseOne) {
   console.log(item + ": " + tortoiseOne[item]);
}

///(for...in) loops are specifically designated to loop through the properties of an object, each iteration of a loop accesses a key in the object, the loop stops once it has accessed every property, can only use (bracket syntax) to access property values
