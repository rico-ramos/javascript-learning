// Arrow Functions
// for writing shorter syntax in JS
let showText =  ()=>{
    console.log("Today is a super, duper, wonderful day.")
}


let showData = (day) => {
    console.log(`${day} is a wonderful day.`)
}


let showData1 = (greeting) => {
    console.log(`Today is a ${greeting} day.`)
}

//call 
showText();
showData("Thursday");
showData1('super');

// Traditional
// function add(number1, number2){
//     return number1 + number2;
// }

//
let add = (num1, num2) => num1 + num2;

let result = add(1000, 3000);

// console.log(add(1000, 2000));
console.log(result);


const calculateInterest = (principal, interest, time) => (principal*interest*time)/100;
console.log(calculateInterest(1000, 5, 1));

