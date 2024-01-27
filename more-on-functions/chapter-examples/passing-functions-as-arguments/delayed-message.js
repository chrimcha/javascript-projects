///(setTimeout) is a built in function that allows programmers to pass a function while specifying that it should be called at a later point in time
/// It's Basic Syntax; (1 second = 1000 milliseconds)
// setTimeout(func, delayInMilliseconds);

function printMessage() {
    console.log("The future is now!");
}

// setTimeout(printMessage, 5000); // 5 secs delay
// setTimeout(printMessage, 10000); // 10 secs delay
// the function printMessage is being passed to setTimeout the same as any other argument

//another way to use an anonymous function within setTimeout's argument
setTimeout(function () {
    console.log("The future is now!");
}, 5000);


