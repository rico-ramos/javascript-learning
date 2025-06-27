// function declaration
// 1. Non-parameterized function
function showMessage(){
    //logic
    console.log("Today is a good day");
;}

// function calling
showMessage();

// 2. Parameterized Function
// Create a blender machine
function blender(fruit){
    return "Here is your " + fruit + " smoothie";

}

let result1 = blender("banana");
let result2 = blender("apple");

console.log(result1);
console.log(result2);

// Multi-parameterized function
/**
 *  Prepare a smoothie using given ingredients
 * @param {*} fruit - main fruit // or any notes you want add about parameters
 * @param {*} liquid - the main liquid base
 * @param {*} sweetner - the sweetner
 */
function makeSmoothie(fruit, liquid, sweetner){
    console.log(`Here is your ${fruit} smoothie with
     ${liquid} and touch of ${sweetner}!`);
}

// makeSmoothie();  //undefined
makeSmoothie("mango");

makeSmoothie("banana", "milk", "honey");
// console.log(makeSmoothie("mango", "almond milk", "sugar"));