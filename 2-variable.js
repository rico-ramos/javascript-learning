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


let person = { 
    name:'David Voigt', 
    age: 30, 
    gender: "male", 
    isMarried: true
} // object literal

//accessing the object

console.log(person.gender);

let employee = new Object({
    name:'John Snow',
    salary: 120000,
    dept: 'Development'
});  // object with new keyword

console.log(employee.dept, employee.salary);

// Arrays
let names = ['John', 'David', 'William', 'Rina', 'Steven']; // array of strings

// ^zero-indexing

console.log(names);
console.log(names[2]);