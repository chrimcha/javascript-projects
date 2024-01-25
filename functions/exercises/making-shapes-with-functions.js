///Write a function makeLine(size) that returns a line with exactly size hashes.
// function makeLine(size) {
//     let lineCharacter = "#";

//     if (size < 1) {
//     return lineCharacter = "Sorry, cannot have less than 1 repeats.";
//     }  else {
//     return lineCharacter.repeat(size);
//     }  
// }

// console.log(makeLine(5));

//solution from textbook
function makeLine(size, singleCharacter = '#') {
    let line = '';
    for (let i = 0; i < size; i++) {
      line += singleCharacter;
    }
    return line;
}

// console.log(makeLine(5, 'H'));

///Write a function called makeSquare(size) that returns a size by size string of hashes. The function should NOT print each row of the square. Instead, it must return a single string that contains the entire shape.
function makeSquare(size, singleCharacter = '#') {
    let newRow = ''; 
    for (let i = 0; i < size; i++) {
        newRow += makeLine(size, singleCharacter) +  '\n';
    }
    return newRow.slice(0, -1);
}

// console.log(makeSquare(5, 'H'));

///Write a function makeRectangle(width, height) that returns a rectangle with the given width and height. Use your makeLine function to do this.
function makeRectangle(width, height, singleCharacter = '#') {
    let rectangle = '';

    for (let i = 0; i < height; i++) {
        rectangle += makeLine(width, singleCharacter) + '\n';
    }

    return rectangle.slice(0, -1);
}
//or
// function makeRectangle(width, height) {
//     let rectangle = '';

//     for (let i = 0; i < height - 1; i++) {
//      rectangle += makeLine(width) + '\n';
//     }

//     rectangle += makeLine(width);
//     return rectangle;
// }
//or
// function makeRectangle(width, height) {
//     let rectangle = makeLine(width);

//     for (let i = 1; i < height; i++) {
//         rectangle += '\n' + makeLine(width);
//     }

//     return rectangle;
// }

// console.log(makeRectangle(5, 3, 'H'));

///Write a function makeDownwardStairs(height) that prints the staircase pattern shown below, with the given height. Use your makeLine function to do this.
function makeDownwardStairs(height, singleCharacter = '#') {
    let stairs = '';

    for (let i = 1; i <= height; i++) {
        stairs += makeLine(i, singleCharacter) + '\n';
    }

    return stairs.slice(0, -1);
}

// console.log(makeDownwardStairs(5, 'H'));

// console.log("Cooooookie".slice(0, -3)); // (0, -1) the end slice negative index cuts off the last 1 character from the string returning "Cooooooki"; (0, -3) would give me "Coooooo", ect.

//solutions from textbook
// function makeDownwardStairs(height) {
//     let stairs = '';
//     for (let i = 0; i < height; i++) {
//       stairs += (makeLine(i+1) + '\n');
//     }
//     return stairs.slice(0, -1);
// }

///Write a function makeSpaceLine(numSpaces, numChars) that returns a line with exactly the specified number of spaces, followed by the specified number of hashes, followed again by numSpaces more spaces.
function makeSpaceLine(numSpaces, numChars, singleCharacter = '#') {
    let spacedLine = '';

    for (let i = 0; i < numSpaces; i++) {
        spacedLine += ' ';
    }

    spacedLine += makeLine(numChars, singleCharacter);
   
    for (let i = 0; i < numSpaces; i++) {
        spacedLine += ' ';
    }

    return spacedLine;
}

// console.log(makeSpaceLine(3, 5, 'H'));

///Write a function makeIsoscelesTriangle(height) that returns a triangle of the given height.
function makeIsoscelesTriangle(height, singleCharacter = '#') {
    let newTriangle = '';

    for (let i = 0; i < height; i++) {
        newTriangle += makeSpaceLine((height - i - 1), (2 * i + 1), singleCharacter) + "\n";
    }

    return newTriangle.slice(0, -1);
}

// console.log(makeIsoscelesTriangle(5, 'H'));

///Write a function makeDiamond(height) that returns a diamond where the triangle formed by the top portion has the given height.
function reverse(str) {
    let reversed = '';

    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }

    return reversed;
}

// console.log(reverse(makeIsoscelesTriangle(5, 'H')));

function makeDiamond(height, singleCharacter = '#') {
    let diamond = makeIsoscelesTriangle(height, singleCharacter) + "\n" + reverse(makeIsoscelesTriangle(height, singleCharacter));

    return diamond;
}

console.log(makeDiamond(5, '&'));

///Bonus Mission
///Refactor your functions so that they take a single character as a parameter, and draw the shapes with that character instead of always using '#'. Make the new parameter optional, with default value '#'.
//DONE!!