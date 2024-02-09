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
    expect(launchcode.launchOutput(18)).toBe('LaunchCode!');
  });

  test("numbers divisible by 2 and 5 should return 'Launch Rocks! (CRASH!!!!)'", function() {
    expect(launchcode.launchOutput(10)).toBe('Launch Rocks! (CRASH!!!!)');
  });

  test("numbers divisible by 3 and 5 should return 'Code Rocks!'", function() {
    expect(launchcode.launchOutput(15)).toBe('Code Rocks!');
  });

  test("numbers divisible by 2 and 3 and 5 should return 'LaunchCode Rocks!'", function() {
    expect(launchcode.launchOutput(30)).toBe('LaunchCode Rocks!');
  });

  test("numbers NOT divisible by 2 and 3 and 5 should return 'Rutabagas! That doesn't work.'", function() {
    expect(launchcode.launchOutput(7)).toBe("Rutabagas! That doesn't work.");
  });

});