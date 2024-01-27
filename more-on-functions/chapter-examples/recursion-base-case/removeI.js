///Check Your Understanding
//Question
//We can use recursion to remove all of the ‘i’ entries from the array ['One', 'i', 'c', 'X', 'i', 'i', 54].
 //Consider the code sample below, which declares the removeI function.
 
function removeI(arr) {
    if (/*enter base case test here*/){
      return arr;
    } else {
      arr.splice(arr.indexOf('i'),1);
      return removeI(arr);
    }
};

let arrayToChange = ['One', 'i', 'c', 'X', 'i', 'i', 54];

console.log(removeI(arrayToChange));

  //options:
  // 1. !arr.includes('i') ///yes (base case)
  // 2. arr.includes('i') //no
  // 3. arr.indexOf('i')===-1 ///yes (base case)
  // 4. arr.indexOf('i') !== -1 //no

