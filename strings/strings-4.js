// Email Validator
// ends with .com
// does it include @  ?

let email = "    user@example.com    ";
//validate email format: return true if valid
function isValidEmail(email) {
    //remove leading and trailing space
    let cleanedEmail = email.trim();
    if(cleanedEmail.length === 0){
        return false; //empty email is invalid
    }
    if(
        !cleanedEmail.includes("@") || 
        !cleanedEmail.includes(".") ||
        !cleanedEmail.endsWith(".com")

        // (
        //     !cleanedEmail.endsWith(".com") ||
        //     !cleanedEmail.endsWith(".org")
        // )
    ) {
        return false; // basic format check
    }
    return true;
    

}

//check if valid
console.log("is valid?", isValidEmail(email));
console.log("is valid?", isValidEmail("user@domain"));


let num1 = 12;
let mixed = num1 + "blue"
let stringNum = String(num1);
console.log(typeof String(num1));
// ============================ Phone Number Validator  ============================
let phoneNumber = "123-456-78901";
// let testNumber = NaN;
// console.log(testNumber.length);
// Validate phone number format: return true if valid, false otherwise
//  X  10 digits phone number with optional dashes
//   should start with a digit and can contain dashes
//   should not contain any other characters
//  X  should not be empty

//validate email format: return true if valid
function isValidPhoneNumber(phoneNumber) {
    //remove leading and trailing space
    let cleanedPhoneNumber = phoneNumber.trim().replaceAll("-", "");
        console.log(cleanedPhoneNumber);
        
    if(cleanedPhoneNumber.length === 0){
        console.log("Please enter a valid phone number.");
        return false; //empty phone number is invalid
    }
    let numberLength = cleanedPhoneNumber.length;
    let makeNumber = Number(cleanedPhoneNumber);
    console.log(numberLength);
    if(
        !cleanedPhoneNumber.length === 10
        // && !typeof makeNumber === "number"
        // !cleanedPhoneNumber.startsWith("") || 
        // !cleanedPhoneNumber.includes(".") ||
        // !cleanedPhoneNumber.endsWith(".com")

        // (
        //     !cleanedPhoneNumber.endsWith(".com") ||
        //     !cleanedPhoneNumber.endsWith(".org")
        // )
    ) {
        console.log("Please enter a valid, 10-digit phone number.")
        return false; // basic format check
    }
    
    return true;
    
}

console.log(isValidPhoneNumber(phoneNumber));
console.log(cleanedPhoneNumber.length == 10);