
let launchcode = {
  organization: "nonprofit",
  executiveDirector: "Jeff",
  percentageCoolEmployees: 100,
  programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
  launchOutput: function (num) {
    if (num % 2 !== 0 && num % 3 !== 0 && num % 5 !== 0){
        return "Rutabagas! That doesn't work.";
    } else if (num % 2 === 0 && num % 3 === 0 && num % 5 === 0){
        return 'LaunchCode Rocks!';
    } else if (num % 2 === 0 && num % 3 === 0) {
        return "LaunchCode!";
    } else if (num % 2 === 0 && num % 5 === 0) {
        return 'Launch Rocks! (CRASH!!!!)';
    } else if (num % 3 === 0 && num % 5 === 0) {
        return 'Code Rocks!';
    } else if (num % 2 === 0) {
        return "Launch!";
    } else if (num % 3 === 0) {
        return "Code!";
    } else if (num % 5 === 0) {
        return "Rocks!";
    } 
  }
}

/*
```js
let launchcode = {
  organization: 'nonprofit',
  executiveDirector: 'Jeff',
  percentageCoolEmployees: 100,
  programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
  launchOutput: function(num) {
    if(num%5===0 && num%3===0 && num%2 ===0){
      return 'LaunchCode Rocks!'
    };

    while(num %2 ===0) {
      if(num%3 === 0) {
        return 'LaunchCode!'
      } else if(num%5===0) {
        return 'Launch Rocks!'
      } else {
    return 'Launch'
      }  
    };
    while(num%3===0) {
      if(num%5===0) {
        return 'Code Rocks!'
      }else {
        return 'Code!'
      }
    };
    
    if(num%5===0) {
      return 'Rocks!'
    } else{
      return "Rutabagas! That doesn't work."
    };
  
  }

};```
*/
// console.log(launchcode.launchOutput(3));

// while (num % 2 === 0) {

//     if (num % 3 === 0) {
//         return 'LaunchCode!';
//     } else {
//        return 'Launch!';
//     }

//     // return 'Launch!';
//     }

module.exports = launchcode;

