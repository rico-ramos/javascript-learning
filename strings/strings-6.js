// String Regular Expression
function isValidEmail(email){
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return pattern.test(email)
}

// /    Character escaping
// ^    Start of string
// [^\s@]+  1 or more character
// @    Literal @ Symbol
// $    end
let email =  "test@example.com"; //"username@domain.extension";

console.log("Is valid email? ", isValidEmail(email))