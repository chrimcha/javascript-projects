///Check Your Understanding
///Question
///Convert the following named function to an anonymous function that is stored in a variable.

//Refactored to Anonymous Function |||not sure I did this right, could as in studio if lecture doesn't go over it|||

// let reverse = function (str) {
//   let lettersArray = str.split('');
//   let reversedLettersArray = lettersArray.reverse();
//   return reversedLettersArray.join('');
// };

// console.log(reverse("LaunchCode"));

//Original Function
// function reverse(str) {
//   let lettersArray = str.split('');
//   let reversedLettersArray = lettersArray.reverse();
//   return reversedLettersArray.join('');
// }

// console.log(reverse("LaunchCode"));

///Question
///Consider the code sample below, which declares an anonymous function beginning on line 1.

let f1 = function(str) {
    return str + str;
};

let f2 = f1;

//Which of the following are valid ways of invoking the anonymous function with the argument "abcd"? (Choose all that apply.)

1. f1("abcd"); //no
2. function("abcd"); //yes
3. f2("abcd"); //yes


