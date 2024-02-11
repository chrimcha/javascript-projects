// Use terminal commands to see what happens when we call Astronaut but do not pass in 3 arguments. //answer: the empty areas are returned as (undefined)

// Next, set default values for 1 or more of the parameters in constructor.

class Astronaut {
   constructor(name = "name", age = "age", mass = "mass"){
     this.name = name;
     this.age = age;
     this.mass = mass;
   }
}

// let tortoise = new Astronaut('Speedy', 120, 180);
// let tortoise = new Astronaut();
let tortoise = new Astronaut("Peggy", 3, 15, "apples");

console.log(tortoise.name, tortoise.age, tortoise.mass);

// What happens if we call Astronaut and pass in MORE than 3 arguments? TRY IT! 
//answer: it only prints the items that have a key/value spot in the object


