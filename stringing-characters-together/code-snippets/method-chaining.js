//String methods can be combined in a process called method chaining.

let word = 'JavaScript';

console.log(word.toUpperCase());
//Returns ``JAVASCRIPT``

//What does ``word.slice(4).toUpperCase()`` return?
console.log(word.slice(4).toUpperCase()); //returns SCRIPT

//Experiment with other combinations (chains) of string methods.
console.log(word.slice(4,7).toLowerCase()); //returns scr
console.log(word.slice(0,4).toUpperCase()); //returns JAVA
console.log(word.slice(9).toUpperCase()); //returns T