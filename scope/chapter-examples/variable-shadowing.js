const input = require('readline-sync');
//'Bob' is entered as name for user input
function hello(name) {
    console.log('Hello,', name); //returns bob as name
    name = 'Ruth';
    return doubleName(name);
}

function doubleName(name){
    console.log(name+name); // returns RuthRuth (name is reassigned to 'Ruth' in line 7)
    return name+name;
}

let name = input.question("Please enter your name: "); //returns Bob

hello(name); // returns RuthRuth (name is reassigned to 'Ruth' in line 7)
doubleName(name); // returns BobBob
console.log(name); // returns Bob
