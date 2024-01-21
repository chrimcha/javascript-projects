let str = "blue";
let reversed = "";

for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed; //the order of the concatenation matter if you want this to return the string reversed
    // reversed = reversed + str[i]; //returns blue
}

console.log(reversed);