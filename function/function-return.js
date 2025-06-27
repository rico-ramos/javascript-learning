
function showGreeting(){
    let message = "Hello, "
    return function showName(name){
        return message + name + "!"
    }
}
// This call will return a function
let sayHello = showGreeting();

// This call will return a string message.
let message = sayHello('John Snow');

console.log(message);

// Example : Access Control / Permission Check

function checkPermission(role){
    return function(action){
        if (role === "admin"){
            //
            return `Allowed to ${action}`
        } else {
            //
            return `Not allowed to ${action}`
        }
    }
}

const adminCheck = checkPermission("admin");
console.log