// Array is collection of data.
// It is a data structrue that can hold multiple values in single variable of saem or different types
// Arrays are zero-indexed 

let numbers = [10,20,30,40,50];
console.log(numbers);

console.log(numbers[0]);
console.log(numbers[4]);

console.log(numbers[numbers.length-1]);
console.log(numbers.length);


let mixedArray = [10, "Hello", true, null, { name: "Alice "}, [1,2,3]];
console.log(mixedArray);
console.log(mixedArray[1]);
console.log(mixedArray[4]);
console.log(mixedArray[4].name); // Accessing property of an object in an array
console.log(mixedArray[5][2]); // Accessing an element of a nested array - 5th array element in first array, 2 index element of seciond array

let emptyArray = [];
let emptyArray2 = new Array();

// Add eleement to empty array
emptyArray.push(60);  //push adds to END of an array
emptyArray.push(70);
console.log(emptyArray);


// Add elemetnts to start of array
emptyArray.unshift(50); // Adds element to start
emptyArray.unshift(40);
console.log(emptyArray)

// Removing elements for an array;
let removedElement = emptyArray.pop(); // Removings the last element
console.log("removedElement: ", removedElement)
console.log("emptyArray:", emptyArray)

// Removing element from the frist index
removedElement = emptyArray.shift();
console.log("removedElement: ", removedElement)
console.log("emptyArray:", emptyArray)


let numbers2 = [1,2,3,4,5];
let numbers3 = [6,7,8,9,10];
let concatenatedArray = numbers2.concat(numbers3);

console.log(concatenatedArray);

//slicing

//mapping an array
    // doubling the array

// Reducing an array
let reducedArray = 

//Joining