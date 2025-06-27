/**
 * calc function
 * @param {*} num1 
 * @param {*} num2 
 * @param {*} callback 
 * @returns 
 */
function calculator(num1, num2, callback){
    return callback(num1, num2)
}

/**
 * add function
 * @param {*} num1 
 * @param {*} num2 
 * @returns 
 */
function add(num1, num2){
    return num1 + num2;
}

/**
 * s
 * @param {*} num1 
 * @param {*} num2 
 * @returns 
 */
function sub(num1, num2){
    return num1 - num2;
}
/**
 * Multipliatno function
 * @param {*} num1 
 * @param {*} num2 
 * @returns 
 */
function mul(num1, num2){
    return num1 * num2;
}

/**
 * The division functions
 * @param {*} num1 
 * @param {*} num2 
 * @returns 
 */
function div(num1, num2){
    return num1 / num2;
}

/**
 * Average function
 * @param {*} num1 
 * @param {*} num2 
 * @returns 
 */
function avg(num1, num2){
    return (num1 + num2)/2;
}


let x = 100
let y = 400
let result1 = calculator(100, 400, add);
console.log(`The addtion result is ${result1}`);


let result2 = calculator(x, y, sub);
console.log(`The subtraction of ${x} and ${y} is ${result2}`);

let result3 = calculator(x, y, mul);
console.log(`The multiplication of ${x} *  ${y} = ${result3}`)

let result4 = calculator(x, y, div);
console.log(`The division of ${x} *  ${y} = ${result4}`)


let result5 = calculator(x, y, avg);
console.log(`The avg of ${x} and  ${y} = ${result5}`)