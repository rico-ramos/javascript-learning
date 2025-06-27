// bind(), call(), apply() are Function methods in JS that allow control of the value of this and how functions are executed.

// bind(): Returns a new function with fixed 'this'

// object
const user = {
    name : 'jan doe',
    age : 53
}

function greet(greetings, expression) {
    console.log(`${greetings}, ${this.name}${expression}`);
}

// bind() Does not call immediately
let sayAfternoon = greet.bind(user, "Good Afternoon")

sayAfternoon();

// call() :: Calls function immediately
greet.call(user, 'Good day');


// apply() :: Same as call(), but arguments as an array

greet.apply(user, ["Good night", "!"]);
