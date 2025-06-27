// Function Expression - syntax to declare functions
// Call on VARIABLE vs. function name

// NOT hoisted: You can't cal it before the line where it's defined

// showText();
// 1. Labeled function expression
let showText = function showMessage(){
    console.log("Today is a wonderful day.")
}

// 2. anonymous function expression - More commonly used
let showData = function (day){
    console.log(`${day} is a wonderful day.`)
}


let showData1 = function (greeting){
    console.log(`Today is a ${greeting} day.`)
}


//showMessage(); // Error: showMessage is not defined
//call 
showText();
showData("Thursday");
showData1('super');