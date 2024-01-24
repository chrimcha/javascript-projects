///Does our isPalindrome function work? Run it yourself to see!
//answer = NO, prints nothing (until I added a console.log to the return statement in the isPalindrome function)

function reverse(str) {
   return str.split('').reverse().join('');
}

function isPalindrome(str) {
   let question = console.log(`Is ${str} a palindrome? `);
   return console.log(reverse(str) === str);
}

isPalindrome("LaunchCode");
isPalindrome("tacocat");
isPalindrome("banana");