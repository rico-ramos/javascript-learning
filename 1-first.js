console.log("Hello, Javascript :D");
console.info("Today is absolutely wonderful!");
console.debug('your first JS debug code') //visible during debugging section
console.error('This is an error statement'); //to generate error messaging
console.warn("This is a warning statement"); //to generate warning

// Javascript is loosely typed
    // You don't have to declare variable types - They are changeable
    // Define
// JavaScript variables are declared at runtime

var data1 = false
var data = 5;  // data is a number
data = "Hello"; // now data is a string
data = true; // now data is a boolean value

console.log(data);

// Example: Strict Typing (Using TypeScript)
// let data:number = 5; // data is number type
// data = 'Hello'; //Error: Type 'string' is not assignable to type 'number'