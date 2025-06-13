// Conditional Statements : If statement

let age = 13;
if (age>=18) {
    console.log("Ready to vote!!");
} 

//Conditional Statement : If statement or else
if (age>=18) {
    console.log("Ready to vote!!");
} else {
    console.log("Sorry, not ready to vote.")
}

// Conditional Statement : If or else if  - one outcoome, multiple conditions
let score = 90;

if(score>90) {
    console.log("Excellent : A+");
} else if(score>80) {
    console.log("Good job : A");
} else if (score>70) {
    console.log("OK not bad : A");
} else {
    console.log("Keep practicing!: B- or C-");
}
