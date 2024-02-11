const test = require('../RPS.js');

describe("whoWon", function() {
    
    it("returns 'TIE!' if both players choose the same option", function(){
        let results = test.whoWon('rock', 'rock');
        expect(results).toBe('TIE!');
    });

    //original solution
    it("returns 'Player 2 wins!' if players2 chooses an option that wins against player1's chosen option", function(){
        expect(test.whoWon('scissors', 'rock')).toBe('Player 2 wins!');
        expect(test.whoWon('rock', 'paper')).toBe('Player 2 wins!');
        expect(test.whoWon('paper', 'scissors')).toBe('Player 2 wins!');
    });

    //solution from textbook
    // test("returns 'Player 2 wins!' if P1 = rock & P2 = paper", function(){
    //     let output = test.whoWon('rock','paper');
    //     expect(output).toBe("Player 2 wins!");
    // });
     
    //  test("returns 'Player 2 wins!' if P1 = paper & P2 = scissors", function(){
    //     let output = test.whoWon('paper','scissors');
    //     expect(output).toBe("Player 2 wins!");
    // });

    it("returns 'INVALID OPTION' if any player chooses an option other than 'rock','paper', or 'scissors'", function(){
        let results = test.whoWon('cannon', 'paper');
        expect(results).toBe('INVALID OPTION');
    });
});