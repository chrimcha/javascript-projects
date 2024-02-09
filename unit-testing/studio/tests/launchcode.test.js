// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("should have the property type called organization", function() {
    
    expect(launchcode.organization).toBe("nonprofit");
  });

  test("should have the property type called executiveDirector", function() {
    
    expect(launchcode.executiveDirector).toBe("Jeff");
  });

  test("should have the property type called percentageCoolEmployees", function() {
    
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });

  test("should have the property type called programsOffered", function() {
    expect(launchcode.programsOffered[0]).toBe("Web Development");
    expect(launchcode.programsOffered[1]).toBe("Data Analysis");
    expect(launchcode.programsOffered[2]).toBe("Liftoff");
    expect(launchcode.programsOffered.length).toBe(3);
  });

  test("numbers divisible by 2 should return 'Launch!'", function() {
    expect(launchcode.launchOutput(2)).toBe('Launch!');
  });

  test("numbers divisible by 3 should return 'Code!'", function() {
    expect(launchcode.launchOutput(3)).toBe('Code!');
  });

  test("numbers divisible by 5 should return 'Rocks!'", function() {
    expect(launchcode.launchOutput(5)).toBe('Rocks!');
  });

  test("numbers divisible by 2 and 3 should return 'LaunchCode!'", function() {
    expect(launchcode.launchOutput(3)).toBe('LaunchCode!');
    expect(launchcode.launchOutput(2)).toBe('LaunchCode!');
  });
});