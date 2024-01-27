function decreasingSum(integer) {
   if (integer === 1){
      return integer;
   } else {
      //call decreasingSum function again
   }
}

console.log(decreasingSum(5));

//options:
//   1. return integer + (integer-1); // 9
//   2. return integer + (decreasingSum(integer)); // RangeError: Maximum call stack size exceeded
//   3. return integer + (decreasingSum(integer-1)); /// 15 CORRECT ANSWER 
//   4. return decreasingSum(integer-1); // 1
