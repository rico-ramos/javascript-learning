// String Comparison
let username = "john_doe_80";
let password = "john@123";

function login(userNameInput, passwordInput){

    if(username == userNameInput.trim()){
        console.log("User found.")
        if(password ===passwordInput){
            //logic after login
            console.log("Login Successful.")
        } else{
            console.log("Invalid password.")
        }
    } else {
        console.log("User does not exist.")
    }
}

login("JohnDoe", "john@123");
console.log("-----------------------");
login("john_doe_80   ", "john123");
console.log("-----------------------");
login("john_doe_80   ", "john@123");

// Using localeCompare()
let listOfNames = ["elodie", "zo´","Alvaro", "Anne"];

listOfNames.sort(function(a, b){
    return a.localeCompare(b, 'en', { sensitivity: 'base'});
});
console.log(listOfNames);