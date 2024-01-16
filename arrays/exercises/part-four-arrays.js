let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

//Explore the methods concat, slice, reverse, and sort to determine which ones alter the original array.

//1) Print the result of using concat on the two arrays. 
//Does concat alter the original arrays? NO
//Verify this by printing holdCabinet1 after using the method.
console.log(holdCabinet1.concat(holdCabinet2));
console.log(holdCabinet1);
console.log(holdCabinet2);

//code below creates a new array to hold the concatenation of both cabinet arrays; this method does not change original arrays
//let newCabinet = holdCabinet1.concat(holdCabinet2);
//console.log(newCabinet);

//2) Print a slice of two elements from each array. Does slice alter the original arrays? NO
console.log(holdCabinet1.slice(1, 3));
console.log(holdCabinet1);

console.log(holdCabinet2.slice(3, 5));
console.log(holdCabinet2);

//3) reverse the first array, and sort the second. What is the difference between these two methods? .reverse reverses the array items completely and .sort sorts the array by numbers/integers first, then by strings in alphabetical order with and uppercase characters first then lower case
//Do the methods alter the original arrays? YES
console.log(holdCabinet1.reverse());
console.log(holdCabinet1);

console.log(holdCabinet2.sort());
console.log(holdCabinet2);