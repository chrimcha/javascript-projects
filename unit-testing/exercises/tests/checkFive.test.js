const test = require('../checkFive.js');

describe("checkFive", function(){

    //original description
    // it("if number is less than 5 return '(num) is less than 5.'", function() {
    //     let output = test.checkFive(2);
    //     expect(output).toEqual("2 is less than 5.");
    // });

    it("returns 'num is less than 5' when num < 5.", function() {
        let output = test.checkFive(2);
        expect(output).toBe("2 is less than 5.");
    });

    it("returns 'num is equal to 5' when num === 5.", function() {
        let output = test.checkFive(5);
        expect(output).toBe("5 is equal to 5.");
    });

    it("returns 'num is greater than 5' when num > 5.", function() {
        let output = test.checkFive(7);
        expect(output).toBe("7 is greater than 5.");
    });

});