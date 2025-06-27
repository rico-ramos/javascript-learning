// Fucntion when a function "remembers" variables from its outer scope 
// even after that out function has finished executing.

// global variable
let 


// outer function
    // outer variable


    //inner function : closure function

        // inner variable


        //console.log(inner+outer+global)




// Loan Interest Calculator
function loanCalculator(rate){
    //closure
    return function(principal){
        return (principal*rate)/100
    }
}

let homeLoanInterest = loanCalculator(6.5); // closure remembers rate = 6.5%
console.log(homeLoanInterest(5000000))