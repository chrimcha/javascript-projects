//the for loop
for (let i = 0; i < 51; i++) {
  console.log(i);
}

//the above for loop as a while loop
let i = 0;

while (i < 51) {
  console.log(i);
  i++; // if the do not have the update expression (in this case i++), then is creates an infinite loop
}

let n = 10;
let answer = 1;

while (n  0) {
   answer = answer + n;
   n = n + 1;
}

console.log(answer);