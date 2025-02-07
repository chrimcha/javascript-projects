//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
console.log(language.slice(0, 1)+language.slice(4, 5));

//or use below code with template literal to return 'JS'
console.log(`${language.slice(0, 1)}${language.slice(4, 5)}`);

//2. Without using slice(), use method chaining to accomplish the same thing.
console.log(language.replace("ava", "").replace("cript", ""));

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
let initials = language.slice(0, 1)+language.slice(4, 5);

console.log(`The abbreviation for '${language}' is '${initials}'.`);

//or use code below to return same as above
console.log(`The abbreviation for '${language}' is '${language[0]+language[4]}'.`);

//or use code below to return same as above
console.log(`The abbreviation for '${language}' is '${language.slice(0, 1)+language.slice(4, 5)}'.`);

//4. Just for fun, try chaining 3 or more methods together, and then print the result.
console.log(language.replace("J","L").toUpperCase().repeat(3));

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.
let notTitleCase = 'title case';

console.log(`${notTitleCase.charAt(0).toUpperCase()+notTitleCase.substring(1).toLowerCase().slice(0, 5)}${notTitleCase.charAt(6).toUpperCase()+notTitleCase.substring(7).toLowerCase()}`);
