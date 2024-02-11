//Try adding new properties inside constructor.
class Astronaut {
   constructor(name, age, mass, color, house){
     this.name = name;
     this.age = age;
     this.mass = mass;
     this.color = color;
     this.house = house;
   }
}
// console.log(Astronaut);
let fox = new Astronaut('Fox', 7, 12);
// fox["house"] = apartment; //can't do this to make key value use in object made with class?
// console.log(fox);
// console.log(fox.age, fox.color);

fox.age = 9;
fox.color = 'red';

// console.log(fox);
// console.log(fox.age, fox.color);

//Try modifying or adding properties below.

// Astronaut["house"] = 'house'
// console.log(fox);

// console.log(Astronaut);
// console.log(fox);
fox.house = 'apartment';

fox.color = 'brown';
console.log(fox);

let cat = new Astronaut('Cat', 6, 12, 'calico', 'apartment');
// cat.house = "apartment";
console.log(cat);