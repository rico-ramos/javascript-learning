// String Methods
let str = "hello JS methods";
console.log("Original String: ", str);

// Convert to uppercase
let upperStr = str.toUpperCase();
console.log(upperStr);

// Convert to lowercase
let lowerStr = str.toLowerCase();
console.log(lowerStr);

// Convert to "title case" - Custom logic
// Clean up string
let str2 = "  hello worlllld   "
let cleanedStr = str2.trim();
console.log(cleanedStr);

// Check if a text exists in a string
let searchText = "hello";
let containsText = str.includes(searchText);
console.log(`Does the string contain "${searchText}"?`, containsText);

// Find the index of a substring
let indexOfText = str.indexOf(searchText);
console.log(`Index of "${searchText}":`, indexOfText);

// Replace String
let newStr = str.replace("JS", "Javascript");
console.log(newStr);

// Split a string into an array
let wordsArray = str.split(" ");
console.log(wordsArray);

// Join an array into a string
let joinedStr = wordsArray.join(" ");
console.log(joinedStr);

// Check if a string starts with a specifc substring
let startsWithHello = str.startsWith("hello");
console.log('Does the string start with Hello?', startsWithHello);

// Checks if a string ends with a specific substring
let endsWithMethods = str.endsWith("methods");
let includesMethod = str.includes("method");
console.log('Does the string end with methods?', endsWithMethods);
console.log('Does the string include with method?', includesMethod);