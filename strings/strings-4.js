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

// PHone number validator