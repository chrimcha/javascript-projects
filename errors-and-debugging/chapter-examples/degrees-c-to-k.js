const input = require('readline-sync');

let degreesC = input.question('Temp in degrees C: ');
degreesC = Number(degreesC);
let degreesK = degreesC + 273.15;

console.log('Degrees K:', degreesK);

//before fixing logic error, out put is 'Temp in degrees C: 100 Degrees K: 100273.15'
//after fixing logic error, out put is 'Temp in degrees C: 100 Degrees K: 373.15'