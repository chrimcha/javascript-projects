//1) Create a function with an array of numbers as its parameter. The function should iterate through the array and return the minimum value from the array. Hint: Use what you know about if statements to identify and store the smallest value within the array.

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Using one of the test arrays as the argument, call your function inside the console.log statement below.

function minValue(array) {
    let min = array[0];
    
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
        return min;
}

// console.log(minValue(nums3));

function sortArray(array) {
    newArr = [];

    while(array.length !== 0) {
        let minimum = minValue(array);
        newArr.push(minimum);
        array.splice(array.indexOf(minimum), 1);  
    }
    return newArr;
}

console.log(sortArray(nums1));
console.log(sortArray(nums2));
console.log(sortArray(nums3));
