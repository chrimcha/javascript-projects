let num = 1001;

//Returns 'undefined'.
// console.log(num.length);

// //Use type conversion to print the length (number of digits) of an integer.
// console.log(num.toString().length); //returns 4

//or could use code below to achieve the same result as above
//num = String(num); //converts num to a string, so that we can use length to return the number integers as characters
//console.log(num.length); //returns 4, since there are 4 integers in 1001
//console.log(typeof num); //returns string, because num was converted to a string

////Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
// num = 123.45;

// console.log(num.toString().replace(".","").length); //returns 5

//or could use below to acheive the same result as above
// num = String(num);
// console.log(num.length); //returns 6 
// console.log(num.replace(".","").length); //returns 5

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
num = 1234

if (num.toString().includes(".")) {
    console.log(`Decimal has ${num.toString().replace(".","").length} numbers.`);
} else {
    console.log(`Integer has ${num.toString().length} numbers.`);
}

num = 1234.56

if (num.toString().includes(".")) {
    console.log(`Decimal has ${num.toString().replace(".","").length} numbers.`);
} else {
    console.log(`Integer has ${num.toString().length} numbers.`);
}

//solution from textbook
if (String(num).includes('.')) {
    console.log(String(num).length-1);
} else {
    console.log(String(num).length);
}
