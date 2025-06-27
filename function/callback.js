// A callback function is:
// 1. a function passed as an argument to another function.
// 2. Then callback function is executed inside another function


function xFunction(callback){
    console.log('--- Calling function x -----');

    //To control the order of execution (especially for asynchronous tasks
    // callback();
}
// declaring a yFunction
function yFunction(b){
    console.log('--- Calling function y -----');
}

xFunction(yFunction);
xFunction(yFunction());

// Real-world: Set Timeout
// after 2 seconds (2000 miliseconds)
setTimeout(delayMessage, 2000);

function delayMessage(){
    console.log("surprise! This logic runs after 2 second delay")
};

// Array Methods using Callbacks
let numbers = [1,2,3,4,5,6];
numbers.forEach(function(number){
    console.log(number*2) //doubles each number
})