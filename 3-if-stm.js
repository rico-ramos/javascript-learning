// Conditional Statements : If statement ----------

// let age = 13;
// let inputAge = prompt("Enter your age:");
// if (inputAge>=18) {
//     console.log("Ready to vote!!");
// } 

//Conditional Statement : If statement or else -----------
// if (inputAge>=18) {
//     console.log("Ready to vote!!");
// } else {
//     console.log("Sorry, not ready to vote.")
// }

// Conditional Statement : If or else if  - one outcoome, multiple conditions ----ver1------

const votingAgeChecker = {
    requestAgeInput: function() {
        let inputAge = prompt("Enter your age:");
        if (inputAge > 120) {
            alert(inputAge + " is invalid. Please enter a valid age.");
            this.requestAgeInput();
        } else if (inputAge >= 18) {
            console.log("You're Ready to Vote");
        } else if (inputAge < 18) {
            alert("Sorry, you're not ready to vote!");
        } else {
            alert("Please enter a valid age.")
            this.requestAgeInput();
        }
    }
}
votingAgeChecker.requestAgeInput();






// Conditional Statement : If or else if  - one outcoome, multiple conditions ----ver2------
let score = 90;

if (score > 90) {
    console.log("Excellent : A+");
} else if (score > 80) {
    console.log("Good job : A");
} else if (score > 70) {
    console.log("OK not bad : A");
} else {
    console.log("Keep practicing!: B- or C-");
}
