// Operations
let a = 12
let b = 3
let c = a



//Arthmetic Expressions
console.log("arithmetic operation: ", a + b);
console.log("Multiplication: ", a * b);
console.log("Subtraction: ", a - b);
console.log("c = a: ", c);
console.log("Division: ",a/b);
console.log("remainder/Modulo: ", a % 9);

//String Expressions
let firstName = "Jake";
let lastName = "Doe";
let fullName = firstName + " " + lastName; 

console.log(firstName + " " + lastName)
console.log(`His first name is: ${firstName}` );

let repeatedText = " Hello! ".repeat(3).trimEnd() + "!"; //Repeat text
console.log(repeatedText); 

let messageLength = repeatedText.length;
console.log(messageLength);

//Assignement Operations
let message1 = "Hi there, "
let message2 = "my name is John"

message1 += message2
console.log(message1) //Prints: "Hi there, my name is John"

let x = 3
let y = 4
let z = 5
{x -= y
console.log(x);}

z-=y
console.log(z);

let r = 13
let p = 3
let q = 20
let h = 7
console.log("r: ",r);
console.log("p: ",p);

console.log("r%p: ", r%p);
console.log("r+=p: ",r+=p);
console.log("r*=p: ", r*=p);
console.log("r-=p: ", r-=p);
console.log("r/=p: ", r/=p);
console.log("r**=p: ", r**=p);
q %= h
console.log("q %= h: ",q);




// Variables and Data Type Conversion

//implicit
let string1 = 'hello'
let number1 = 5
let combinedStrNum = string1 + number1;
console.log(combinedStrNum);

//explicit
let number2 = 123;
let numToString = String(number2);
// console.log(typeof String(number2));
console.log(typeof numToString);