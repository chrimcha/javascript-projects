///(The Array Method map) does not alter array, allows every element is array to be mapped or translated using a given function and it goes through the following steps:

// The Basic Syntax:
// let mappedArray = someArray.map(functionName);

/*When the map method executes, the following actions occur:

   1. The first element in someArray is passed into functionName as an argument.
   2. functionName executes and returns a new value.
   3. The return value is added to mappedArray.
   4. Steps 1 - 3 repeat for each element in someArray.

When complete, mappedArray, contains each of the individual return values from the mapping function, functionName.*/

/*//Example
//This program has the same output as the one immediately above. The mapping function is defined anonymously within the call to map.

let nums = [3.14, 42, 4811];

let doubled = nums.map(function (n) {
    return n*2;
});

console.log(doubled);*/

///Question
///Use the map method to map an array of strings. For each name in the array, map it to the first initial.
let names = ["Chris", "Jim", "Sally", "Blake", "Paul", "John", "Courtney", "Carly"];

// TODO: Write a mapping function
// and pass it to .map()
let firstInitials = names.map(function(n) {
    return n[0];
});

console.log(firstInitials);
