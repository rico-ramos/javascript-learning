// Function Declaration - syntax to declare functions

// Functions hoisted - calling a function before it is declared.
showMessage();

showData("Thursday (hoisted)");


function showMessage(){
    console.log("Today is a wonderful day.")
}


// function showMessage2(){};

function showData(day){
    console.log(`${day} is a wonderful day.`)
}


function showData1(greeting){
    console.log(`Today is a ${greeting} day.`)
}



showData1('awesome');

