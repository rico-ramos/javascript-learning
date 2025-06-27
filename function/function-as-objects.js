// In JavsScript, functiosn are first class objects with means you can add
//Properties
// Methods
// Behaviors like any objects

function message(name){
    return 'Hello user ' + name;
}

// Add a property to a fuctnion
message.language = "English"

console.log(message("John Smith"));
console.log(message.language); // English
console.log(typeof message); // function

console.log(message instanceof Function); // true
console.log(message instanceof Object); // true