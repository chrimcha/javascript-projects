///Use method chaining to reduce the reverse function to a single line. Open the link below the source code above to give it a shot.

function reverse(str) {
   return console.log(str.split("").reverse().join(""));
   // let lettersArray = str.split('');
   // let reversedLettersArray = lettersArray.reverse();
   // return reversedLettersArray.join('');
}

reverse("LaunchCode");
reverse("Too Many Hats!");