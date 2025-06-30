// COMPLETE BELOW AND REMOVE ME 
// Fucntion when a function "remembers" variables from its outer scope 
// even after that out function has finished executing.

// global variable
let lastName = "Miller";
//outer function
function fullName(){
    let middleName = "Lacy"
    //inner function : closure function
    return function combine(){
        //inner variable
        let firstName = "John";
        return `${firstName} ${middleName} ${lastName}`;
    }
}

let inner = fullName();
let result = inner();
console.log(result)

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
console.log("Interest on home loan: ", homeLoanInterest(400000));

console.log("Interest on home loan: ", homeLoanInterest(500000));

// Take two
function loanCalculator2(rate2){
    //closure
    return function(principal2){
        return (principal2*rate2)/100;
    }
}

let homeLoanInterest2 = loanCalculator2(6.3)
console.log("Interest on home loan: ",homeLoanInterest2(400000));
