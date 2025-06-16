// Variables store information
// let, const, or var.
// Var — function level scope (not block)
// Let and Const — block level scope

// 1. Primitive Data Types
    // Number   Numeric values (integers, floats)
    // Sting    Textual data
    // Boolean  Logical value: true or false
    // Undefined    A variable declared but not assigned
    // Null intentionally empty
var userName = "Alice"; // String variable
let age = 45;  // number type
let isStudent = false; // boolean type
let noData; // undefined type
let firstName = null; // null type / object type (when printed)

var userName2 = "John";
let age2 = 24;
let isStudent2= false;
let noData2;
let firstName2 = null

// ---- Examples ----
let lightMode = 'white';
let darkMode = 'black';

console.log('==============');
console.log(userName);
console.log(age);
console.log(isStudent);
console.log(noData);
console.log(firstName);
console.log('==============');

console.log(typeof userName);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof noData);
console.log(typeof firstName);
// 2. Non-Primitive (Reference) Type
    //Object type : Collection of key-value pairs
    // Array : Collection of similar or non-similar data
    // Function : Object Reference type

console.log("--------------")
let person = { 
    name:'David Voigt', 
    age: 30, 
    gender: "male", 
    isMarried: true
} // object literal

//accessing the object

console.log(person.gender);
console.log("--------------")

let employee = new Object({
    name:'John Snow',
    salary: 120000,
    dept: 'Development'
});  // object with new keyword

console.log(employee.dept, employee.salary);

// Arrays
// let names = ['John', 'David', 'William', 'Rina', 'Steven']; // array of strings
let names2 = ['Joe', 'Tom', 'Jan', 'Jill', 'Sarah'];
// ^zero-indexing

// console.log(names);
// console.log(names[2]);
console.log(names2[0] + ' has a friend named ' + names2[3]);
console.log("\"Hi, " + names2[3] + ",\" said " + names2[0] +".")


console.log("++++++++++++++++");
console.log(userName2);
console.log(age2);
console.log(isStudent2);
console.log(noData2);
console.log(firstName2);
console.log("++++++++++++++++");


console.log("Let's pick a random name from our list: ");
console.log("Ready?");
console.log("I pick....");
setTimeout(function(){
    console.log(names2[Math.floor(Math.random() * 5)]);
    setTimeout(function(){
        console.log("Which name do you pick? Joe, Tom, Jan, Jill, or Sarah")
    }, 1000);
}, 1000);

setTimeout(function(){
    
    let inputSuccess = false;
    const inputChecker = {
    requestInput: function(){
        let userInput = prompt("Enter the name here:");
        if (names2.includes(userInput)){
        console.log(userInput + " is a great choice.");
        inputSuccess = true;
    } else {
        alert(userInput + " was not one of the options!");
        this.requestInput();
    }
}
}
inputChecker.requestInput();
    // if (names2.includes(userInput)){
    //     console.log(userInput + " is a great choice.");
    //     inputSuccess = true;
    // } else {
    //     alert(userInput + " was not one of the options!")// console.log(userInput + " wasn't one of the options.");
    //     inputChecker.requestInput();
    // }
        
}, 4000);