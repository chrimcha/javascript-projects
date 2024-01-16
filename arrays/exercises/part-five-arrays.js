let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
// the purpose of the () for strings is to indicate where to split the sting onto separate strings 
console.log(str.split()); //returns string as is
console.log(str.split('e')); //returns string split at each 'e' and removes the 'e''s as well
console.log(str.split(' ')); //returns string split at each space
console.log(str.split('')); //returns string split at every character

//2) Use the join method on the array to identify the purpose of the parameter inside the ().
// the purpose of the () for arrays is to indicated how to/what format joins items in array together
console.log(arr.join()); //returns array as is, commas with no spaces
console.log(arr.join('a')); //returns array joined with 'a''s in between every item, no spaces 
console.log(arr.join(' ')); //returns array joined with a space in between every item
console.log(arr.join('')); //returns array joined without spaces or commas between every item

//3) Do split or join change the original string/array? NO
console.log(str);
console.log(arr);

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";

console.log(cargoHold.split(',').sort().join(','));
